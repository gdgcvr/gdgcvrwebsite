import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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
  { title: "Learn by building", description: "Hands-on workshops and hackathons where you ship real projects with cutting-edge tools." },
  { title: "Industry-relevant technologies", description: "From Google Cloud to TensorFlow, we focus on technologies that power the modern web." },
  { title: "Community-driven growth", description: "Mentorship, peer collaboration, and a network that extends far beyond campus." },
];

const colorBorder: Record<string, string> = {
  "google-blue": "border-google-blue",
  "google-red": "border-google-red",
  "google-green": "border-google-green",
};

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <DoodleCircle className="absolute top-24 right-[8%] w-24 h-24 opacity-15 text-google-blue" />
        <DoodleCross className="absolute top-44 left-[5%] w-12 h-12 opacity-12 text-google-red" />
        <DoodleTriangle className="absolute bottom-28 right-1/4 w-16 h-16 opacity-12 text-google-yellow" />
        <DoodleSpark className="absolute top-1/3 right-[15%] w-10 h-10 opacity-10 text-google-green" />
        <DoodleCurvedArrow className="absolute bottom-40 left-[12%] w-20 opacity-10 text-google-blue" />

        <div className="container-narrow">
          <AnimatedSection>
            <div className="flex items-center gap-2.5 mb-10">
              <span className="w-3 h-3 rounded-full bg-google-blue" />
              <span className="w-3 h-3 rounded-full bg-google-red" />
              <span className="w-3 h-3 rounded-full bg-google-yellow" />
              <span className="w-3 h-3 rounded-full bg-google-green" />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 className="heading-xl max-w-4xl">
              Google Developer
              <br />
              Groups —{" "}
              <span className="text-google-blue">Campus</span>
              <br />
              <span className="text-google-blue">Chapter</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="body-lg text-muted-foreground max-w-xl mt-10">
              A Google-backed student developer community where
              curiosity meets code. We learn, build, and grow — together.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="flex flex-wrap gap-4 mt-14">
              <Link
                to="/events"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-google-blue text-primary-foreground rounded-full text-sm font-medium hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
              >
                Explore Events
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/team"
                className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground rounded-full text-sm font-medium hover:bg-secondary hover:shadow-lift transition-all duration-200"
              >
                Join the Community
              </Link>
            </div>
          </AnimatedSection>
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

          <div className="mt-24 space-y-20">
            {focusPoints.map((point, i) => (
              <AnimatedSection key={point.title} delay={0.1 * i}>
                <div className="flex gap-8 items-start">
                  <span className="text-5xl font-bold text-muted-foreground/15 tabular-nums leading-none">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{point.title}</h3>
                    <p className="text-muted-foreground leading-[1.8] max-w-lg">{point.description}</p>
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
