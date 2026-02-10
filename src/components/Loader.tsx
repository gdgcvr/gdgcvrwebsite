import React from "react";

const Loader = () => {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-sm animate-fade-out">
            <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center animate-breathe">
                {/* --- 1. Subtle Rising Particles (Antigravity Ambience) --- */}
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute bottom-10 left-10 w-1.5 h-1.5 rounded-full bg-gray-400 opacity-0 animate-particle"
                        style={{ animationDelay: "0s" }}
                    />
                    <div
                        className="absolute bottom-20 right-20 w-1 h-1 rounded-full bg-gray-400 opacity-0 animate-particle"
                        style={{ animationDelay: "1s" }}
                    />
                    <div
                        className="absolute bottom-5 left-1/2 w-2 h-2 rounded-full bg-gray-300 opacity-0 animate-particle"
                        style={{ animationDelay: "2s" }}
                    />
                </div>

                <div className="absolute inset-0 z-10">
                    <svg
                        width="100%"
                        height="100%"
                        viewBox="-40 -30 180 160"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="overflow-visible"
                    >
                        {/* --- LEFT BRACKET (<) --- */}

                        {/* Black Structure */}
                        <path
                            d="M35 38 L15 50 L35 62"
                            stroke="black"
                            strokeWidth="13"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="animate-draw-black"
                            pathLength="100"
                        />

                        {/* Red Segment (Top Left) */}
                        <path
                            d="M35 38 L15 50"
                            stroke="#EA4235"
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="animate-draw-color delay-color-1"
                            pathLength="100"
                        />

                        {/* Blue Segment (Bottom Left) */}
                        <path
                            d="M15 50 L35 62"
                            stroke="#4386F4"
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="animate-draw-color delay-color-2"
                            pathLength="100"
                        />

                        {/* --- RIGHT BRACKET (>) --- */}

                        {/* Black Structure */}
                        <path
                            d="M65 38 L85 50 L65 62"
                            stroke="black"
                            strokeWidth="13"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="animate-draw-black"
                            style={{ animationDelay: "0.4s" }}
                            pathLength="100"
                        />

                        {/* Yellow Segment (Bottom Right) */}
                        <path
                            d="M85 50 L65 62"
                            stroke="#F8BA04"
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="animate-draw-color delay-color-4"
                            pathLength="100"
                        />

                        {/* Green Segment (Top Right) */}
                        <path
                            d="M65 38 L85 50"
                            stroke="#119C58"
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="animate-draw-color delay-color-3"
                            pathLength="100"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Loader;
