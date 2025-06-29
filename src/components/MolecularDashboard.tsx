"use client";

import { useState, useEffect } from 'react';
import Terminal from './Terminal';
import ProteinViewer from './ProteinViewer';
import InteractiveTerminal from './InteractiveTerminal';

const MolecularDashboard = () => {
  const [showProteinViewer, setShowProteinViewer] = useState(false);
  const [isInteractiveTermOpen, setInteractiveTermOpen] = useState(false);
  const [sectionToNavigate, setSectionToNavigate] = useState<string | null>(null);
  const [activeCard, setActiveCard] = useState<string | null>(null);

  useEffect(() => {
    // Show protein viewer after 7 seconds
    if (!showProteinViewer) {
      const timer = setTimeout(() => {
        setShowProteinViewer(true);
      }, 7000);

      return () => clearTimeout(timer);
    }
  }, [showProteinViewer]);

  const toggleInteractiveTerminal = () => {
    setInteractiveTermOpen(prev => !prev);
  };

  const handleNavigate = (section: string) => {
    setSectionToNavigate(section);
  };
  
  const onNavigateComplete = () => {
    setSectionToNavigate(null);
  };

  return (
    <>
      {!showProteinViewer ? (
        <Terminal />
      ) : (
        <ProteinViewer 
          onSectionSelect={() => {}} 
          activeSection="" 
          onShowTerminal={toggleInteractiveTerminal} 
          sectionToNavigate={sectionToNavigate}
          onNavigateComplete={onNavigateComplete}
          onActiveCardChange={setActiveCard}
        />
      )}
      {isInteractiveTermOpen && <InteractiveTerminal onClose={toggleInteractiveTerminal} onNavigate={handleNavigate} activeCard={activeCard} />}
    </>
  );
};

export default MolecularDashboard; 