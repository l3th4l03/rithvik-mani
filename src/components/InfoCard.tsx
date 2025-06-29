"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRef, useEffect, useState } from "react";

export interface POI {
  id: string;
  title: string;
  content: string;
  position: { x: number; y: number; z: number };
  color: string;
  cameraPosition?: { x: number; y: number; z: number };
  cardPosition?: { x: number; y: number };
}

interface InfoCardProps {
  poi: POI | null;
  onClose: () => void;
  cardPosition: { x: number; y: number };
}

const experienceData = [

    {
      company: "Arcel AI",
      role: "Co-Founder & CEO",
      date: "Jan 2025 to Present",
      description: "Building the future of spreadsheets @ arcel.ai.",
    },
    {
        company: "USDA & NIFA REEU",
        role: "Undergraduate Researcher",
        date: "Starting May 2025",
        description: "Researched 3D Reconstruction, SLAM, and Multi-View Stereo pipelines in computer vision to build autonomous bamboo harvesting vehicles powered by AI.",
    },
    {
        company: "US Army Corps of Engineers, DoD",
        role: "Synthetic & Computational Biology Research Intern",
        date: "Aug 2024 to Dec 2024",
        description: "Researched the germination pathway of Bacillus Subtilis spores for DoD applications.",
    },
    {
        company: "Nuronz LLC, B&SC AZ",
        role: "EEG Monitoring Intern",
        date: "May 2024 to Aug 2024",
        description: "Monitored, recorded, and analyzed brain activity patterns for patients at the Brain & Spine Center of Arizona.",
    },
    {
        company: "Equilocalm",
        role: "R&D Intern",
        date: "May 2024 to Aug 2024",
        description: "Contributed to the R&D of Menopatch,a personalized trans-dermal skin patch to treat menopausal symptoms.",
    },
    {
        company: "Syneos Health",
        role: "Consulting Intern",
        date: "June 2023 - Aug 2023",
        description: "Collaborated with pharma clients in performing market access viability & compliance determination for lead drugs.",
    },
    {
        company: "Founders - Illinois Entrepreneurs",
        role: "Head of Events",
        date: "Jan 2023 to Dec 2024",
        description: "Student led 501(c)(3) organization focused on promoting and fostering entrepreneurship throughout the Midwest. Organized Forge, the largest student-run startup competition in the Midwest.",
    }
]

const projectsData = [
    {
        name: "Personal Website",
        description: "This website, built with Next.js and 3Dmol.js.",
    },
    {
        name: "Stethopy",
        description: "Helped develop mobile application and medical device kit for telehealth doctors for stethoscope use over the phone.",
    },
    {
        name: "EPR Research Project",
        description: "Research Paper titled: The Effect of Different Solutes on the Efficacy of Emergency Preservation Resuscitation (EPR) to Improve Efficacy, Affordability, and Feasibility of the Process. \n Researched and collected histological data on E. Coli, testing 3 different solutes for efficacy, safety, and cost in EPR.",
    }
]

export const InfoCard: React.FC<InfoCardProps> = ({ poi, onClose, cardPosition }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [adjustedPosition, setAdjustedPosition] = useState(cardPosition);

    useEffect(() => {
        if (cardRef.current) {
            const cardRect = cardRef.current.getBoundingClientRect();
            let newX = cardPosition.x;
            let newY = cardPosition.y;
            const padding = 20;

            if (newX - cardRect.width / 2 < padding) newX = cardRect.width / 2 + padding;
            if (newX + cardRect.width / 2 > window.innerWidth - padding) newX = window.innerWidth - cardRect.width / 2 - padding;
            if (newY - cardRect.height / 2 < padding) newY = cardRect.height / 2 + padding;
            if (newY + cardRect.height / 2 > window.innerHeight - padding) newY = window.innerHeight - cardRect.height / 2 - padding;
            
            setAdjustedPosition({ x: newX, y: newY });
        }
    }, [cardPosition]);
    
  if (!poi) return null;

  return (
    <div
      ref={cardRef}
      className="absolute"
      style={{
        left: `${adjustedPosition.x}px`,
        top: `${adjustedPosition.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <Card className={`w-[450px] ${poi.id === 'experience' || poi.id === 'projects' ? 'h-[60vh]' : 'h-auto'} bg-white/80 backdrop-blur-sm border-gray-200 shadow-xl flex flex-col`}>
        <CardHeader className="flex flex-row items-center justify-between flex-shrink-0">
          <CardTitle className="text-lg font-bold text-gray-800">{poi.title}</CardTitle>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </CardHeader>
        <CardContent className={`${poi.id === 'experience' || poi.id === 'projects' ? 'flex-grow overflow-y-auto' : ''} no-scrollbar`}>
          {poi.id === 'experience' ? (
            <Accordion type="single" collapsible className="w-full">
              {experienceData.map((exp, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger>
                    <div className="flex flex-col sm:flex-row sm:justify-between w-full pr-4 text-left">
                        <div className="flex flex-col">
                          <span className="font-semibold text-gray-900">{exp.company}</span>
                          <span className="text-sm text-gray-600">{exp.role}</span>
                        </div>
                        <span className="text-sm text-gray-500 mt-1 sm:mt-0 sm:text-right">{exp.date}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-2 pb-1">
                      <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : poi.id === 'projects' ? (
            <Accordion type="single" collapsible className="w-full">
                {projectsData.map((project, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger>
                            <span>{project.name}</span>
                        </AccordionTrigger>
                        <AccordionContent>
                            {project.description}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
          ) : (
            <p className="text-gray-700">{poi.content}</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}; 