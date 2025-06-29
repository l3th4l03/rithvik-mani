"use client";

import { useEffect, useRef, useState } from 'react';
import { InfoCard, POI } from './InfoCard';
import TerminalIcon from './TerminalIcon';

declare global {
  interface Window {
    $3Dmol: any;
  }
}

interface ProteinViewerProps {
  onSectionSelect: (section: string) => void;
  activeSection: string;
  onShowTerminal: () => void;
  sectionToNavigate: string | null;
  onNavigateComplete: () => void;
  onActiveCardChange: (cardTitle: string | null) => void;
}

const pointsOfInterest: POI[] = [
  {
    id: 'experience',
    title: 'Experience',
    content: 'Here is a summary of my professional experience...',
    position: { x: -40, y: 30, z: 30 },
    color: 'red',
  },
  {
    id: 'projects',
    title: 'Projects',
    content: 'Here are some of the projects I have worked on...',
    position: { x: 40, y: 30, z: -30 },
    color: 'green',
  },
  {
    id: 'interests',
    title: 'Interests',
    content: 'I like building computers, video games, tennis, music, fashion, watching penguinz0, and Travis Scott',
    position: { x: -40, y: -30, z: -30 },
    color: 'purple',
  },
  {
    id: 'about-me',
    title: 'About Me',
    content: 'Hi! I\'m Rithvik, a senior at UIUC majoring in Bioengineering and minoring in Computer Science. I\'m interested in entrepreneurship, biology, and computers. I\'m currently building Arcel AI (arcel.ai), researching AI & Robotics in agriculture at the USDA this summer.',
    position: { x: 40, y: -30, z: 30 },
    color: 'blue',
  },
];

const ProteinViewer: React.FC<ProteinViewerProps> = ({ onSectionSelect, activeSection, onShowTerminal, sectionToNavigate, onNavigateComplete, onActiveCardChange }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const autoRotateRef = useRef<NodeJS.Timeout | null>(null);
  const isInteractingRef = useRef(false);
  const [selectedPoi, setSelectedPoi] = useState<POI | null>(null);
  const selectedPoiRef = useRef<POI | null>(null);
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });
  const [pois, setPois] = useState<POI[]>([]);

  useEffect(() => {
    selectedPoiRef.current = selectedPoi;
  }, [selectedPoi]);

  useEffect(() => {
    if (sectionToNavigate && viewerRef.current) {
        const poiToNavigate = pois.find(p => p.title.toLowerCase() === sectionToNavigate.toLowerCase());
        if (poiToNavigate) {
            handlePoiClick(poiToNavigate);
        }
        onNavigateComplete();
    }
  }, [sectionToNavigate, pois]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://3Dmol.org/build/3Dmol-min.js';
    script.async = true;
    script.onload = () => {
      initializeViewer();
    };
    document.head.appendChild(script);

    return () => {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current);
      }
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const startAutoRotation = () => {
    if (autoRotateRef.current) clearInterval(autoRotateRef.current);
    
    autoRotateRef.current = setInterval(() => {
      if (viewerRef.current && !isInteractingRef.current) {
        // Very slow, gentle left rotation
        viewerRef.current.rotate(0.5, 'y');
        viewerRef.current.render();
      }
    }, 50); // 20 FPS for smooth rotation
  };

  const stopAutoRotation = () => {
    if (autoRotateRef.current) {
      clearInterval(autoRotateRef.current);
      autoRotateRef.current = null;
    }
  };

  const initializeViewer = async () => {
    if (containerRef.current && window.$3Dmol) {
      // Create viewer with black background
      const config = {
        backgroundColor: 'black',
        antialias: true,
        quality: 'high'
      };

      const viewer = window.$3Dmol.createViewer(containerRef.current, config);
      viewer.setBackgroundColor('black');

      try {
        // Fetch 5F9R - CRISPR-Cas9 bound to DNA
        const response = await fetch('https://files.rcsb.org/download/5F9R.pdb');
        const pdbData = await response.text();

        // Add structure to viewer
        viewer.addModel(pdbData, 'pdb');

        // --- Calculate bounding box and reposition POIs ---
        const atoms = viewer.getAtomsFromSel({});
        let min = { x: Infinity, y: Infinity, z: Infinity };
        let max = { x: -Infinity, y: -Infinity, z: -Infinity };

        for (const atom of atoms) {
          min.x = Math.min(min.x, atom.x);
          min.y = Math.min(min.y, atom.y);
          min.z = Math.min(min.z, atom.z);
          max.x = Math.max(max.x, atom.x);
          max.y = Math.max(max.y, atom.y);
          max.z = Math.max(max.z, atom.z);
        }

        const center = {
          x: (min.x + max.x) / 2,
          y: (min.y + max.y) / 2,
          z: (min.z + max.z) / 2,
        };

        const size = {
          x: max.x - min.x,
          y: max.y - min.y,
          z: max.z - min.z,
        };
        
        const updatedPois = [
          { ...pointsOfInterest[0], position: { x: center.x - size.x * 0.6, y: center.y + size.y * 0.3, z: center.z } },
          { ...pointsOfInterest[1], position: { x: center.x + size.x * 0.6, y: center.y, z: center.z } },
          { ...pointsOfInterest[2], position: { x: center.x, y: center.y - size.y * 0.6, z: center.z } },
          { ...pointsOfInterest[3], position: { x: center.x, y: center.y + size.y * 0.6, z: center.z } },
        ];
        setPois(updatedPois);
        // --- End of repositioning logic ---

        // Set cartoon representation with secondary structure coloring
        viewer.setStyle({}, {
          cartoon: {
            color: 'spectrum',
            colorscheme: 'secondary',
            thickness: 0.3,
            opacity: 1.0,
            arrows: true
          }
        });

        // Show nucleic acids (DNA/RNA) as sticks for contrast
        viewer.setStyle({resn: ['DA','DT','DG','DC','A','U','G','C']}, {
          stick: {
            radius: 0.3,
            colorscheme: 'nucleic'
          }
        });

        // Add clickable spheres for points of interest
        updatedPois.forEach(poi => {
          viewer.addSphere({
            center: poi.position,
            radius: 2.0,
            color: poi.color,
            clickable: true,
            callback: () => handlePoiClick(poi),
          });
        });

        // Set initial view, zoom to ~60%, and lock zoom
        viewer.zoomTo();
        viewer.zoom(1.0); // Using 0.7 to make it smaller.
        viewer.render();

        // Lock the zoom using the viewer's built-in controls.
        const currentDistance = viewer.getPerceivedDistance();
        if (currentDistance) {
          viewer.setZoomLimits(currentDistance, currentDistance);
        }

        // Interaction tracking for auto-rotation
        const container = containerRef.current;
        const handleMouseDown = (e: MouseEvent) => {
          // Only track rotation interactions (left mouse button)
          if (e.button === 0) {
            isInteractingRef.current = true;
            stopAutoRotation();
          }
        };

        const handleMouseUp = () => {
          isInteractingRef.current = false;
          // Restart auto-rotation after 2 seconds of no interaction
          setTimeout(() => {
            if (!isInteractingRef.current) {
              startAutoRotation();
            }
          }, 2000);
        };

        // Mouse interaction for rotation
        container.addEventListener('mousedown', handleMouseDown);
        container.addEventListener('mouseup', handleMouseUp);
        container.addEventListener('mouseleave', handleMouseUp);

        // Start auto-rotation
        setTimeout(() => {
          startAutoRotation();
        }, 3000); // Start auto-rotation after 3 seconds

        viewerRef.current = viewer;
        setIsLoaded(true);

      } catch (error) {
        console.error('Error loading CRISPR-Cas9 structure:', error);
        setIsLoaded(true);
      }
    }
  };

  const handlePoiClick = (poi: POI) => {
    setSelectedPoi(poi);
    onActiveCardChange(poi.title);
    const screenPos = viewerRef.current.modelToScreen(poi.position);

    const targetX = screenPos.x < window.innerWidth / 2 ? window.innerWidth * 0.25 : window.innerWidth * 0.75;
    const targetY = screenPos.y;

    setCardPosition({ x: targetX, y: targetY });
  };

  const handleCloseCard = () => {
    setSelectedPoi(null);
    onActiveCardChange(null);
    startAutoRotation();
  };

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center relative">
      <TerminalIcon onClick={onShowTerminal} />
      <div 
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing select-none"
        style={{ 
          backgroundColor: 'black',
          userSelect: 'none',
          touchAction: 'pan-x pan-y', // Allow panning but prevent pinch-zoom
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          msUserSelect: 'none'
        }}
      />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-gray-500 font-mono">Loading CRISPR-Cas9 structure...</div>
        </div>
      )}
      <InfoCard poi={selectedPoi} onClose={handleCloseCard} cardPosition={cardPosition} />
    </div>
  );
};

export default ProteinViewer; 