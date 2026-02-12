import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import Layout from "@/components/Layout";
import CalendarView from "@/components/CalendarView";
import { DoodleSquiggle, DoodleTriangle, DoodleSpark } from "@/components/DoodleAccents";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";

export const allEvents = [
  { title: "Resume Building Session", date: "February 13, 2026", description: "Learn how to craft a perfect resume to crack top tech companies.", image: event1, upcoming: true, color: "google-blue" },
  { title: "Web Dev Sessions", date: "Every Tue & Thu", description: "Master full-stack web development from basics to advanced frameworks.", image: event2, upcoming: true, color: "google-blue" },
  { title: "AIML-DS Sessions", date: "Every Wed & Thu", description: "Dive deep into Artificial Intelligence, Machine Learning and Data Science.", image: event3, upcoming: true, color: "google-red" },
  { title: "Android Sessions", date: "Every Wednesday", description: "Build modern Android applications using Kotlin and Jetpack Compose.", image: event1, upcoming: true, color: "google-green" },
  { title: "CP Sessions", date: "Every Mon & Fri", description: "Sharpen your algorithmic skills with Competitive Programming sessions.", image: event2, upcoming: true, color: "google-yellow" },
  { title: "IoT Sessions", date: "Every Friday", description: "Explore the world of Internet of Things and Hardware projects.", image: event3, upcoming: true, color: "google-blue" },
];

const colorBorder: Record<string, string> = {
  "google-blue": "border-google-blue",
  "google-red": "border-google-red",
  "google-green": "border-google-green",
  "google-yellow": "border-google-yellow",
};

const Events = () => {
  const [filter, setFilter] = useState<"all" | "upcoming" | "past">("all");

  const filtered = allEvents.filter((e) => {
    if (filter === "upcoming") return e.upcoming;
    if (filter === "past") return !e.upcoming;
    return true;
  });

  return (
    <Layout>
      {/* Digital Horizon Background (Events Specific) */}
      <div className="absolute inset-0 z-[-1] pointer-events-none">
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#fafafa]">

          {/* Top Spotlight Gradient */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-gradient-to-b from-google-blue/5 to-transparent rounded-full blur-[120px]"></div>

          {/* Horizon Lines SVG */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.4]" preserveAspectRatio="none" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Horizontal Timeline Markers */}
            <line x1="0" y1="200" x2="1440" y2="200" stroke="#E5E5E5" strokeWidth="1" strokeDasharray="10 10" />
            <line x1="0" y1="400" x2="1440" y2="400" stroke="#E5E5E5" strokeWidth="1" strokeDasharray="10 10" />
            <line x1="0" y1="600" x2="1440" y2="600" stroke="#E5E5E5" strokeWidth="1" strokeDasharray="10 10" />

            {/* Vertical Data Streams */}
            <line x1="200" y1="0" x2="200" y2="800" stroke="#E5E5E5" strokeWidth="1" opacity="0.5" />
            <line x1="1240" y1="0" x2="1240" y2="800" stroke="#E5E5E5" strokeWidth="1" opacity="0.5" />

            {/* Active Event Pulse Lines (Google Colors) */}
            <motion.line
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              x1="0" y1="199" x2="1440" y2="199"
              stroke="#4285F4" strokeWidth="2" strokeOpacity="0.3"
            />
            <motion.line
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2.5, ease: "easeOut", delay: 0.5 }}
              x1="200" y1="0" x2="200" y2="400"
              stroke="#DB4437" strokeWidth="2" strokeOpacity="0.3"
            />
          </svg>

          {/* Grain Overlay */}
          <div className="absolute inset-0 opacity-[0.2]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>
        </div>
      </div>

      <section className="pt-36 pb-10 relative">
        <div className="container-wide relative z-10">


          <AnimatedSection delay={0.05}>
            <div className="text-center mb-8">
              <h1 className="heading-lg">Upcoming Sessions</h1>
            </div>

            <div className="mb-8 group relative rounded-3xl overflow-hidden border border-border/60 shadow-sm hover:shadow-md transition-all duration-300">
              <Link to="/calendar" className="block relative">
                <div className="h-[450px] pointer-events-none select-none transition-all duration-300">
                  <CalendarView isPreview={true} />
                </div>

                <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <span className="px-8 py-3 bg-foreground text-background rounded-full font-semibold shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Go to Calendar
                  </span>
                </div>
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="flex gap-2 mt-8">
              {(["all", "upcoming", "past"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${filter === f
                    ? "bg-foreground text-background shadow-lift"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                    }`}
                >
                  {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {filtered.map((event, i) => (
              <AnimatedSection key={event.title + event.date} delay={0.06 * i}>
                <div className={`group border-t-2 ${colorBorder[event.color]} pt-8`}>
                  <div className="aspect-[16/10] rounded-xl overflow-hidden mb-7 bg-muted shadow-sm group-hover:shadow-lift transition-shadow duration-300">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mb-3 tracking-wide uppercase">{event.date}</p>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-google-blue transition-colors duration-200">{event.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
