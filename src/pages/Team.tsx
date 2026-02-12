import { Linkedin, Code2, Smartphone, Brain, Trophy, Cpu, Palette, Users, Camera, User } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import Layout from "@/components/Layout";
import {
  DoodleDots,
  DoodleCircle,
  DoodleSpark,
} from "@/components/DoodleAccents";
import { teamMembers } from "@/data/team";

const Team = () => {
  // Helper to categorize members
  // Helper to categorize members
  const getCategory = (role: string) => {
    const r = role.toLowerCase();
    if (r.includes("faculty") || r.includes("placement") || (r.includes("lead") && !r.includes("core"))) return "Leadership";
    if (r.includes("cp") || r.includes("competitive")) return "Competitive Programming";
    if (r.includes("web")) return "Web Development";
    if (r.includes("aiml") || r.includes("data")) return "AI/ML & Data Science";
    if (r.includes("android") || r.includes("app")) return "Android Development";
    if (r.includes("iot") || r.includes("embedded")) return "IoT & Embedded Systems";
    if (r.includes("logistics")) return "Logistics & Management";
    if (r.includes("design")) return "Graphic Design";
    if (r.includes("photo")) return "Photography";
    return "Core Team";
  };

  const categories = {
    "Leadership": { icon: User, color: "text-google-blue", description: "Guiding our vision and strategy." },
    "Competitive Programming": { icon: Trophy, color: "text-google-yellow", description: "Mastering algorithms and logic." },
    "Web Development": { icon: Code2, color: "text-google-blue", description: "Crafting the digital experiences." },
    "AI/ML & Data Science": { icon: Brain, color: "text-google-red", description: "Innovating with intelligence." },
    "Android Development": { icon: Smartphone, color: "text-google-green", description: "Building for the mobile world." },
    "IoT & Embedded Systems": { icon: Cpu, color: "text-google-blue", description: "Connecting the physical world." },
    "Logistics & Management": { icon: Users, color: "text-google-green", description: "Making things happen." },
    "Graphic Design": { icon: Palette, color: "text-google-red", description: "Visualizing our identity." },
    "Photography": { icon: Camera, color: "text-google-yellow", description: "Capturing moments." },
    // Core Team is fallback, can be added if needed, but user list didn't explicitly include it. I'll keep it as fallback in safe logic but maybe not in the main ordered list if not requested? 
    // Wait, the previous code had "Core Team". If I remove it from `categories`, it won't render even if `getCategory` returns it (because of `Object.keys(categories)` loop).
    // The user's list didn't have "Core Team". I will remove "Core Team" from the specific order list to be safe, or append it at the end? 
    // User said "Order teams in this way" and gave a list.
    // Use fallback? Use "Core Team" key if `getCategory` returns it? 
    // I'll keep "Core Team" at the very end as a catch-all, just in case data exists that doesn't fit, so it doesn't disappear.
    "Core Team": { icon: Users, color: "text-google-blue", description: "The heartbeat of our community." },
  };

  const groupedMembers: Record<string, typeof teamMembers> = {};

  // Initialize groups
  Object.keys(categories).forEach(cat => groupedMembers[cat] = []);

  // Sort members into groups
  teamMembers.forEach(member => {
    const cat = getCategory(member.role);
    if (groupedMembers[cat]) {
      groupedMembers[cat].push(member);
    } else {
      // Fallback or explicit 'Other' handling if needed
    }
  });

  return (
    <Layout>
      {/* Creative Topographic Flow Background - Sticky Implementation */}
      <div className="absolute inset-0 z-[-1] pointer-events-none">
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#fafafa]">
          {/* Abstract Flow Lines SVG */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.4]" preserveAspectRatio="none" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Neutral Structural Lines */}
            <path d="M-100 200 C 400 400, 800 0, 1540 200" stroke="#E5E5E5" strokeWidth="2" fill="none" />
            <path d="M-100 300 C 400 500, 800 100, 1540 300" stroke="#E5E5E5" strokeWidth="2" fill="none" />
            <path d="M-100 400 C 400 600, 800 200, 1540 400" stroke="#E5E5E5" strokeWidth="2" fill="none" />
            <path d="M-100 500 C 400 700, 800 300, 1540 500" stroke="#E5E5E5" strokeWidth="2" fill="none" />
            <path d="M-100 600 C 400 800, 800 400, 1540 600" stroke="#E5E5E5" strokeWidth="2" fill="none" />

            {/* Accent Creative Lines (Google Colors) */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 3, ease: "easeInOut" }}
              d="M-100 250 C 400 450, 800 50, 1540 250"
              stroke="#4285F4"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 3.5, ease: "easeInOut", delay: 0.5 }}
              d="M-100 350 C 400 550, 800 150, 1540 350"
              stroke="#DB4437"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 4, ease: "easeInOut", delay: 1 }}
              d="M-100 450 C 400 650, 800 250, 1540 450"
              stroke="#F4B400"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 4.5, ease: "easeInOut", delay: 1.5 }}
              d="M-100 550 C 400 750, 800 350, 1540 550"
              stroke="#0F9D58"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
          </svg>

          {/* Soft Grain Overlay to mesh it together */}
          <div className="absolute inset-0 opacity-[0.2]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>
        </div>
      </div>

      <DoodleDots className="absolute top-24 right-[8%] w-14 h-14 opacity-10 text-google-yellow" />
      <DoodleCircle className="absolute bottom-36 left-[5%] w-24 h-24 opacity-8 text-google-blue" />
      <DoodleSpark className="absolute top-1/2 right-[15%] w-10 h-10 opacity-8 text-google-red" />

      <section className="section-padding relative">
        <div className="container-wide">
          <AnimatedSection>
            <div className="text-center mb-24">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-google-red mb-6">
                Our Team
              </p>
              <h1 className="heading-lg max-w-3xl mx-auto">
                Meet the minds behind <br />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-google-blue via-google-red to-google-yellow bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  GDG On Campus
                </motion.span>
              </h1>
            </div>
          </AnimatedSection>

          <div className="space-y-32">
            {Object.entries(categories).map(([category, info], sectionIndex) => {
              const members = groupedMembers[category];
              if (!members || members.length === 0) return null;

              return (
                <div key={category} className="relative">
                  <AnimatedSection delay={0.1}>
                    <div className="relative mb-12 pl-6 md:pl-8 border-l-2 border-neutral-100">
                      {/* Active Status Indicator Line */}
                      <div className={`absolute -left-[3px] top-0 h-16 w-[4px] ${info.color.replace('text-', 'bg-')} rounded-full`}></div>

                      {/* Meta Data Line */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-400">
                          NODE_0{sectionIndex + 1}
                        </span>
                        <span className="h-px w-6 bg-neutral-200"></span>
                        <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-neutral-50 border border-neutral-100 ${info.color}`}>
                          <info.icon size={10} strokeWidth={2} />
                          <span className="text-[9px] font-bold uppercase tracking-wider">SYS</span>
                        </div>
                      </div>

                      {/* Main Heading & Desc */}
                      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tighter">
                          {category}
                        </h2>
                        <p className="text-sm text-neutral-500 max-w-xs md:text-right pb-1 font-medium leading-relaxed font-mono">
                          // {info.description}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>

                  {/* Flex Container: Centered, One Line, Shrinks to Fit */}
                  <div className="flex w-full justify-center gap-2 md:gap-4 px-2 md:px-0">
                    {members.map((member, i) => {
                      const bgColor = info.color.replace("text-", "bg-");
                      return (
                        <AnimatedSection key={member.name} delay={0.05 * i} className="flex-1 max-w-[220px] md:max-w-[280px] min-w-0">
                          <div className="group relative cursor-pointer h-full w-full">
                            {/* Offset Color Shadow */}
                            <div className={`absolute inset-0 rounded-2xl transform translate-x-1 translate-y-1 md:translate-x-2 md:translate-y-2 group-hover:translate-x-2 group-hover:translate-y-2 md:group-hover:translate-x-4 md:group-hover:translate-y-4 transition-transform duration-300 ${bgColor} opacity-0 group-hover:opacity-100 rounded-tr-[1.5rem] md:rounded-tr-[2rem]`}></div>

                            {/* Main Card */}
                            <div className="relative h-full w-full bg-white rounded-2xl rounded-tr-[1.5rem] md:rounded-tr-[2rem] overflow-hidden border-2 border-black/5 group-hover:border-black transition-all duration-300">
                              <div className="aspect-[3/4] md:aspect-[4/4.5] relative w-full">
                                <img
                                  src={member.image}
                                  alt={member.name}
                                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>

                                <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                  <h3 className="text-white font-bold text-sm md:text-lg leading-tight mb-0.5 md:mb-1 drop-shadow-md truncate">{member.name}</h3>
                                  <div className="flex items-center justify-between border-t border-white/20 pt-1 md:pt-2">
                                    <p className="text-[10px] md:text-xs text-white/90 font-medium truncate pr-1">{member.role}</p>
                                    <a
                                      href={member.linkedin}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-white hover:text-google-blue transition-colors p-1 bg-white/10 rounded-full backdrop-blur-sm flex-shrink-0"
                                    >
                                      <Linkedin className="w-3 h-3 md:w-3.5 md:h-3.5" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </AnimatedSection>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
