"use client";

interface TerminalIconProps {
  onClick?: () => void;
}

const TerminalIcon: React.FC<TerminalIconProps> = ({ onClick }) => {
  return (
    <>
      <div className="absolute top-4 left-4 flex items-center space-x-2 z-50">
        <button
          onClick={onClick}
          className="w-10 h-10 bg-black/80 backdrop-blur-sm border border-gray-300 rounded-md shadow-lg flex items-center justify-center transition-transform transform hover:scale-110"
          aria-label="Open Terminal"
        >
          <svg
            className="w-6 h-6"
            data-testid="geist-icon"
            height="16"
            strokeLinejoin="round"
            style={{ color: "white" }}
            viewBox="0 0 16 16"
            width="16"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.5 2.5H14.5V12.5C14.5 13.0523 14.0523 13.5 13.5 13.5H2.5C1.94772 13.5 1.5 13.0523 1.5 12.5V2.5ZM0 1H1.5H14.5H16V2.5V12.5C16 13.8807 14.8807 15 13.5 15H2.5C1.11929 15 0 13.8807 0 12.5V2.5V1ZM4 11.1339L4.44194 10.6919L6.51516 8.61872C6.85687 8.27701 6.85687 7.72299 6.51517 7.38128L4.44194 5.30806L4 4.86612L3.11612 5.75L3.55806 6.19194L5.36612 8L3.55806 9.80806L3.11612 10.25L4 11.1339ZM8 9.75494H8.6225H11.75H12.3725V10.9999H11.75H8.6225H8V9.75494Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
        <button
          onClick={() => window.open('/Rithvik_Mani_Resume.pdf', '_blank')}
          className="w-10 h-10 bg-black/80 backdrop-blur-sm border border-gray-300 rounded-md shadow-lg flex items-center justify-center transition-transform transform hover:scale-110"
          aria-label="Open Document"
        >
          <svg data-testid="geist-icon" height="16" strokeLinejoin="round" style={{color:"white"}} viewBox="0 0 16 16" width="16">
            <path fillRule="evenodd" clipRule="evenodd" d="M14.5 6.5V13.5C14.5 14.8807 13.3807 16 12 16H4C2.61929 16 1.5 14.8807 1.5 13.5V1.5V0H3H8H9.08579C9.351 0 9.60536 0.105357 9.79289 0.292893L14.2071 4.70711C14.3946 4.89464 14.5 5.149 14.5 5.41421V6.5ZM13 6.5V13.5C13 14.0523 12.5523 14.5 12 14.5H4C3.44772 14.5 3 14.0523 3 13.5V1.5H8V5V6.5H9.5H13ZM9.5 2.12132V5H12.3787L9.5 2.12132Z" fill="currentColor"></path>
          </svg>
        </button>
      </div>
      <div className="absolute top-4 right-4 flex items-center space-x-2 z-50">
        <a href="mailto:rithvikmani3@gmail.com" aria-label="Email">
          <button
            className="w-10 h-10 bg-black/80 backdrop-blur-sm border border-gray-300 rounded-md shadow-lg flex items-center justify-center transition-transform transform hover:scale-110"
          >
            <svg data-testid="geist-icon" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16" style={{color:"white"}}>
              <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.57757 0 0 3.61682 0 8.03093C0 12.411 3.54999 16 7.9384 16C9.42621 16 10.8841 15.5819 12.1457 14.7934L12.3975 14.636L11.6025 13.364L11.3507 13.5214C10.3275 14.1609 9.14508 14.5 7.9384 14.5C4.38672 14.5 1.5 11.5909 1.5 8.03093C1.5 4.43692 4.4143 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8V8.60714C14.5 9.3764 13.8764 10 13.1071 10C12.2195 10 11.5 9.28046 11.5 8.39286V8V4.5H10V5.12734C9.43308 4.73191 8.74362 4.5 8 4.5C6.067 4.5 4.5 6.067 4.5 8C4.5 9.933 6.067 11.5 8 11.5C9.05713 11.5 10.0048 11.0313 10.6466 10.2904C11.2148 11.0262 12.1056 11.5 13.1071 11.5C14.7048 11.5 16 10.2048 16 8.60714V8C16 3.58172 12.4183 0 8 0ZM10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10C9.10457 10 10 9.10457 10 8Z" fill="currentColor"></path>
            </svg>
          </button>
        </a>
        <a href="https://github.com/l3th4l03" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <button
            className="w-10 h-10 bg-black/80 backdrop-blur-sm border border-gray-300 rounded-md shadow-lg flex items-center justify-center transition-transform transform hover:scale-110"
          >
            <svg data-testid="geist-icon" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16" style={{color:"white"}}>
              <g clipPath="url(#clip0_872_3147)">
                <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.57879 0 7.99729C0 11.5361 2.29 14.5251 5.47 15.5847C5.87 15.6547 6.02 15.4148 6.02 15.2049C6.02 15.0149 6.01 14.3851 6.01 13.7154C4 14.0852 3.48 13.2255 3.32 12.7757C3.23 12.5458 2.84 11.836 2.5 11.6461C2.22 11.4961 1.82 11.1262 2.49 11.1162C3.12 11.1062 3.57 11.696 3.72 11.936C4.44 13.1455 5.59 12.8057 6.05 12.5957C6.12 12.0759 6.33 11.726 6.56 11.5261C4.78 11.3262 2.92 10.6364 2.92 7.57743C2.92 6.70773 3.23 5.98797 3.74 5.42816C3.66 5.22823 3.38 4.40851 3.82 3.30888C3.82 3.30888 4.49 3.09895 6.02 4.1286C6.66 3.94866 7.34 3.85869 8.02 3.85869C8.7 3.85869 9.38 3.94866 10.02 4.1286C11.55 3.08895 12.22 3.30888 12.22 3.30888C12.66 4.40851 12.38 5.22823 12.3 5.42816C12.81 5.98797 13.12 6.69773 13.12 7.57743C13.12 10.6464 11.25 11.3262 9.47 11.5261C9.76 11.776 10.01 12.2558 10.01 13.0056C10.01 14.0752 10 14.9349 10 15.2049C10 15.4148 10.15 15.6647 10.55 15.5847C12.1381 15.0488 13.5182 14.0284 14.4958 12.6673C15.4735 11.3062 15.9996 9.67293 16 7.99729C16 3.57879 12.42 0 8 0Z" fill="currentColor"></path>
              </g>
              <defs>
                <clipPath id="clip0_872_3147">
                  <rect width="16" height="16" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </button>
        </a>
        <a href="https://www.linkedin.com/in/rithvik-mani-6089b8261/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <button
            className="w-10 h-10 bg-black/80 backdrop-blur-sm border border-gray-300 rounded-md shadow-lg flex items-center justify-center transition-transform transform hover:scale-110"
          >
            <svg data-testid="geist-icon" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16" style={{color:"white"}}>
              <path id="Subtract" fillRule="evenodd" clipRule="evenodd" d="M2 0C0.895431 0 0 0.895431 0 2V14C0 15.1046 0.895431 16 2 16H14C15.1046 16 16 15.1046 16 14V2C16 0.895431 15.1046 0 14 0H2ZM5 6.75V13H3V6.75H5ZM5 4.50008C5 5.05554 4.61409 5.5 3.99408 5.5H3.98249C3.38582 5.5 3 5.05554 3 4.50008C3 3.93213 3.39765 3.5 4.00584 3.5C4.61409 3.5 4.98845 3.93213 5 4.50008ZM8.5 13H6.5C6.5 13 6.53178 7.43224 6.50007 6.75H8.5V7.78371C8.5 7.78371 9 6.75 10.5 6.75C12 6.75 13 7.59782 13 9.83107V13H11V10.1103C11 10.1103 11 8.46616 9.7361 8.46616C8.4722 8.46616 8.5 9.93972 8.5 9.93972V13Z" fill="currentColor"></path>
            </svg>
          </button>
        </a>
        <a href="https://x.com/rsm3k" target="_blank" rel="noopener noreferrer" aria-label="X">
          <button
            className="w-10 h-10 bg-black/80 backdrop-blur-sm border border-gray-300 rounded-md shadow-lg flex items-center justify-center transition-transform transform hover:scale-110"
          >
            <svg data-testid="geist-icon" height="16" strokeLinejoin="round" style={{color:"white"}} viewBox="0 0 16 16" width="16">
              <path fillRule="evenodd" clipRule="evenodd" d="M1.60022 2H5.80022L8.78759 6.16842L12.4002 2H14.0002L9.5118 7.17895L14.4002 14H10.2002L7.21285 9.83158L3.60022 14H2.00022L6.48864 8.82105L1.60022 2ZM10.8166 12.8L3.93657 3.2H5.18387L12.0639 12.8H10.8166Z" fill="currentColor"></path>
            </svg>
          </button>
        </a>
      </div>
    </>
  );
};

export default TerminalIcon; 