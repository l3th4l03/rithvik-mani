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
          {
            title: "Protein Binder Generator",
            content: (
              <>
                AWS based serverless pipeline that runs RFDiffusion, ProteinMPNN, and ColabFold (a lighter-weight version of AlphaFold 2 with some tweaks) to generate candidate proteins that bind to a given target protein (inputted by a .pdb file). Deployed with CloudFormation.{" "}
                <a
                  href="https://github.com/l3th4l03/protein-binder-gen-aws"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center ml-1 hover:opacity-70 transition-opacity"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </>
            )
          },
          { title: "Stethopy", content: "Contributed to the development of a mobile application and medical device kit for telehealth doctors for stethoscope use over the phone. Used C++ and Python." },
          { title: "EPR Research Project", content: "Research Paper titled: The Effect of Different Solutes on the Efficacy of Emergency Preservation Resuscitation (EPR) to Improve Efficacy, Affordability, and Feasibility of the Process. Researched and collected histological data on E. Coli, testing 3 different solutes for efficacy, safety, and cost in EPR." },
        ]}
      />

      <BrutalistAccordion
        title="Experience"
        showCompanyBorder={false}
        items={[
          { 
            title: "Cofounder & CEO", 
            company: (
              <span style={{ letterSpacing: '-0.05em' }}>
                Arcel AI (<a href="https://arcel.ai" target="_blank" rel="noopener noreferrer" className="hover:underline">arcel.ai</a>)
              </span>
            ),
            content: "Control your entire finance stack with AI Agents. Entirely built into Google Sheets and MS Excel." 
          },
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