import { Link, redirect } from "react-router-dom";
import { ArrowRight, Users, Zap, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import Layout from "@/components/Layout";
import {
  DoodleSquiggle,
  DoodleDots,
  DoodleLine,
} from "@/components/DoodleAccents";
import { nextEvent } from "@/data/events";

const focusPoints = [
  {
    title: "Connect",
    description:
      "Meet local developers and technologists. All are welcome, including those with diverse backgrounds and from various companies and industries.",
    icon: Users,
    color: "google-blue",
  },
  {
    title: "Learn",
    description:
      "Learn about a range of technical topics and gain new skills through hands-on workshops, training, events, talks, and meet ups — both online and in-person.",
    icon: Zap,
    color: "google-yellow",
  },
  {
    title: "Grow",
    description:
      "Apply your knowledge and connections to build great products and advance your skills, career, and network. Give back to your community by helping others learn, too.",
    icon: TrendingUp,
    color: "google-green",
  },
];

const colorBorder: Record<string, string> = {
  "google-blue": "border-google-blue",
  "google-red": "border-google-red",
  "google-green": "border-google-green",
  "google-yellow": "border-google-yellow",
};

const bgColors: Record<string, string> = {
  "google-blue": "bg-google-blue",
  "google-red": "bg-google-red",
  "google-green": "bg-google-green",
  "google-yellow": "bg-google-yellow",
};

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      {/* Hero - Premium Cinematic Stage */}
      {/* Hero - The Premium Ecosystem Grid */}
      {/* Hero - The Swiss Interface Grid (High Visibility Mode) */}
      <section className="relative min-h-[95vh] pt-28 md:pt-32 pb-10 flex justify-center items-center bg-[#fafafa] selection:bg-black selection:text-white px-4 md:px-8 overflow-hidden">
        {/* Background Grid - VISIBLE & TECHNICAL */}
        <div className="absolute inset-0 pointer-events-none">
          {/* 1. Base Dot Grid (High Contrast) */}
          <div
            className="absolute inset-0 opacity-[0.2]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1.5'/%3E%3C/g%3E%3C/svg%3E\")",
            }}
          ></div>

          {/* 2. Secondary Linear Grid (Architecture/Graph Paper Feel) */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
              backgroundSize: "100px 100px",
            }}
          ></div>

          {/* 3. Gradient Blobs (Subtle) */}
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-google-blue/10 rounded-full blur-[100px] mix-blend-multiply animate-pulse"></div>
          <div
            className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-google-yellow/10 rounded-full blur-[100px] mix-blend-multiply animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        {/* The Grid Container - Constrained & Aligned (Glass Effect on Cells) */}
        <div className="relative z-10 w-full max-w-[1400px] h-full grid grid-cols-1 md:grid-cols-12 grid-rows-[auto_auto_auto] md:grid-rows-2 gap-4 md:gap-6">
          {/* 1. Main Title Block (Dominant) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-1 md:col-span-8 row-span-1 md:row-span-2 bg-neutral-50 rounded-[2rem] p-8 md:p-12 border border-neutral-100 relative overflow-hidden group flex flex-col justify-between"
          >
            {/* Background Texture */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
                backgroundSize: "24px 24px",
              }}
            ></div>
            <div className="absolute top-0 right-0 p-6 md:p-8">
              <div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                <ArrowRight className="text-neutral-400 group-hover:text-black transition-colors" />
              </div>
            </div>

            <div className="relative z-10 mt-auto">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl md:text-[5rem] lg:text-[7rem] font-bold leading-[0.9] tracking-tight text-neutral-900"
              >
                WHERE <br />
                CAMPUS <br />
                MEETS <br />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-google-blue via-google-red to-google-yellow bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  GOOGLE
                </motion.span>
              </motion.h1>
              <p className="mt-6 text-neutral-500 font-medium max-w-md text-lg">
                The bridge between theory and impact.{" "}
                <a
                  href="https://cvr.ac.in/home4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whitespace-nowrap font-semibold text-neutral-800 border-b border-neutral-300 hover:border-black transition-colors"
                >
                  CVR College of Engineering
                </a>
                's premier developer ecosystem.
              </p>
            </div>
          </motion.div>

          {/* 2. The Interactive Component Stack (Right Column) */}
          <div className="col-span-1 md:col-span-4 row-span-1 md:row-span-2 flex flex-col gap-4 md:gap-6">
            {/* 2a. Live Terminal (The "Code" Element) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex-1 bg-neutral-900 rounded-[2rem] p-6 relative overflow-hidden group min-h-[200px]"
            >
              {/* Traffic Lights */}
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              {/* Code Content */}
              <div className="font-mono text-xs md:text-sm text-neutral-400 space-y-1">
                <p>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">future</span> ={" "}
                  <span className="text-yellow-400">init</span>();
                </p>
                <p>
                  <span className="text-purple-400">await</span> future.
                  <span className="text-green-400">build</span>();
                </p>
                <div className="flex items-center gap-2 mt-4 text-white">
                  <span className="text-green-500">➜</span>
                  <span className="animate-pulse">_</span>
                </div>
              </div>
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="px-3 py-1 bg-white/10 rounded-full text-xs text-white backdrop-blur-md">
                  Start Building
                </div>
              </div>
            </motion.div>

            {/* 2b. Event Ticker (The "Time" Element) - ACTIVE BLUE */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex-1 bg-google-blue border border-google-blue rounded-[2rem] p-6 relative overflow-hidden group shadow-lg shadow-google-blue/20 min-h-[180px]"
            >
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-google-blue shadow-sm">
                  <Zap size={18} fill="currentColor" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-white/80">
                  Next Event
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white">
                  {nextEvent.title}
                </h3>
                <p className="text-white/80">{nextEvent.date}</p>
                <p
                  className="mt-2 text-white/70 text-sm truncate"
                  title={nextEvent.description}
                >
                  {nextEvent.description}
                </p>
              </div>
              {/* Decorative Big Icon */}
              <Zap className="absolute -bottom-4 -right-4 w-32 h-32 text-white/10 transform -rotate-12 pointer-events-none" />
            </motion.div>

            {/* 2c. Community & Join (Split) */}
            <div className="flex gap-4 md:gap-6 flex-1 min-h-[140px]">
              {/* Community */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex-1"
              >
                <Link
                  to="/events"
                  className="h-full w-full bg-google-green rounded-[2rem] p-5 flex flex-col justify-center items-center text-white relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-black/10 scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300"></div>
                  <span className="relative z-10 font-bold text-lg">
                    All Events
                  </span>
                  <ArrowRight className="relative z-10 w-5 h-5 mt-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              {/* Join Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex-1"
              >
                <Link
                  to="/team"
                  className="h-full w-full bg-google-red rounded-[2rem] p-5 flex flex-col justify-center items-center text-white relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-black/10 scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300"></div>
                  <span className="relative z-10 font-bold text-lg">Team</span>
                  <ArrowRight className="relative z-10 w-5 h-5 mt-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section-padding border-t border-border relative">
        <DoodleSquiggle className="absolute top-20 left-1/3 w-32 opacity-8 text-google-green" />
        <DoodleDots className="absolute bottom-24 right-[8%] w-16 h-16 opacity-8 text-google-yellow" />
        <DoodleLine className="absolute top-1/2 right-[20%] w-24 opacity-8 text-google-red" />

        <div className="container-narrow">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-google-green mb-8">
              About Us
            </p>
            <h2 className="heading-lg max-w-3xl">
              Empowering the next
              <br />
              generation of developers
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="body-lg text-muted-foreground max-w-xl mt-8">
              GDG Campus is a student-led community supported by Google,
              dedicated to bridging the gap between academic learning and
              real-world technology.
            </p>
          </AnimatedSection>

          <div className="mt-24 grid md:grid-cols-3 gap-8">
            {focusPoints.map((point, i) => (
              <AnimatedSection key={point.title} delay={0.1 * i}>
                <div className="group relative h-full p-8 rounded-[2.5rem] bg-secondary/30 hover:bg-white border border-transparent hover:border-black/5 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] overflow-hidden">
                  {/* Large Number Watermark */}
                  <span className="absolute -right-2 -top-2 text-[8rem] leading-none font-bold text-black/[0.02] group-hover:text-black/[0.04] transition-colors select-none pointer-events-none">
                    0{i + 1}
                  </span>

                  {/* Icon */}
                  <div
                    className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-white shadow-lg transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 ${bgColors[point.color]}`}
                  >
                    <point.icon size={28} strokeWidth={2} />
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:translate-x-1 transition-transform duration-300">
                      {point.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
