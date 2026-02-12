import { Github, Instagram, Linkedin, ArrowRight } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-secondary/30 border-t border-black/5 relative overflow-hidden">
            <div className="w-full max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
                    {/* Left CTA Area */}
                    <div className="md:col-span-7 lg:col-span-8 flex flex-col items-start justify-between">
                        <div className="max-w-2xl z-10">
                            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1] text-foreground">
                                Shape the future of tech with{" "}
                                <span className="text-google-blue">GDG Campus</span>.
                            </h3>
                            <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
                                Access exclusive workshops, hackathons, and a global network of
                                student developers ready to build tomorrow.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-all group">
                                    Join the Chapter
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Links Area */}
                    <div className="md:col-span-5 lg:col-span-4 flex flex-col justify-end">
                        <p className="font-medium text-sm text-foreground/60 mb-6 tracking-wide">
                            Connect with us
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/gdsc-cvr/" },
                                { icon: Github, label: "GitHub", href: "https://www.github.com/gdgcvr/" },
                                { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/gdgccvr/" },
                                { icon: () => <img src="https://img.icons8.com/?size=100&id=fJp7hepMryiw&format=png&color=000000" className="h-5 w-5 opacity-80 group-hover:opacity-100 transition-opacity" alt="X" />, label: "X", href: "https://x.com/gdsccvr" },
                            ].map(({ icon: Icon, label, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-3 group p-4 rounded-2xl bg-white border border-black/5 hover:border-black/10 hover:shadow-sm transition-all duration-300"
                                >
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary/50 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                                        <Icon size={18} className="text-foreground/80 group-hover:text-foreground transition-colors" />
                                    </div>
                                    <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                                        {label}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Info Bar */}
                <div className="mt-20 pt-8 border-t border-black/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white rounded-xl border border-black/5 flex items-center justify-center shadow-sm">
                            <img src="src/assets/logo.png" className="w-6 h-6 object-contain" alt="GDG Logo" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold text-sm tracking-tight text-foreground">
                                GDG Campus CVR
                            </span>
                            <span className="text-xs text-muted-foreground">
                                © {currentYear} All rights reserved.
                            </span>
                        </div>
                    </div>

                    <div className="flex gap-8 text-sm text-muted-foreground font-medium">
                        <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-foreground transition-colors">Code of Conduct</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
