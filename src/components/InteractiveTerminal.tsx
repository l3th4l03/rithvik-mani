"use client";

import { useState, useRef, useEffect } from 'react';

const InteractiveTerminal = ({ onClose, onNavigate, activeCard }: { onClose: () => void, onNavigate: (section: string) => void, activeCard: string | null }) => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const terminalRef = useRef<HTMLDivElement>(null);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<{ command: string; output: React.ReactNode }[]>([]);
  const terminalInputRef = useRef<HTMLDivElement>(null);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (terminalRef.current && terminalRef.current.contains(e.target as Node)) {
      // Prevent drag from starting on input/buttons inside the terminal
      if ((e.target as HTMLElement).closest('.no-drag')) {
        return;
      }
      setIsDragging(true);
      dragStartPos.current = {
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      };
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStartPos.current.x,
        y: e.clientY - dragStartPos.current.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => handleMouseMove(e);
    const onMouseUp = () => handleMouseUp();

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [isDragging]);
  
  useEffect(() => {
    terminalInputRef.current?.focus();
  }, []);
  
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history, input]);
  
  const processCommand = (command: string) => {
    let output: React.ReactNode;
    const [cmd, ...args] = command.trim().split(' ');
    const arg = args.join(' ');

    switch (cmd.toLowerCase()) {
      case 'help':
        output = (
          <div className="text-white">
            <p>Available commands:</p>
            <ul className="list-disc list-inside pl-2">
              <li>help - Shows this list of commands</li>
              <li>info - Displays information about the protein</li>
              <li>cd [section] - Navigates to a section of portfolio (Experience, Projects, Interests, About Me, Resume)</li>
              <li>cd [social] - Opens my social media profile (X, Twitter, LinkedIn, GitHub, Email)</li>
              <li>pwd - Shows the current open info card</li>
              <li>sudo reboot - Reloads the page</li>
            </ul>
          </div>
        );
        break;
      case 'info':
        output = (
            <div className="text-white">
                <p>The protein displayed is CRISPR-Cas9, a revolutionary gene-editing tool. It consists of the Cas9 enzyme, which acts like a pair of molecular scissors, and a guide RNA that directs the enzyme to a specific DNA sequence. By precisely cutting DNA, CRISPR-Cas9 allows scientists to add, remove, or alter genetic material, opening up vast possibilities for treating genetic disorders, advancing medical research, and improving agriculture. The structure shown (PDB ID: 5F9R) captures the Cas9 protein from Staphylococcus aureus bound to a guide RNA and its target DNA.</p>
            </div>
        )
        break;
      case 'cd':
        const validSections = ['experience', 'projects', 'interests', 'about me'];
        const socialLinks: { [key: string]: string } = {
          'x': 'https://x.com/rsm3k',
          'twitter': 'https://x.com/rsm3k',
          'linkedin': 'https://www.linkedin.com/in/rithvik-mani-6089b8261/',
          'github': 'https://github.com/l3th4l03',
          'email': 'mailto:rithvikmani3@gmail.com'
        };

        const lowerArg = arg.toLowerCase();

        if (validSections.includes(lowerArg)) {
          onNavigate(arg);
          output = <div className="text-white">{`Navigating to ${arg}...`}</div>;
        } else if (lowerArg === 'resume') {
          window.open('/Rithvik_Mani_Resume.pdf', '_blank');
          output = <div className="text-white">Opening resume...</div>;
        } else if (socialLinks[lowerArg]) {
          window.open(socialLinks[lowerArg], '_blank');
          output = <div className="text-white">{`Opening ${arg}...`}</div>;
        } else {
          output = <div className="text-red-500">{`Invalid section or social: ${arg}. Type 'help' for more info.`}</div>;
        }
        break;
      case 'pwd':
        if (activeCard) {
          output = <div className="text-white">{`Current section: ${activeCard}`}</div>;
        } else {
          output = <div className="text-white">No info card is currently open.</div>;
        }
        break;
      case 'sudo':
        if (arg.toLowerCase() === 'reboot') {
            output = <div className="text-white">Rebooting...</div>;
            setTimeout(() => window.location.reload(), 1000);
        } else {
            output = <div className="text-red-500">{`sudo: command not found: ${arg}`}</div>
        }
        break;
      case '':
        output = '';
        break;
      default:
        output = <div className="text-red-500">{`Command not found: ${command}. Type 'help' for a list of commands.`}</div>
        break;
    }
    setHistory(prev => [...prev, { command, output }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      processCommand(input);
      setInput('');
    } else if (e.key === 'Backspace') {
      setInput(prev => prev.slice(0, -1));
    } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
      setInput(prev => prev + e.key);
    }
  };

  return (
    <div
      ref={terminalRef}
      className="absolute w-full max-w-lg h-96 bg-[#0000CD] rounded-lg shadow-2xl overflow-hidden border border-gray-700 font-geist-mono flex flex-col"
      style={{ top: position.y, left: position.x, cursor: isDragging ? 'grabbing' : 'grab' }}
      onMouseDown={handleMouseDown}
    >
      <div className="bg-gray-800 h-8 flex-shrink-0 flex items-center justify-between px-3">
        <div className="flex items-center space-x-2">
            <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-500 no-drag"></button>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-sm text-gray-400">visitor: ~</span>
        <div className="w-16"></div>
      </div>
      <div 
        ref={terminalBodyRef}
        className="p-4 text-green-400 text-sm flex-grow overflow-y-auto no-scrollbar pb-4"
        onClick={() => terminalInputRef.current?.focus()}
      >
        <p className="text-white">Welcome! Type 'help' for a list of commands.</p>
        <br/>
        {history.map((entry, index) => (
          <div key={index} className="break-all">
            <div className="flex items-center">
              <span className="text-blue-400 select-none">visitor:~$</span>
              <span className="pl-2 text-white">{entry.command}</span>
            </div>
            {entry.output && <div>{entry.output}</div>}
          </div>
        ))}
        <div 
          ref={terminalInputRef}
          className="flex items-center focus:outline-none"
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          <span className="text-blue-400 select-none">visitor:~$</span>
          <span className="pl-2 text-white break-all">{input}</span>
          <span className="bg-green-400 w-2 h-4 animate-pulse ml-1 select-none"></span>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTerminal; 