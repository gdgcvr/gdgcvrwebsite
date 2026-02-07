
import React from 'react';

const Loader = () => {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-sm animate-fade-out">
            <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center animate-breathe">

                {/* --- 1. Subtle Rising Particles (Antigravity Ambience) --- */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute bottom-10 left-10 w-1.5 h-1.5 rounded-full bg-gray-400 opacity-0 animate-particle" style={{ animationDelay: '0s' }} />
                    <div className="absolute bottom-20 right-20 w-1 h-1 rounded-full bg-gray-400 opacity-0 animate-particle" style={{ animationDelay: '1s' }} />
                    <div className="absolute bottom-5 left-1/2 w-2 h-2 rounded-full bg-gray-300 opacity-0 animate-particle" style={{ animationDelay: '2s' }} />
                </div>

                <div className="absolute inset-0 z-10">
                    <svg
                        width="100%"
                        height="100%"
                        viewBox="-30 -30 160 160"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="overflow-visible"
                    >
                        {/* 
                            Concept: The Architect's Draft
                            Black lines draw first (structure).
                            Colors flow in second (life).
                         */}

                        {/* --- LEFT BRACKET (<) --- */}

                        {/* Black Structure */}
                        <path
                            d="M40 30 L20 50 L40 70"
                            stroke="black" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round"
                            className="animate-draw-black"
                            pathLength="100"
                        />

                        {/* Red Segment (Top) */}
                        <path
                            d="M40 30 L20 50"
                            stroke="#EA4335" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"
                            className="animate-draw-color delay-color-1"
                            pathLength="100"
                        />

                        {/* Blue Segment (Bottom) */}
                        <path
                            d="M20 50 L40 70"
                            stroke="#4285F4" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"
                            className="animate-draw-color delay-color-2"
                            pathLength="100"
                        />


                        {/* --- RIGHT BRACKET (>) --- */}

                        {/* Black Structure */}
                        <path
                            d="M60 30 L80 50 L60 70"
                            stroke="black" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round"
                            className="animate-draw-black"
                            style={{ animationDelay: '0.4s' }} /* Right side draws slightly after */
                            pathLength="100"
                        />

                        {/* Green Segment (Top) */}
                        <path
                            d="M60 30 L80 50"
                            stroke="#34A853" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"
                            className="animate-draw-color delay-color-3"
                            pathLength="100"
                        />

                        {/* Yellow Segment (Bottom) */}
                        <path
                            d="M80 50 L60 70"
                            stroke="#FBBC05" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"
                            className="animate-draw-color delay-color-4"
                            pathLength="100"
                        />

                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Loader;
