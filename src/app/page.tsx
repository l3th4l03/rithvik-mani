"use client";

import BrutalistAccordion from "../components/BrutalistAccordion";

export default function Home() {
  return (
    <main className="text-black min-h-screen w-full">
      <section className="px-4 sm:px-6 md:px-10 min-h-screen flex flex-col items-center justify-center text-center relative">
        {/* Corner Links */}
        <a 
          href="https://www.linkedin.com/in/rithvik-mani-6089b8261/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute top-4 left-4 sm:top-6 sm:left-6 font-header text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl hover:underline"
        >
          linkedin
        </a>
        
        <a 
          href="https://github.com/l3th4l03" 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute top-4 right-4 sm:top-6 sm:right-6 font-header text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl hover:underline"
        >
          github
        </a>
        
        <a 
          href="mailto:rithvikmani3@gmail.com" 
          className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 font-header text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl hover:underline"
        >
          email
        </a>
        
        <a 
          href="/Rithvik_Mani_Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 font-header text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl hover:underline"
        >
          resume
        </a>

        {/* Hero Content */}
        <h1 className="font-header text-[20vw] sm:text-[18vw] md:text-[16vw] lg:text-8xl xl:text-9xl leading-none px-2">Rithvik Mani</h1>
        <div className="border-b-2 border-black my-4 sm:my-6 w-full max-w-4xl" />
        <div className="font-header text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex flex-row items-center justify-center gap-2 sm:gap-3 px-2">
          <span>BIOE + CS @</span>
          <img 
            src="/uiuc_logo.png" 
            alt="University of Illinois at Urbana-Champaign" 
            className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 -ml-0 sm:-ml-1"
          />
        </div>

        {/* Scroll Down Chevron */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2">
          <svg 
            className="w-6 h-6 sm:w-8 sm:h-8 text-black" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
          </svg>
        </div>
      </section>

      <BrutalistAccordion
        title="Projects"
        items={[
          { title: "Protein Binder Generator", content: "Description coming soon." },
          { title: "Stethopy", content: "Contributed to the development of a mobile application and medical device kit for telehealth doctors for stethoscope use over the phone. Used C++ and Python." },
          { title: "EPR Research Project", content: "Research Paper titled: The Effect of Different Solutes on the Efficacy of Emergency Preservation Resuscitation (EPR) to Improve Efficacy, Affordability, and Feasibility of the Process. Researched and collected histological data on E. Coli, testing 3 different solutes for efficacy, safety, and cost in EPR." },
        ]}
      />

      <BrutalistAccordion
        title="Experience"
        showCompanyBorder={false}
        items={[
          { 
            title: "AI & Robotics Research Intern", 
            company: "USDA & NIFA REU Program",
            content: "Researched 3D Reconstruction, SLAM, and Multi-View Stereo pipelines in computer vision to build autonomous bamboo harvesting vehicles powered by AI." 
          },
          { 
            title: "Synthetic & Computational Biology Research Intern", 
            company: "US Army Corps of Engineers, Department of Defense",
            content: "Researched the germination pathway of Bacillus Subtilis spores for DoD applications." 
          },
          { 
            title: "MenoPatch R&D Intern", 
            company: "Equilocalm, Carle Illinois College of Medicine",
            content: "Contributed to the R&D of Menopatch,a personalized trans-dermal skin patch to treat menopausal symptoms." 
          },
          { 
            title: "EEG Monitoring Intern", 
            company: "Nuronz LLC Brain & Spine Center of Arizona",
            content: "Monitored, recorded, and analyzed brain activity patterns for patients at the Brain & Spine Center of Arizona." 
          },
          { 
            title: "Medical Value & Access Consulting Intern", 
            company: "Syneos Health",
            content: "Collaborated with pharma clients in performing market access viability & compliance determination for lead drugs." 
          },
          { 
            title: "Executive Board, Head of Events", 
            company: "Founders - Illinois Entrepreneurs",
            content: "Student led 501(c)(3) organization focused on promoting and fostering entrepreneurship throughout the Midwest. Organized Forge, the largest student-run startup competition in the Midwest."
          }
        ]}
      />
    </main>
  );
}