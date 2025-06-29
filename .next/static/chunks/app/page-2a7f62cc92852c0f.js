(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[974],{

/***/ 250:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8585));


/***/ }),

/***/ 8585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5155);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2115);
;// ./src/components/Terminal.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

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
    ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
];
const finalMessage = "Best viewed on a computer. Use the terminal button in the top left for extras and to skip around. :)";
const Terminal = ()=>{
    const [lines, setLines] = (0,react.useState)([]);
    const [showPrompt, setShowPrompt] = (0,react.useState)(false);
    const [showFinalMessage, setShowFinalMessage] = (0,react.useState)(false);
    (0,react.useEffect)(()=>{
        const interval = setInterval(()=>{
            setLines((prev)=>{
                if (prev.length < bootSequenceLines.length) {
                    return [
                        ...prev,
                        bootSequenceLines[prev.length]
                    ];
                }
                setShowPrompt(true);
                clearInterval(interval);
                setTimeout(()=>setShowFinalMessage(true), 500);
                return prev;
            });
        }, 200);
        return ()=>clearInterval(interval);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "w-full h-screen bg-black flex items-center justify-center font-geist-mono p-4",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "w-full max-w-4xl h-auto bg-[#0000CD] rounded-lg shadow-2xl overflow-hidden border border-gray-700",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "bg-gray-800 h-8 flex items-center justify-between px-3",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center space-x-2",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "w-3 h-3 rounded-full bg-red-500"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "w-3 h-3 rounded-full bg-yellow-500"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "w-3 h-3 rounded-full bg-green-500"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: "text-sm text-gray-400",
                            children: "rithvikmani@Rithviks-Macbook-Pro: ~"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "w-16"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "p-4 text-green-400 text-sm",
                    children: [
                        lines.map((line, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                children: line
                            }, index)),
                        showPrompt && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            children: "rithvikmani@Rithviks-Macbook-Pro:~$"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "pl-2",
                                            children: "python3 rithvik_mani_website.py"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "bg-green-400 w-2 h-4 animate-pulse ml-2"
                                        })
                                    ]
                                }),
                                showFinalMessage && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "mt-2",
                                    children: finalMessage
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_Terminal = (Terminal);

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(2596);
// EXTERNAL MODULE: ./node_modules/tailwind-merge/dist/bundle-mjs.mjs
var bundle_mjs = __webpack_require__(9688);
;// ./src/lib/utils.ts


function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0,bundle_mjs/* twMerge */.QP)((0,clsx/* clsx */.$)(inputs));
}

;// ./src/components/ui/card.tsx



const Card = /*#__PURE__*/ react.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        ref: ref,
        className: cn("rounded-xl border bg-card text-card-foreground shadow", className),
        ...props
    });
});
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ react.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        ref: ref,
        className: cn("flex flex-col space-y-1.5 p-6", className),
        ...props
    });
});
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ react.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        ref: ref,
        className: cn("font-semibold leading-none tracking-tight", className),
        ...props
    });
});
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ react.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        ref: ref,
        className: cn("text-sm text-muted-foreground", className),
        ...props
    });
});
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ react.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        ref: ref,
        className: cn("p-6 pt-0", className),
        ...props
    });
});
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ react.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        ref: ref,
        className: cn("flex items-center p-6 pt-0", className),
        ...props
    });
});
CardFooter.displayName = "CardFooter";


// EXTERNAL MODULE: ./node_modules/@radix-ui/react-accordion/dist/index.mjs + 19 modules
var dist = __webpack_require__(1484);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-down.js + 4 modules
var chevron_down = __webpack_require__(3359);
;// ./src/components/ui/accordion.tsx
/* __next_internal_client_entry_do_not_use__ Accordion,AccordionItem,AccordionTrigger,AccordionContent auto */ 




const Accordion = dist/* Root */.bL;
const AccordionItem = /*#__PURE__*/ react.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Item */.q7, {
        ref: ref,
        className: cn("border-b", className),
        ...props
    });
});
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = /*#__PURE__*/ react.forwardRef((param, ref)=>{
    let { className, children, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Header */.Y9, {
        className: "flex",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(dist/* Trigger */.l9, {
            ref: ref,
            className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
            ...props,
            children: [
                children,
                /*#__PURE__*/ (0,jsx_runtime.jsx)(chevron_down/* default */.A, {
                    className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"
                })
            ]
        })
    });
});
AccordionTrigger.displayName = dist/* Trigger */.l9.displayName;
const AccordionContent = /*#__PURE__*/ react.forwardRef((param, ref)=>{
    let { className, children, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Content */.UC, {
        ref: ref,
        className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: cn("pb-4 pt-0", className),
            children: children
        })
    });
});
AccordionContent.displayName = dist/* Content */.UC.displayName;


;// ./src/components/InfoCard.tsx
/* __next_internal_client_entry_do_not_use__ InfoCard auto */ 



const experienceData = [
    {
        company: "Arcel AI",
        role: "Co-Founder & CEO",
        date: "Jan 2025 to Present",
        description: "Building the future of spreadsheets @ arcel.ai."
    },
    {
        company: "USDA & NIFA REEU",
        role: "Undergraduate Researcher",
        date: "Starting May 2025",
        description: "Researched 3D Reconstruction, SLAM, and Multi-View Stereo pipelines in computer vision to build autonomous bamboo harvesting vehicles powered by AI."
    },
    {
        company: "US Army Corps of Engineers, DoD",
        role: "Synthetic & Computational Biology Research Intern",
        date: "Aug 2024 to Dec 2024",
        description: "Researched the germination pathway of Bacillus Subtilis spores for DoD applications."
    },
    {
        company: "Nuronz LLC, B&SC AZ",
        role: "EEG Monitoring Intern",
        date: "May 2024 to Aug 2024",
        description: "Monitored, recorded, and analyzed brain activity patterns for patients at the Brain & Spine Center of Arizona."
    },
    {
        company: "Equilocalm",
        role: "R&D Intern",
        date: "May 2024 to Aug 2024",
        description: "Contributed to the R&D of Menopatch,a personalized trans-dermal skin patch to treat menopausal symptoms."
    },
    {
        company: "Syneos Health",
        role: "Consulting Intern",
        date: "June 2023 - Aug 2023",
        description: "Collaborated with pharma clients in performing market access viability & compliance determination for lead drugs."
    },
    {
        company: "Founders - Illinois Entrepreneurs",
        role: "Head of Events",
        date: "Jan 2023 to Dec 2024",
        description: "Student led 501(c)(3) organization focused on promoting and fostering entrepreneurship throughout the Midwest. Organized Forge, the largest student-run startup competition in the Midwest."
    }
];
const projectsData = [
    {
        name: "Personal Website",
        description: "This website, built with Next.js and 3Dmol.js."
    },
    {
        name: "Stethopy",
        description: "Helped develop mobile application and medical device kit for telehealth doctors for stethoscope use over the phone."
    },
    {
        name: "EPR Research Project",
        description: "Research Paper titled: The Effect of Different Solutes on the Efficacy of Emergency Preservation Resuscitation (EPR) to Improve Efficacy, Affordability, and Feasibility of the Process. \n Researched and collected histological data on E. Coli, testing 3 different solutes for efficacy, safety, and cost in EPR."
    }
];
const InfoCard = (param)=>{
    let { poi, onClose, cardPosition } = param;
    const cardRef = (0,react.useRef)(null);
    const [adjustedPosition, setAdjustedPosition] = (0,react.useState)(cardPosition);
    const [isMobile, setIsMobile] = (0,react.useState)(false);
    (0,react.useEffect)(()=>{
        const checkMobile = ()=>{
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return ()=>window.removeEventListener('resize', checkMobile);
    }, []);
    (0,react.useEffect)(()=>{
        if (isMobile) {
            setAdjustedPosition({
                x: window.innerWidth / 2,
                y: window.innerHeight / 2
            });
            return;
        }
        if (cardRef.current) {
            const cardRect = cardRef.current.getBoundingClientRect();
            let newX = cardPosition.x;
            let newY = cardPosition.y;
            const padding = 20;
            if (newX - cardRect.width / 2 < padding) newX = cardRect.width / 2 + padding;
            if (newX + cardRect.width / 2 > window.innerWidth - padding) newX = window.innerWidth - cardRect.width / 2 - padding;
            if (newY - cardRect.height / 2 < padding) newY = cardRect.height / 2 + padding;
            if (newY + cardRect.height / 2 > window.innerHeight - padding) newY = window.innerHeight - cardRect.height / 2 - padding;
            setAdjustedPosition({
                x: newX,
                y: newY
            });
        }
    }, [
        cardPosition,
        isMobile
    ]);
    if (!poi) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        ref: cardRef,
        className: "absolute",
        style: {
            left: "".concat(adjustedPosition.x, "px"),
            top: "".concat(adjustedPosition.y, "px"),
            transform: "translate(-50%, -50%)",
            zIndex: 50
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card, {
            className: "w-[90vw] md:w-[450px] ".concat(poi.id === 'experience' || poi.id === 'projects' ? 'h-[80vh] md:h-[60vh]' : 'h-auto', " bg-white/80 backdrop-blur-sm border-gray-200 shadow-xl flex flex-col"),
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardHeader, {
                    className: "flex flex-row items-center justify-between flex-shrink-0",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(CardTitle, {
                            className: "text-lg font-bold text-gray-800",
                            children: poi.title
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                            onClick: onClose,
                            className: "text-gray-500 hover:text-gray-800 transition-colors",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-6 w-6",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M6 18L18 6M6 6l12 12"
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(CardContent, {
                    className: "".concat(poi.id === 'experience' || poi.id === 'projects' ? 'flex-grow overflow-y-auto' : '', " no-scrollbar"),
                    children: poi.id === 'experience' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Accordion, {
                        type: "single",
                        collapsible: true,
                        className: "w-full",
                        children: experienceData.map((exp, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(AccordionItem, {
                                value: "item-".concat(index),
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionTrigger, {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex flex-col sm:flex-row sm:justify-between w-full pr-4 text-left",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex flex-col",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: "font-semibold text-gray-900",
                                                            children: exp.company
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: "text-sm text-gray-600",
                                                            children: exp.role
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    className: "text-sm text-gray-500 mt-1 sm:mt-0 sm:text-right",
                                                    children: exp.date
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionContent, {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "pt-2 pb-1",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                className: "text-gray-700 leading-relaxed",
                                                children: exp.description
                                            })
                                        })
                                    })
                                ]
                            }, index))
                    }) : poi.id === 'projects' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Accordion, {
                        type: "single",
                        collapsible: true,
                        className: "w-full",
                        children: projectsData.map((project, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(AccordionItem, {
                                value: "item-".concat(index),
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionTrigger, {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            children: project.name
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionContent, {
                                        children: project.description
                                    })
                                ]
                            }, index))
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        className: "text-gray-700",
                        children: poi.content
                    })
                })
            ]
        })
    });
};

;// ./src/components/TerminalIcon.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 
const TerminalIcon = (param)=>{
    let { onClick } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "absolute top-4 left-4 flex items-center space-x-2 z-50",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                        onClick: onClick,
                        className: "w-10 h-10 bg-black/80 backdrop-blur-sm border border-gray-300 rounded-md shadow-lg flex items-center justify-center transition-transform transform hover:scale-110",
                        "aria-label": "Open Terminal",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                            className: "w-6 h-6",
                            "data-testid": "geist-icon",
                            height: "16",
                            strokeLinejoin: "round",
                            style: {
                                color: "white"
                            },
                            viewBox: "0 0 16 16",
                            width: "16",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M1.5 2.5H14.5V12.5C14.5 13.0523 14.0523 13.5 13.5 13.5H2.5C1.94772 13.5 1.5 13.0523 1.5 12.5V2.5ZM0 1H1.5H14.5H16V2.5V12.5C16 13.8807 14.8807 15 13.5 15H2.5C1.11929 15 0 13.8807 0 12.5V2.5V1ZM4 11.1339L4.44194 10.6919L6.51516 8.61872C6.85687 8.27701 6.85687 7.72299 6.51517 7.38128L4.44194 5.30806L4 4.86612L3.11612 5.75L3.55806 6.19194L5.36612 8L3.55806 9.80806L3.11612 10.25L4 11.1339ZM8 9.75494H8.6225H11.75H12.3725V10.9999H11.75H8.6225H8V9.75494Z",
                                fill: "currentColor"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                        onClick: ()=>window.open('/Rithvik_Mani_Resume.pdf', '_blank'),
                        className: "w-10 h-10 bg-black/80 backdrop-blur-sm border border-gray-300 rounded-md shadow-lg flex items-center justify-center transition-transform transform hover:scale-110",
                        "aria-label": "Open Document",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                            "data-testid": "geist-icon",
                            height: "16",
                            strokeLinejoin: "round",
                            style: {
                                color: "white"
                            },
                            viewBox: "0 0 16 16",
                            width: "16",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M14.5 6.5V13.5C14.5 14.8807 13.3807 16 12 16H4C2.61929 16 1.5 14.8807 1.5 13.5V1.5V0H3H8H9.08579C9.351 0 9.60536 0.105357 9.79289 0.292893L14.2071 4.70711C14.3946 4.89464 14.5 5.149 14.5 5.41421V6.5ZM13 6.5V13.5C13 14.0523 12.5523 14.5 12 14.5H4C3.44772 14.5 3 14.0523 3 13.5V1.5H8V5V6.5H9.5H13ZM9.5 2.12132V5H12.3787L9.5 2.12132Z",
                                fill: "currentColor"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "absolute top-4 right-4 flex items-center space-x-2 z-50",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                        href: "mailto:rithvikmani3@gmail.com",
                        "aria-label": "Email",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                            className: "w-10 h-10 bg-black/80 backdrop-blur-sm border border-gray-300 rounded-md shadow-lg flex items-center justify-center transition-transform transform hover:scale-110",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                "data-testid": "geist-icon",
                                height: "16",
                                strokeLinejoin: "round",
                                viewBox: "0 0 16 16",
                                width: "16",
                                style: {
                                    color: "white"
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M8 0C3.57757 0 0 3.61682 0 8.03093C0 12.411 3.54999 16 7.9384 16C9.42621 16 10.8841 15.5819 12.1457 14.7934L12.3975 14.636L11.6025 13.364L11.3507 13.5214C10.3275 14.1609 9.14508 14.5 7.9384 14.5C4.38672 14.5 1.5 11.5909 1.5 8.03093C1.5 4.43692 4.4143 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8V8.60714C14.5 9.3764 13.8764 10 13.1071 10C12.2195 10 11.5 9.28046 11.5 8.39286V8V4.5H10V5.12734C9.43308 4.73191 8.74362 4.5 8 4.5C6.067 4.5 4.5 6.067 4.5 8C4.5 9.933 6.067 11.5 8 11.5C9.05713 11.5 10.0048 11.0313 10.6466 10.2904C11.2148 11.0262 12.1056 11.5 13.1071 11.5C14.7048 11.5 16 10.2048 16 8.60714V8C16 3.58172 12.4183 0 8 0ZM10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10C9.10457 10 10 9.10457 10 8Z",
                                    fill: "currentColor"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                        href: "https://github.com/l3th4l03",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "aria-label": "GitHub",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                            className: "w-10 h-10 bg-black/80 backdrop-blur-sm border border-gray-300 rounded-md shadow-lg flex items-center justify-center transition-transform transform hover:scale-110",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                "data-testid": "geist-icon",
                                height: "16",
                                strokeLinejoin: "round",
                                viewBox: "0 0 16 16",
                                width: "16",
                                style: {
                                    color: "white"
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
                                        clipPath: "url(#clip0_872_3147)",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M8 0C3.58 0 0 3.57879 0 7.99729C0 11.5361 2.29 14.5251 5.47 15.5847C5.87 15.6547 6.02 15.4148 6.02 15.2049C6.02 15.0149 6.01 14.3851 6.01 13.7154C4 14.0852 3.48 13.2255 3.32 12.7757C3.23 12.5458 2.84 11.836 2.5 11.6461C2.22 11.4961 1.82 11.1262 2.49 11.1162C3.12 11.1062 3.57 11.696 3.72 11.936C4.44 13.1455 5.59 12.8057 6.05 12.5957C6.12 12.0759 6.33 11.726 6.56 11.5261C4.78 11.3262 2.92 10.6364 2.92 7.57743C2.92 6.70773 3.23 5.98797 3.74 5.42816C3.66 5.22823 3.38 4.40851 3.82 3.30888C3.82 3.30888 4.49 3.09895 6.02 4.1286C6.66 3.94866 7.34 3.85869 8.02 3.85869C8.7 3.85869 9.38 3.94866 10.02 4.1286C11.55 3.08895 12.22 3.30888 12.22 3.30888C12.66 4.40851 12.38 5.22823 12.3 5.42816C12.81 5.98797 13.12 6.69773 13.12 7.57743C13.12 10.6464 11.25 11.3262 9.47 11.5261C9.76 11.776 10.01 12.2558 10.01 13.0056C10.01 14.0752 10 14.9349 10 15.2049C10 15.4148 10.15 15.6647 10.55 15.5847C12.1381 15.0488 13.5182 14.0284 14.4958 12.6673C15.4735 11.3062 15.9996 9.67293 16 7.99729C16 3.57879 12.42 0 8 0Z",
                                            fill: "currentColor"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("defs", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("clipPath", {
                                            id: "clip0_872_3147",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                                                width: "16",
                                                height: "16",
                                                fill: "white"
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                        href: "https://www.linkedin.com/in/rithvik-mani-6089b8261/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "aria-label": "LinkedIn",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                            className: "w-10 h-10 bg-black/80 backdrop-blur-sm border border-gray-300 rounded-md shadow-lg flex items-center justify-center transition-transform transform hover:scale-110",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                "data-testid": "geist-icon",
                                height: "16",
                                strokeLinejoin: "round",
                                viewBox: "0 0 16 16",
                                width: "16",
                                style: {
                                    color: "white"
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                    id: "Subtract",
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M2 0C0.895431 0 0 0.895431 0 2V14C0 15.1046 0.895431 16 2 16H14C15.1046 16 16 15.1046 16 14V2C16 0.895431 15.1046 0 14 0H2ZM5 6.75V13H3V6.75H5ZM5 4.50008C5 5.05554 4.61409 5.5 3.99408 5.5H3.98249C3.38582 5.5 3 5.05554 3 4.50008C3 3.93213 3.39765 3.5 4.00584 3.5C4.61409 3.5 4.98845 3.93213 5 4.50008ZM8.5 13H6.5C6.5 13 6.53178 7.43224 6.50007 6.75H8.5V7.78371C8.5 7.78371 9 6.75 10.5 6.75C12 6.75 13 7.59782 13 9.83107V13H11V10.1103C11 10.1103 11 8.46616 9.7361 8.46616C8.4722 8.46616 8.5 9.93972 8.5 9.93972V13Z",
                                    fill: "currentColor"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                        href: "https://x.com/rsm3k",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "aria-label": "X",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                            className: "w-10 h-10 bg-black/80 backdrop-blur-sm border border-gray-300 rounded-md shadow-lg flex items-center justify-center transition-transform transform hover:scale-110",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                "data-testid": "geist-icon",
                                height: "16",
                                strokeLinejoin: "round",
                                style: {
                                    color: "white"
                                },
                                viewBox: "0 0 16 16",
                                width: "16",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M1.60022 2H5.80022L8.78759 6.16842L12.4002 2H14.0002L9.5118 7.17895L14.4002 14H10.2002L7.21285 9.83158L3.60022 14H2.00022L6.48864 8.82105L1.60022 2ZM10.8166 12.8L3.93657 3.2H5.18387L12.0639 12.8H10.8166Z",
                                    fill: "currentColor"
                                })
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_TerminalIcon = (TerminalIcon);

;// ./src/components/ProteinViewer.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



const pointsOfInterest = [
    {
        id: 'experience',
        title: 'Experience',
        content: 'Here is a summary of my professional experience...',
        position: {
            x: -40,
            y: 30,
            z: 30
        },
        color: 'red'
    },
    {
        id: 'projects',
        title: 'Projects',
        content: 'Here are some of the projects I have worked on...',
        position: {
            x: 40,
            y: 30,
            z: -30
        },
        color: 'green'
    },
    {
        id: 'interests',
        title: 'Interests',
        content: 'I like building computers, video games, tennis, music, fashion, watching penguinz0, and Travis Scott',
        position: {
            x: -40,
            y: -30,
            z: -30
        },
        color: 'purple'
    },
    {
        id: 'about-me',
        title: 'About Me',
        content: 'Hi! I\'m Rithvik, a senior at UIUC majoring in Bioengineering and minoring in Computer Science. I\'m interested in entrepreneurship, biology, and computers. I\'m currently building Arcel AI (arcel.ai), researching AI & Robotics in agriculture at the USDA this summer.',
        position: {
            x: 40,
            y: -30,
            z: 30
        },
        color: 'blue'
    }
];
const ProteinViewer = (param)=>{
    let { onSectionSelect, activeSection, onShowTerminal, sectionToNavigate, onNavigateComplete, onActiveCardChange } = param;
    const containerRef = (0,react.useRef)(null);
    const viewerRef = (0,react.useRef)(null);
    const [isLoaded, setIsLoaded] = (0,react.useState)(false);
    const autoRotateRef = (0,react.useRef)(null);
    const isInteractingRef = (0,react.useRef)(false);
    const [selectedPoi, setSelectedPoi] = (0,react.useState)(null);
    const selectedPoiRef = (0,react.useRef)(null);
    const [cardPosition, setCardPosition] = (0,react.useState)({
        x: 0,
        y: 0
    });
    const [pois, setPois] = (0,react.useState)([]);
    (0,react.useEffect)(()=>{
        selectedPoiRef.current = selectedPoi;
    }, [
        selectedPoi
    ]);
    (0,react.useEffect)(()=>{
        if (sectionToNavigate && viewerRef.current) {
            const poiToNavigate = pois.find((p)=>p.title.toLowerCase() === sectionToNavigate.toLowerCase());
            if (poiToNavigate) {
                handlePoiClick(poiToNavigate);
            }
            onNavigateComplete();
        }
    }, [
        sectionToNavigate,
        pois
    ]);
    (0,react.useEffect)(()=>{
        const script = document.createElement('script');
        script.src = 'https://3Dmol.org/build/3Dmol-min.js';
        script.async = true;
        script.onload = ()=>{
            initializeViewer();
        };
        document.head.appendChild(script);
        return ()=>{
            if (autoRotateRef.current) {
                clearInterval(autoRotateRef.current);
            }
            if (document.head.contains(script)) {
                document.head.removeChild(script);
            }
        };
    }, []);
    const startAutoRotation = ()=>{
        if (autoRotateRef.current) clearInterval(autoRotateRef.current);
        autoRotateRef.current = setInterval(()=>{
            if (viewerRef.current && !isInteractingRef.current) {
                // Very slow, gentle left rotation
                viewerRef.current.rotate(0.5, 'y');
                viewerRef.current.render();
            }
        }, 50); // 20 FPS for smooth rotation
    };
    const stopAutoRotation = ()=>{
        if (autoRotateRef.current) {
            clearInterval(autoRotateRef.current);
            autoRotateRef.current = null;
        }
    };
    const initializeViewer = async ()=>{
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
                let min = {
                    x: Infinity,
                    y: Infinity,
                    z: Infinity
                };
                let max = {
                    x: -Infinity,
                    y: -Infinity,
                    z: -Infinity
                };
                for (const atom of atoms){
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
                    z: (min.z + max.z) / 2
                };
                const size = {
                    x: max.x - min.x,
                    y: max.y - min.y,
                    z: max.z - min.z
                };
                const isMobile = window.innerWidth < 768;
                const xOffset = isMobile ? 0.45 : 0.6;
                const yOffset = isMobile ? 0.45 : 0.6;
                const yTopOffset = isMobile ? 0.25 : 0.3;
                const updatedPois = [
                    {
                        ...pointsOfInterest[0],
                        position: {
                            x: center.x - size.x * xOffset,
                            y: center.y + size.y * yTopOffset,
                            z: center.z
                        }
                    },
                    {
                        ...pointsOfInterest[1],
                        position: {
                            x: center.x + size.x * xOffset,
                            y: center.y,
                            z: center.z
                        }
                    },
                    {
                        ...pointsOfInterest[2],
                        position: {
                            x: center.x,
                            y: center.y - size.y * yOffset,
                            z: center.z
                        }
                    },
                    {
                        ...pointsOfInterest[3],
                        position: {
                            x: center.x,
                            y: center.y + size.y * yOffset,
                            z: center.z
                        }
                    }
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
                viewer.setStyle({
                    resn: [
                        'DA',
                        'DT',
                        'DG',
                        'DC',
                        'A',
                        'U',
                        'G',
                        'C'
                    ]
                }, {
                    stick: {
                        radius: 0.3,
                        colorscheme: 'nucleic'
                    }
                });
                // Add clickable spheres for points of interest
                updatedPois.forEach((poi)=>{
                    viewer.addSphere({
                        center: poi.position,
                        radius: 2.0,
                        color: poi.color,
                        clickable: true,
                        callback: ()=>handlePoiClick(poi)
                    });
                });
                // Set initial view, zoom to ~60%, and lock zoom
                viewer.zoomTo();
                viewer.zoom(isMobile ? 0.7 : 1.0);
                viewer.render();
                // Lock the zoom using the viewer's built-in controls.
                const currentDistance = viewer.getPerceivedDistance();
                if (currentDistance) {
                    viewer.setZoomLimits(currentDistance, currentDistance);
                }
                // Interaction tracking for auto-rotation
                const container = containerRef.current;
                const handleMouseDown = (e)=>{
                    // Only track rotation interactions (left mouse button)
                    if (e.button === 0) {
                        isInteractingRef.current = true;
                        stopAutoRotation();
                    }
                };
                const handleMouseUp = ()=>{
                    isInteractingRef.current = false;
                    // Restart auto-rotation after 2 seconds of no interaction
                    setTimeout(()=>{
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
                setTimeout(()=>{
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
    const handlePoiClick = (poi)=>{
        setSelectedPoi(poi);
        onActiveCardChange(poi.title);
        const screenPos = viewerRef.current.modelToScreen(poi.position);
        const targetX = screenPos.x < window.innerWidth / 2 ? window.innerWidth * 0.25 : window.innerWidth * 0.75;
        const targetY = screenPos.y;
        setCardPosition({
            x: targetX,
            y: targetY
        });
    };
    const handleCloseCard = ()=>{
        setSelectedPoi(null);
        onActiveCardChange(null);
        startAutoRotation();
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "w-full h-screen bg-black flex items-center justify-center relative",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(components_TerminalIcon, {
                onClick: onShowTerminal
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                ref: containerRef,
                className: "w-full h-full cursor-grab active:cursor-grabbing select-none",
                style: {
                    backgroundColor: 'black',
                    userSelect: 'none',
                    touchAction: 'pan-x pan-y',
                    WebkitUserSelect: 'none',
                    MozUserSelect: 'none',
                    msUserSelect: 'none'
                }
            }),
            !isLoaded && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "absolute inset-0 flex items-center justify-center",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "text-gray-500 font-mono",
                    children: "Loading CRISPR-Cas9 structure..."
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoCard, {
                poi: selectedPoi,
                onClose: handleCloseCard,
                cardPosition: cardPosition
            })
        ]
    });
};
/* harmony default export */ const components_ProteinViewer = (ProteinViewer);

;// ./src/components/InteractiveTerminal.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

const InteractiveTerminal = (param)=>{
    let { onClose, onNavigate, activeCard } = param;
    const [position, setPosition] = (0,react.useState)({
        x: 100,
        y: 100
    });
    const [isDragging, setIsDragging] = (0,react.useState)(false);
    const dragStartPos = (0,react.useRef)({
        x: 0,
        y: 0
    });
    const terminalRef = (0,react.useRef)(null);
    const [input, setInput] = (0,react.useState)('');
    const [history, setHistory] = (0,react.useState)([]);
    const terminalInputRef = (0,react.useRef)(null);
    const terminalBodyRef = (0,react.useRef)(null);
    const [isMobile, setIsMobile] = (0,react.useState)(false);
    (0,react.useEffect)(()=>{
        const checkIsMobile = ()=>{
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
        };
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        return ()=>window.removeEventListener('resize', checkIsMobile);
    }, []);
    (0,react.useEffect)(()=>{
        if (isMobile && terminalRef.current) {
            setPosition({
                x: (window.innerWidth - terminalRef.current.offsetWidth) / 2,
                y: (window.innerHeight - terminalRef.current.offsetHeight) / 2
            });
        } else if (!isMobile) {
            setPosition({
                x: 100,
                y: 100
            });
        }
    }, [
        isMobile
    ]);
    const handleMouseDown = (e)=>{
        if (isMobile) return;
        if (terminalRef.current && terminalRef.current.contains(e.target)) {
            // Prevent drag from starting on input/buttons inside the terminal
            if (e.target.closest('.no-drag')) {
                return;
            }
            setIsDragging(true);
            dragStartPos.current = {
                x: e.clientX - position.x,
                y: e.clientY - position.y
            };
        }
    };
    const handleMouseMove = (e)=>{
        if (isDragging && !isMobile) {
            setPosition({
                x: e.clientX - dragStartPos.current.x,
                y: e.clientY - dragStartPos.current.y
            });
        }
    };
    const handleMouseUp = ()=>{
        setIsDragging(false);
    };
    (0,react.useEffect)(()=>{
        const onMouseMove = (e)=>handleMouseMove(e);
        const onMouseUp = ()=>handleMouseUp();
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
        return ()=>{
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
        };
    }, [
        isDragging,
        isMobile
    ]);
    (0,react.useEffect)(()=>{
        var _terminalInputRef_current;
        (_terminalInputRef_current = terminalInputRef.current) === null || _terminalInputRef_current === void 0 ? void 0 : _terminalInputRef_current.focus();
    }, []);
    (0,react.useEffect)(()=>{
        if (terminalBodyRef.current) {
            terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
        }
    }, [
        history,
        input
    ]);
    const processCommand = (command)=>{
        let output;
        const [cmd, ...args] = command.trim().split(' ');
        const arg = args.join(' ');
        switch(cmd.toLowerCase()){
            case 'help':
                output = /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "text-white",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            children: "Available commands:"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                            className: "list-disc list-inside pl-2",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                    children: "help - Shows this list of commands"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                    children: "info - Displays information about the protein"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                    children: "cd [section] - Navigates to a section of portfolio (Experience, Projects, Interests, About Me, Resume)"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                    children: "cd [social] - Opens my social media profile (X, Twitter, LinkedIn, GitHub, Email)"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                    children: "pwd - Shows the current open info card"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                    children: "sudo reboot - Reloads the page"
                                })
                            ]
                        })
                    ]
                });
                break;
            case 'info':
                output = /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "text-white",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        children: "The protein displayed is CRISPR-Cas9, a revolutionary gene-editing tool. It consists of the Cas9 enzyme, which acts like a pair of molecular scissors, and a guide RNA that directs the enzyme to a specific DNA sequence. By precisely cutting DNA, CRISPR-Cas9 allows scientists to add, remove, or alter genetic material, opening up vast possibilities for treating genetic disorders, advancing medical research, and improving agriculture. The structure shown (PDB ID: 5F9R) captures the Cas9 protein from Staphylococcus aureus bound to a guide RNA and its target DNA."
                    })
                });
                break;
            case 'cd':
                const validSections = [
                    'experience',
                    'projects',
                    'interests',
                    'about me'
                ];
                const socialLinks = {
                    'x': 'https://x.com/rsm3k',
                    'twitter': 'https://x.com/rsm3k',
                    'linkedin': 'https://www.linkedin.com/in/rithvik-mani-6089b8261/',
                    'github': 'https://github.com/l3th4l03',
                    'email': 'mailto:rithvikmani3@gmail.com'
                };
                const lowerArg = arg.toLowerCase();
                if (validSections.includes(lowerArg)) {
                    onNavigate(arg);
                    output = /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "text-white",
                        children: "Navigating to ".concat(arg, "...")
                    });
                } else if (lowerArg === 'resume') {
                    window.open('/Rithvik_Mani_Resume.pdf', '_blank');
                    output = /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "text-white",
                        children: "Opening resume..."
                    });
                } else if (socialLinks[lowerArg]) {
                    window.open(socialLinks[lowerArg], '_blank');
                    output = /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "text-white",
                        children: "Opening ".concat(arg, "...")
                    });
                } else {
                    output = /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "text-red-500",
                        children: "Invalid section or social: ".concat(arg, ". Type 'help' for more info.")
                    });
                }
                break;
            case 'pwd':
                if (activeCard) {
                    output = /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "text-white",
                        children: "Current section: ".concat(activeCard)
                    });
                } else {
                    output = /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "text-white",
                        children: "No info card is currently open."
                    });
                }
                break;
            case 'sudo':
                if (arg.toLowerCase() === 'reboot') {
                    output = /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "text-white",
                        children: "Rebooting..."
                    });
                    setTimeout(()=>window.location.reload(), 1000);
                } else {
                    output = /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "text-red-500",
                        children: "sudo: command not found: ".concat(arg)
                    });
                }
                break;
            case '':
                output = '';
                break;
            default:
                output = /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "text-red-500",
                    children: "Command not found: ".concat(command, ". Type 'help' for a list of commands.")
                });
                break;
        }
        setHistory((prev)=>[
                ...prev,
                {
                    command,
                    output
                }
            ]);
    };
    const handleKeyDown = (e)=>{
        if (e.key === 'Enter') {
            processCommand(input);
            setInput('');
        } else if (e.key === 'Backspace') {
            setInput((prev)=>prev.slice(0, -1));
        } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
            setInput((prev)=>prev + e.key);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        ref: terminalRef,
        className: "absolute w-[95vw] max-w-lg h-96 bg-[#0000CD] rounded-lg shadow-2xl overflow-hidden border border-gray-700 font-geist-mono flex flex-col",
        style: {
            top: position.y,
            left: position.x,
            cursor: isDragging ? 'grabbing' : isMobile ? 'default' : 'grab'
        },
        onMouseDown: handleMouseDown,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "bg-gray-800 h-8 flex-shrink-0 flex items-center justify-between px-3",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center space-x-2",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                onClick: onClose,
                                className: "w-3 h-3 rounded-full bg-red-500 no-drag"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "w-3 h-3 rounded-full bg-yellow-500"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "w-3 h-3 rounded-full bg-green-500"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "text-sm text-gray-400",
                        children: "visitor: ~"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "w-16"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                ref: terminalBodyRef,
                className: "p-4 text-green-400 text-sm flex-grow overflow-y-auto no-scrollbar pb-4",
                onClick: ()=>{
                    var _terminalInputRef_current;
                    return (_terminalInputRef_current = terminalInputRef.current) === null || _terminalInputRef_current === void 0 ? void 0 : _terminalInputRef_current.focus();
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        className: "text-white",
                        children: "Welcome! Type 'help' for a list of commands."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                    history.map((entry, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "break-all",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "text-blue-400 select-none",
                                            children: "visitor:~$"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "pl-2 text-white",
                                            children: entry.command
                                        })
                                    ]
                                }),
                                entry.output && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    children: entry.output
                                })
                            ]
                        }, index)),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        ref: terminalInputRef,
                        className: "flex items-center focus:outline-none",
                        tabIndex: 0,
                        onKeyDown: handleKeyDown,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "text-blue-400 select-none",
                                children: "visitor:~$"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "pl-2 text-white break-all",
                                children: input
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "bg-green-400 w-2 h-4 animate-pulse ml-1 select-none"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_InteractiveTerminal = (InteractiveTerminal);

;// ./src/components/MolecularDashboard.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




const MolecularDashboard = ()=>{
    const [showProteinViewer, setShowProteinViewer] = (0,react.useState)(false);
    const [isInteractiveTermOpen, setInteractiveTermOpen] = (0,react.useState)(false);
    const [sectionToNavigate, setSectionToNavigate] = (0,react.useState)(null);
    const [activeCard, setActiveCard] = (0,react.useState)(null);
    (0,react.useEffect)(()=>{
        // Show protein viewer after 7 seconds
        if (!showProteinViewer) {
            const timer = setTimeout(()=>{
                setShowProteinViewer(true);
            }, 7000);
            return ()=>clearTimeout(timer);
        }
    }, [
        showProteinViewer
    ]);
    const toggleInteractiveTerminal = ()=>{
        setInteractiveTermOpen((prev)=>!prev);
    };
    const handleNavigate = (section)=>{
        setSectionToNavigate(section);
    };
    const onNavigateComplete = ()=>{
        setSectionToNavigate(null);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            !showProteinViewer ? /*#__PURE__*/ (0,jsx_runtime.jsx)(components_Terminal, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(components_ProteinViewer, {
                onSectionSelect: ()=>{},
                activeSection: "",
                onShowTerminal: toggleInteractiveTerminal,
                sectionToNavigate: sectionToNavigate,
                onNavigateComplete: onNavigateComplete,
                onActiveCardChange: setActiveCard
            }),
            isInteractiveTermOpen && /*#__PURE__*/ (0,jsx_runtime.jsx)(components_InteractiveTerminal, {
                onClose: toggleInteractiveTerminal,
                onNavigate: handleNavigate,
                activeCard: activeCard
            })
        ]
    });
};
/* harmony default export */ const components_MolecularDashboard = (MolecularDashboard);

;// ./src/app/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

function Home() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(components_MolecularDashboard, {});
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [594,441,684,358], () => (__webpack_exec__(250)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);