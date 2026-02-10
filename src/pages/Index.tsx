import { Link } from "react-router-dom";
import { ArrowRight, Users, Zap, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import Layout from "@/components/Layout";
import { DoodleCircle, DoodleSquiggle, DoodleCross, DoodleTriangle, DoodleDots, DoodleCurvedArrow, DoodleSpark, DoodleLine } from "@/components/DoodleAccents";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";

const featuredEvents = [
  {
    image: event1,
    title: "HackFest 2026",
    date: "March 15, 2026",
    description: "A 24-hour hackathon building solutions with Google Cloud and AI.",
    color: "google-blue" as const,
  },
  {
    image: event2,
    title: "Flutter Forward",
    date: "April 8, 2026",
    description: "Deep-dive workshop on building cross-platform apps with Flutter.",
    color: "google-red" as const,
  },
  {
    image: event3,
    title: "Community Connect",
    date: "May 20, 2026",
    description: "Networking event connecting students with industry professionals.",
    color: "google-green" as const,
  },
];

const focusPoints = [
  {
    title: "Connect",
    description: "Meet local developers and technologists. All are welcome, including those with diverse backgrounds and from various companies and industries.",
    icon: Users,
    color: "google-blue"
  },
  {
    title: "Learn",
    description: "Learn about a range of technical topics and gain new skills through hands-on workshops, training, events, talks, and meet ups — both online and in-person.",
    icon: Zap,
    color: "google-yellow"
  },
  {
    title: "Grow",
    description: "Apply your knowledge and connections to build great products and advance your skills, career, and network. Give back to your community by helping others learn, too.",
    icon: TrendingUp,
    color: "google-green"
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
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 pb-20 bg-transparent">
        {/* Gradient Mesh Background */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-google-blue/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-google-red/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-google-yellow/20 rounded-full blur-[120px] animate-pulse delay-2000"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-google-green/20 rounded-full blur-[120px] animate-pulse delay-3000"></div>
        </div>

        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="container-wide relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-left">
            <AnimatedSection>
              <div className="inline-block px-4 py-1.5 rounded-full border border-black/5 bg-secondary/30 text-sm font-semibold tracking-wide mb-6">
                <span className="w-2 h-2 rounded-full bg-google-green inline-block mr-2 animate-pulse"></span>
                CVR COLLEGE OF ENGINEERING
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-8 text-black">
                WE <br />
                <span className="text-google-blue">BUILD</span> <br />
                <span className="text-white" style={{ WebkitTextStroke: "2px black" }}>FUTURE.</span>
              </h1>
            </AnimatedSection>



            <AnimatedSection delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Link to="/events" className="px-8 py-4 border-2 border-black rounded-xl font-bold hover:bg-black hover:text-white transition-all">
                  View Events
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Content - 3D Elements */}
          <div className="relative hidden lg:block h-[600px] w-full perspective-1000">
            <motion.div
              initial={{ rotateX: 10, rotateY: -10, rotateZ: 5 }}
              animate={{ rotateX: [10, 5, 10], rotateY: [-10, -5, -10], rotateZ: [5, 2, 5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 w-[400px] h-[500px] bg-white border-2 border-black rounded-3xl shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] flex flex-col overflow-hidden"
            >
              <div className="bg-black p-4 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="p-8 flex-1 bg-secondary/20 relative">
                <div className="font-mono text-sm text-google-blue mb-2">import  Future  from 'gdg-cvr';</div>
                <div className="font-mono text-xs text-muted-foreground leading-loose">
                  <span className="text-google-red">class</span> <span className="text-black font-bold">Developer</span> {"{"} <br />
                  &nbsp;&nbsp;skills: [<span className="text-google-green">'CP'</span>, <span className="text-google-green">'Web'</span>, <span className="text-google-green">'AI'</span>,<span className="text-google-green">'IOT'</span>,<span className="text-google-green">'App'</span>,<span className="text-google-green">'DS'</span>]; <br />
                  &nbsp;&nbsp;passion: <span className="text-google-blue">true</span>; <br />
                  &nbsp;&nbsp;status: <span className="text-black">'Building...'</span>; <br />
                  {"}"}
                </div>

                {/* Abstract Shapes inside the card */}
                <div className="absolute bottom-10 right-10 w-24 h-24 bg-google-yellow rounded-full blur-2xl opacity-50"></div>
                <div className="absolute top-1/2 left-10 w-16 h-16 bg-google-blue rounded-full blur-xl opacity-40"></div>
              </div>
            </motion.div>

            {/* Floating Element 2 */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 left-10 p-6 bg-white border-2 border-black rounded-2xl shadow-[10px_10px_0px_0px_#EA4335]"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-google-red/10 rounded-full flex items-center justify-center text-google-red font-bold text-xl">
                  <Zap size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Workshop</div>
                  <div className="text-lg font-black leading-none">Flutter Forward</div>
                </div>
              </div>
            </motion.div>
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-google-green mb-8">About Us</p>
            <h2 className="heading-lg max-w-3xl">
              Empowering the next
              <br />
              generation of developers
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="body-lg text-muted-foreground max-w-xl mt-8">
              GDG Campus is a student-led community supported by Google, dedicated to bridging the gap between
              academic learning and real-world technology.
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
                  <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-white shadow-lg transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 ${bgColors[point.color]}`}>
                    <point.icon size={28} strokeWidth={2} />
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:translate-x-1 transition-transform duration-300">{point.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="section-padding border-t border-border relative">
        <DoodleCircle className="absolute top-16 right-[10%] w-20 h-20 opacity-10 text-google-red" />
        <DoodleSpark className="absolute bottom-32 left-[8%] w-8 h-8 opacity-10 text-google-yellow" />

        <div className="container-wide">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-google-blue mb-8">Events</p>
                <h2 className="heading-lg">What's happening</h2>
              </div>
              <Link
                to="/events"
                className="group inline-flex items-center gap-2 text-sm font-medium text-google-blue hover:opacity-80 transition-opacity"
              >
                View All Events
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-10">
            {featuredEvents.map((event, i) => (
              <AnimatedSection key={event.title} delay={0.12 * i}>
                <div className={`group border-t-2 ${colorBorder[event.color]} pt-8`}>
                  <div className="aspect-[16/10] rounded-xl overflow-hidden mb-7 bg-muted">
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

export default Index;
