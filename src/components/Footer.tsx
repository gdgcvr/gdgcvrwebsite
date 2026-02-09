import { Link } from "react-router-dom";
import { Github, Instagram, Linkedin, Twitter, ArrowRight } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    // 3D Extrusion Effect
    const extrudedTextShadow = Array.from({ length: 16 }).map((_, i) =>
        `${i + 1}px ${i + 1}px 0 #E5E7EB`
    ).join(", ");

    return (
        <footer className="bg-background border-t-2 border-black mt-20 overflow-hidden relative">
            <div className="w-full">
                {/* Top Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-12 border-b-2 border-black">

                    {/* Left CTA Area - Stays Prominent */}
                    <div className="md:col-span-6 lg:col-span-8 p-8 md:p-14 border-r-2 border-black relative flex flex-col items-start justify-between min-h-[300px] bg-white">
                        {/* Crosshairs */}
                        <span className="absolute -top-2 -left-2 text-black text-2xl font-light">+</span>
                        <span className="absolute -top-2 -right-2 md:hidden text-black text-2xl font-light">+</span>

                        <div className="max-w-lg z-10">

                            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">
                                Shape the future of tech with <span className="text-google-blue">GDG Campus</span>.
                            </h3>
                            <p className="text-muted-foreground text-lg mb-8 max-w-md">
                                Access exclusive workshops, hackathons, and a global network of student developers.
                            </p>
                        </div>


                    </div>

                    {/* Right Links Area */}
                    <div className="md:col-span-6 lg:col-span-4 p-8 md:p-12 relative bg-white flex flex-col justify-center">
                        <span className="absolute -top-2 -left-2 text-black text-2xl font-light">+</span>

                        <p className="font-mono text-xs font-bold text-black mb-8 uppercase tracking-widest">/ SOCIAL</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                            {[
                                { icon: Twitter, label: "Twitter", href: "#" },
                                { icon: Instagram, label: "Instagram", href: "#" },
                                { icon: Linkedin, label: "LinkedIn", href: "#" },
                                { icon: Github, label: "GitHub", href: "#" }
                            ].map(({ icon: Icon, label, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    className="flex items-center gap-3 group"
                                >
                                    <div className="w-10 h-10 flex items-center justify-center border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-y-0.5 transition-all">
                                        <Icon size={18} className="text-black" />
                                    </div>
                                    <span className="text-sm font-bold uppercase tracking-wide group-hover:underline decoration-2 underline-offset-4">
                                        {label}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>



                {/* Bottom Info Bar */}
                <div className="grid grid-cols-1 md:grid-cols-2 p-6 md:p-8 gap-6 relative bg-secondary/20">
                    <span className="absolute -top-2 -left-2 text-black text-2xl font-light">+</span>
                    <span className="absolute -top-2 -right-2 md:hidden text-black text-2xl font-light">+</span>
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 hidden md:block text-black text-2xl font-light">+</span>

                    {/* Branding & Copyright */}
                    <div className="flex items-center gap-5">
                        <div className="w-10 h-10 bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] p-1.5">
                            <svg
                                width="100%"
                                height="100%"
                                viewBox="-30 -30 160 160"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M35 25 L10 50 L35 75" stroke="black" strokeWidth="28" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M35 25 L10 50" stroke="#EA4335" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10 50 L35 75" stroke="#4285F4" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />

                                <path d="M65 25 L90 50 L65 75" stroke="black" strokeWidth="28" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M65 25 L90 50" stroke="#34A853" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M90 50 L65 75" stroke="#FBBC05" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-sm uppercase tracking-widest text-black">© {currentYear} GDG CAMPUS</span>
                            <span className="font-mono text-[11px] text-muted-foreground">ALL RIGHTS RESERVED</span>
                        </div>
                    </div>


                </div>

            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Google Developer Groups – Campus Chapter
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
