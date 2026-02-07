import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import Layout from "@/components/Layout";
import { DoodleSquiggle, DoodleTriangle, DoodleSpark } from "@/components/DoodleAccents";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";

const allEvents = [
  { title: "HackFest 2026", date: "March 15, 2026", description: "A 24-hour hackathon building solutions with Google Cloud and AI.", image: event1, upcoming: true, color: "google-blue" },
  { title: "Flutter Forward", date: "April 8, 2026", description: "Deep-dive workshop on building cross-platform apps with Flutter.", image: event2, upcoming: true, color: "google-red" },
  { title: "Community Connect", date: "May 20, 2026", description: "Networking event connecting students with industry professionals.", image: event3, upcoming: true, color: "google-green" },
  { title: "DevFest 2025", date: "November 10, 2025", description: "Annual developer festival featuring talks, codelabs, and networking.", image: event1, upcoming: false, color: "google-yellow" },
  { title: "Cloud Study Jam", date: "September 5, 2025", description: "Hands-on lab session exploring Google Cloud Platform fundamentals.", image: event2, upcoming: false, color: "google-blue" },
  { title: "Android Workshop", date: "July 22, 2025", description: "Building modern Android apps with Jetpack Compose.", image: event3, upcoming: false, color: "google-green" },
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
      <section className="section-padding relative">
        <DoodleSquiggle className="absolute top-24 left-[5%] w-28 opacity-8 text-google-blue" />
        <DoodleTriangle className="absolute bottom-36 right-[8%] w-14 h-14 opacity-8 text-google-red" />
        <DoodleSpark className="absolute top-1/3 right-[12%] w-8 h-8 opacity-8 text-google-yellow" />

        <div className="container-wide">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-google-blue mb-8">Events</p>
            <h1 className="heading-lg max-w-2xl">
              Workshops, hackathons,
              <br />
              and more
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="flex gap-2 mt-12">
              {(["all", "upcoming", "past"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    filter === f
                      ? "bg-foreground text-background shadow-lift"
                      : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-10 mt-16">
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
