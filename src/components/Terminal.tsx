"use client";

import { useState, useEffect } from "react";

const bootSequenceLines = [
  "[info] Booting v1.0 2025...",
  "[info] Kernel modules loaded.",
  "[r03] Initializing virtual devices...",
  "[r18]   Networking interface eth0 up.",
  "[okey]   Storage device /dev/sda1 mounted.",
  "[info] Starting services...",
  "[okey]   SSH daemon started.",
  "[okey]   Web server nginx started.",
  "[info] System ready.",
  "[info] Launching portfolio environment...",
  "",
  "Welcome to Rithvik's Personal Website",
  ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",
];

const finalMessage = "Best viewed on a computer. Use the terminal button in the top left for extras and to skip around. :)";

const Terminal = () => {
  const [lines, setLines] = useState<string[]>([]);
  const [showPrompt, setShowPrompt] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setLines((prev) => {
        if (prev.length < bootSequenceLines.length) {
          return [...prev, bootSequenceLines[prev.length]];
        }
        setShowPrompt(true);
        clearInterval(interval);
        setTimeout(() => setShowFinalMessage(true), 500);
        return prev;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center font-geist-mono p-4">
      <div className="w-full max-w-4xl h-auto bg-[#0000CD] rounded-lg shadow-2xl overflow-hidden border border-gray-700">
        <div className="bg-gray-800 h-8 flex items-center justify-between px-3">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-sm text-gray-400">rithvikmani@Rithviks-Macbook-Pro: ~</span>
          <div className="w-16"></div>
        </div>
        <div className="p-4 text-green-400 text-sm">
          {lines.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
          {showPrompt && (
            <div>
              <div className="flex items-center">
                <span>rithvikmani@Rithviks-Macbook-Pro:~$</span>
                <span className="pl-2">python3 rithvik_mani_website.py</span>
                <span className="bg-green-400 w-2 h-4 animate-pulse ml-2"></span>
              </div>
              {showFinalMessage && <div className="mt-2">{finalMessage}</div>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Terminal; 