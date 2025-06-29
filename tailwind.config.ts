import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			'deep-space': '#0a0a0f',
  			'dark-matter': '#1a1a2e',
  			'cosmic-blue': '#16213e',
  			'molecular-cyan': '#0f3460',
  			'protein-blue': '#1e40af',
  			'helix-cyan': '#06b6d4',
  			'helix-teal': '#14b8a6',
  			'bond-gold': '#f59e0b',
  			'ligand-purple': '#7c3aed',
  			'domain-red': '#dc2626',
  			'domain-orange': '#ea580c',
  			'backbone-green': '#059669',
  			'glass-white': 'rgba(255, 255, 255, 0.1)',
  			'glass-blue': 'rgba(59, 130, 246, 0.1)',
  			'glow-cyan': '#22d3ee',
  			'glow-purple': '#a855f7',
  			'text-primary': '#f8fafc',
  			'text-secondary': '#cbd5e1',
  			'text-muted': '#64748b',
  			'hover-glow': 'rgba(34, 211, 238, 0.2)',
  			'active-pulse': 'rgba(168, 85, 247, 0.3)',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			mono: [
  				'Geist Mono"',
  				'Monaco',
  				'Consolas',
  				'monospace'
  			],
  			sans: [
  				'Inter"',
  				'system-ui',
  				'sans-serif'
  			],
  			display: [
  				'JetBrains Mono"',
  				'monospace'
  			]
  		},
  		animation: {
  			'spin-slow': 'spin 8s linear infinite',
  			'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
  			float: 'float 3s ease-in-out infinite',
  			'fade-in': 'fade-in 0.5s ease-out',
  			'slide-up': 'slide-up 0.6s ease-out',
  			'molecular-rotate': 'molecular-rotate 20s linear infinite',
  			'helix-twist': 'helix-twist 4s ease-in-out infinite',
  			'bond-vibrate': 'bond-vibrate 0.5s ease-in-out infinite',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		keyframes: {
  			'pulse-glow': {
  				'0%': {
  					boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)',
  					transform: 'scale(1)'
  				},
  				'100%': {
  					boxShadow: '0 0 40px rgba(34, 211, 238, 0.6)',
  					transform: 'scale(1.02)'
  				}
  			},
  			float: {
  				'0%, 100%': {
  					transform: 'translateY(0px)'
  				},
  				'50%': {
  					transform: 'translateY(-10px)'
  				}
  			},
  			'fade-in': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(20px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			'slide-up': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(50px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			'molecular-rotate': {
  				'0%': {
  					transform: 'rotateX(0deg) rotateY(0deg)'
  				},
  				'25%': {
  					transform: 'rotateX(15deg) rotateY(90deg)'
  				},
  				'50%': {
  					transform: 'rotateX(0deg) rotateY(180deg)'
  				},
  				'75%': {
  					transform: 'rotateX(-15deg) rotateY(270deg)'
  				},
  				'100%': {
  					transform: 'rotateX(0deg) rotateY(360deg)'
  				}
  			},
  			'helix-twist': {
  				'0%, 100%': {
  					transform: 'rotateZ(0deg)'
  				},
  				'50%': {
  					transform: 'rotateZ(180deg)'
  				}
  			},
  			'bond-vibrate': {
  				'0%, 100%': {
  					transform: 'scale(1)'
  				},
  				'50%': {
  					transform: 'scale(1.05)'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		backgroundImage: {
  			'cosmic-gradient': 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 25%, #16213e 50%, #0f3460 100%)',
  			'molecular-gradient': 'radial-gradient(circle at 50% 50%, rgba(34, 211, 238, 0.1) 0%, transparent 70%)',
  			'helix-gradient': 'linear-gradient(45deg, #06b6d4, #14b8a6, #059669)',
  			'domain-gradient': 'linear-gradient(135deg, #dc2626, #ea580c, #f59e0b)',
  			'ligand-gradient': 'linear-gradient(135deg, #7c3aed, #a855f7, #c084fc)',
  			'glass-panel': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)'
  		},
  		boxShadow: {
  			'glow-cyan': '0 0 30px rgba(34, 211, 238, 0.5)',
  			'glow-purple': '0 0 30px rgba(168, 85, 247, 0.5)',
  			'glow-soft': '0 0 20px rgba(255, 255, 255, 0.1)',
  			'molecular-shadow': '0 10px 40px rgba(0, 0, 0, 0.3)',
  			'glass-panel': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.1)',
  			'interactive-glow': '0 0 0 1px rgba(34, 211, 238, 0.3), 0 0 20px rgba(34, 211, 238, 0.2)'
  		},
  		backdropBlur: {
  			molecular: '12px'
  		},
  		spacing: {
  			'18': '4.5rem',
  			'88': '22rem',
  			'128': '32rem'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
    function({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        // Glass Morphism Components
        '.glass-panel': {
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        },
        
        // Molecular UI Components
        '.molecular-button': {
          background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.2) 0%, rgba(34, 211, 238, 0.1) 100%)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(34, 211, 238, 0.3)',
          transition: 'all 0.3s ease',
          '&:hover': {
            background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.3) 0%, rgba(34, 211, 238, 0.2) 100%)',
            boxShadow: '0 0 20px rgba(34, 211, 238, 0.4)',
            transform: 'translateY(-2px)',
          },
        },
        
        '.protein-section': {
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
          backdropFilter: 'blur(15px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.4s ease',
          '&:hover': {
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
            transform: 'translateY(-5px)',
          },
        },
        
        // Interactive Molecular Elements
        '.domain-interactive': {
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          '&:hover': {
            filter: 'brightness(1.2)',
            transform: 'scale(1.05)',
          },
        },
        
        '.helix-glow': {
          filter: 'drop-shadow(0 0 10px rgba(34, 211, 238, 0.6))',
          animation: 'pulse-glow 2s ease-in-out infinite alternate',
        },
        
        '.ligand-highlight': {
          filter: 'drop-shadow(0 0 8px rgba(168, 85, 247, 0.8))',
          animation: 'bond-vibrate 0.5s ease-in-out infinite',
        },
        
        // Text Styles
        '.molecular-text': {
          background: 'linear-gradient(135deg, #06b6d4, #14b8a6)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: '600',
        },
        
        '.scientific-mono': {
          fontFamily: '"Geist Mono", Monaco, Consolas, monospace',
          letterSpacing: '0.05em',
        },
        
        // Layout Components
        '.nav-glass': {
          background: 'rgba(10, 10, 15, 0.8)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        },
        
        '.content-container': {
          background: 'radial-gradient(circle at 50% 50%, rgba(34, 211, 238, 0.03) 0%, transparent 70%)',
        },
      }
      addUtilities(newUtilities)
    },
      require("tailwindcss-animate")
],
};

export default config; 