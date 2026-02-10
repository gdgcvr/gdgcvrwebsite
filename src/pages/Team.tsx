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
  const getCategory = (role: string) => {
    const r = role.toLowerCase();
    if (r.includes("faculty") || r.includes("placement") || (r.includes("lead") && !r.includes("core"))) return "Leadership";
    if (r.includes("web")) return "Web Development";
    if (r.includes("android")) return "App Development";
    if (r.includes("aiml") || r.includes("data")) return "AI & Data Science";
    if (r.includes("cp") || r.includes("competitive")) return "Competitive Programming";
    if (r.includes("iot") || r.includes("embedded")) return "IoT & Embedded Systems";
    if (r.includes("design")) return "Graphic Design";
    if (r.includes("photo")) return "Photography";
    if (r.includes("logistics")) return "Logistics & Management";
    return "Core Team";
  };

  const categories = {
    "Leadership": { icon: User, color: "text-google-blue", description: "Guiding our vision and strategy." },
    "Web Development": { icon: Code2, color: "text-google-blue", description: "Crafting the digital experiences." },
    "App Development": { icon: Smartphone, color: "text-google-green", description: "Building for the mobile world." },
    "AI & Data Science": { icon: Brain, color: "text-google-red", description: "Innovating with intelligence." },
    "Competitive Programming": { icon: Trophy, color: "text-google-yellow", description: "Mastering algorithms and logic." },
    "IoT & Embedded Systems": { icon: Cpu, color: "text-google-blue", description: "Connecting the physical world." },
    "Graphic Design": { icon: Palette, color: "text-google-red", description: "Visualizing our identity." },
    "Photography": { icon: Camera, color: "text-google-yellow", description: "Capturing moments." },
    "Logistics & Management": { icon: Users, color: "text-google-green", description: "Making things happen." },
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
      <section className="section-padding relative">
        {/* Gradient Mesh Background */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-google-blue/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-google-red/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-google-yellow/20 rounded-full blur-[120px] animate-pulse delay-2000"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-google-green/20 rounded-full blur-[120px] animate-pulse delay-3000"></div>
        </div>

        <DoodleDots className="absolute top-24 right-[8%] w-14 h-14 opacity-10 text-google-yellow" />
        <DoodleCircle className="absolute bottom-36 left-[5%] w-24 h-24 opacity-8 text-google-blue" />
        <DoodleSpark className="absolute top-1/2 right-[15%] w-10 h-10 opacity-8 text-google-red" />

        <div className="container-wide">
          <AnimatedSection>
            <div className="text-center mb-24">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-google-red mb-6">
                Our Team
              </p>
              <h1 className="heading-lg max-w-3xl mx-auto">
                Meet the minds behind <br />
                <span className="text-google-blue">GDG Campus</span>
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
                    <div className="flex flex-col md:flex-row items-center md:items-end gap-4 mb-12 border-b-2 border-black/5 pb-4">
                      <div className={`p-3 rounded-2xl bg-secondary/50 ${info.color}`}>
                        <info.icon size={32} strokeWidth={1.5} />
                      </div>
                      <div className="text-center md:text-left">
                        <h2 className="text-3xl font-bold">{category}</h2>
                        <p className="text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </AnimatedSection>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10">
                    {members.map((member, i) => {
                      const bgColor = info.color.replace("text-", "bg-");
                      return (
                        <AnimatedSection key={member.name} delay={0.05 * i}>
                          <div className="group relative cursor-pointer h-full">
                            {/* Offset Color Shadow */}
                            <div className={`absolute inset-0 rounded-2xl transform translate-x-2 translate-y-2 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300 ${bgColor} opacity-0 group-hover:opacity-100 rounded-tr-[2rem]`}></div>

                            {/* Main Card */}
                            <div className="relative h-full bg-white rounded-2xl rounded-tr-[2rem] overflow-hidden border-2 border-black/5 group-hover:border-black transition-all duration-300">
                              <div className="aspect-[4/4.5] relative">
                                {/* Tech Corner Accent */}
                                <div className={`absolute top-0 right-0 w-12 h-12 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                                  <div className={`absolute top-0 right-0 w-full h-full ${bgColor} opacity-20`}></div>
                                  <div className={`w-2 h-2 ${bgColor} rounded-full`}></div>
                                </div>

                                <img
                                  src={member.image}
                                  alt={member.name}
                                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>

                                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                  <h3 className="text-white font-bold text-lg leading-tight mb-1 drop-shadow-md">{member.name}</h3>
                                  <div className="flex items-center justify-between border-t border-white/20 pt-2">
                                    <p className="text-xs text-white/90 font-medium line-clamp-1">{member.role}</p>
                                    <a
                                      href={member.linkedin}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-white hover:text-google-blue transition-colors p-1 bg-white/10 rounded-full backdrop-blur-sm"
                                    >
                                      <Linkedin size={14} />
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
