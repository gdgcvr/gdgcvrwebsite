import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import Layout from "@/components/Layout";
import CalendarView from "@/components/CalendarView";
import { allEvents } from "@/data/events";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const Events = () => {
  const [filter, setFilter] = useState<"all" | "upcoming" | "past">("all");
  const [selectedEvent, setSelectedEvent] = useState<typeof allEvents[0] | null>(null);

  const filtered = allEvents.filter((e) => {
    if (filter === "upcoming") return e.upcoming;
    if (filter === "past") return !e.upcoming;
    return true;
  });

  return (
    <Layout>
      {/* Digital Horizon Background */}
      <div className="absolute inset-0 z-[-1] pointer-events-none">
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#fafafa]">
          {/* Gradients */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-gradient-to-b from-google-blue/5 to-transparent rounded-full blur-[120px]"></div>

          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>
      </div>

      <section className="pt-36 pb-20 relative px-4">
        <div className="container-wide relative z-10">

          {/* Header */}
          <AnimatedSection delay={0.05}>
            <div className="flex flex-col items-center gap-4 mb-16 border-b border-black/5 pb-8 w-full text-center">
              <h1 className="heading-lg mb-2">Upcoming Events</h1>
              <p className="body-lg text-neutral-500 max-w-md">
                Secure your spot. Join us for workshops, hackathons, and tech talks.
              </p>
            </div>
          </AnimatedSection>

          {/* Calendar View - Embedded Directly */}
          <AnimatedSection delay={0.1}>
            <div className="mb-16 w-full max-w-7xl mx-auto bg-white rounded-3xl shadow-lg border border-neutral-100 overflow-hidden">
              <div className="bg-neutral-900 text-white p-6 md:p-8 flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold">Event Calendar</h2>
                  <p className="text-neutral-400 text-sm">Interactive monthly schedule</p>
                </div>
              </div>
              <div className="p-4 md:p-6 bg-white min-h-[600px]">
                <CalendarView />
              </div>
            </div>
          </AnimatedSection>

          {/* Filter */}
          <AnimatedSection delay={0.15}>
            <div className="flex justify-center mb-16">
              <div className="inline-flex gap-2 bg-white p-1.5 rounded-full border border-black/5 shadow-md">
                {(["all", "upcoming", "past"] as const).map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-8 py-3 rounded-full text-base font-bold uppercase tracking-wider transition-all duration-300 ${filter === f
                      ? "bg-black text-white shadow-lg transform scale-105"
                      : "text-neutral-400 hover:text-black hover:bg-neutral-50"
                      }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* PREMIUM TICKET LAYOUT - ZIG ZAG */}
          <div className="flex flex-col gap-16 max-w-7xl mx-auto">
            {filtered.map((event, i) => {
              const bgColors = {
                "google-blue": "bg-google-blue",
                "google-red": "bg-google-red",
                "google-green": "bg-google-green",
                "google-yellow": "bg-google-yellow",
              };

              const textColors = {
                "google-blue": "text-google-blue",
                "google-red": "text-google-red",
                "google-green": "text-google-green",
                "google-yellow": "text-google-yellow",
              };

              const bgColor = bgColors[event.color] || "bg-google-blue";
              const textColor = textColors[event.color] || "text-google-blue";
              const isEven = i % 2 === 0;

              return (
                <AnimatedSection key={event.title + event.date} delay={0.1}>
                  <div className={`w-full lg:max-w-5xl ${isEven ? 'self-start mr-auto' : 'self-end ml-auto'}`}>
                    <div
                      className="group relative w-full perspective-1000 cursor-pointer"
                      onClick={() => setSelectedEvent(event as any)}
                    >
                      <div className="relative flex flex-col md:flex-row h-auto md:h-64 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 bg-white border border-black/5 hover:-translate-y-1">

                        {/* LEFT STUB (Date & Info) */}
                        <div className={`relative w-full md:w-72 flex flex-row md:flex-col items-center justify-between md:justify-center p-6 md:p-8 ${bgColor} text-white overflow-hidden shrink-0`}>
                          {/* Decorative Pattern */}
                          <div className="absolute inset-0 opacity-10"
                            style={{ backgroundImage: "radial-gradient(circle, white 2px, transparent 2px)", backgroundSize: "12px 12px" }}>
                          </div>

                          {/* Full Date Content */}
                          <div className="relative z-10 text-center flex md:flex-col items-center justify-center gap-2 w-full">
                            {/* Display full date properly */}
                            <span className="text-2xl md:text-3xl font-black tracking-tight text-center leading-tight">
                              {event.date}
                            </span>
                            <div className="w-12 h-1 bg-white/30 rounded-full my-2 hidden md:block"></div>
                            <span className="text-xs font-bold uppercase tracking-widest opacity-80 hidden md:block">
                              Official Event
                            </span>
                          </div>

                          {/* "Admit One" Vertical Text (Desktop) */}
                          <div className="hidden md:block absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
                            GDG TICKET
                          </div>

                          {/* Top/Bottom Notches */}
                          <div className="absolute -right-3 top-0 w-6 h-6 bg-[#fafafa] rounded-full z-20 hidden md:block"></div>
                          <div className="absolute -right-3 bottom-0 w-6 h-6 bg-[#fafafa] rounded-full z-20 hidden md:block"></div>

                          {/* Mobile Notches */}
                          <div className="absolute -bottom-3 left-0 w-6 h-6 bg-[#fafafa] rounded-full z-20 md:hidden"></div>
                          <div className="absolute -bottom-3 right-0 w-6 h-6 bg-[#fafafa] rounded-full z-20 md:hidden"></div>
                        </div>

                        {/* PERFORATION DIVIDER */}
                        <div className="relative w-full md:w-auto h-4 md:h-full flex md:flex-col items-center justify-center bg-white z-10">
                          <div className="w-full h-[1px] md:w-[1px] md:h-full border-t-2 md:border-t-0 md:border-l-2 border-dashed border-neutral-300 mx-4 md:my-4"></div>
                        </div>

                        {/* RIGHT MAIN CONTENT */}
                        <div className="flex-1 flex flex-col-reverse md:flex-row bg-white p-6 md:p-8 md:pl-6 relative">
                          <div className="flex-1 flex flex-col justify-between pr-4">
                            <div>
                              <div className="flex items-center gap-3 mb-3">
                                <span className={`inline-block w-2 h-2 rounded-full ${bgColor}`}></span>
                                <span className={`text-xs font-bold uppercase tracking-widest ${textColor}`}>
                                  {event.upcoming ? 'Upcoming' : 'Past Event'}
                                </span>
                              </div>
                              <h3 className="text-2xl md:text-3xl font-bold text-black mb-3 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-neutral-500 transition-all">
                                {event.title}
                              </h3>
                              <p className="text-neutral-500 font-medium line-clamp-2 md:line-clamp-3 mb-6">
                                {event.description}
                              </p>
                            </div>

                            {/* Footer */}
                            <div className="mt-auto pt-4 border-t border-black/5 flex items-center justify-between">
                              <div className="h-8 flex gap-1 opacity-20 group-hover:opacity-10 transition-opacity">
                                {[...Array(12)].map((_, j) => (
                                  <div key={j} className={`w-${j % 2 === 0 ? '1' : '2'} h-full bg-black`}></div>
                                ))}
                              </div>

                              <div className="flex items-center gap-2 group/btn">
                                <span className="text-xs font-bold text-black uppercase tracking-wide group-hover/btn:underline decoration-2 underline-offset-2">
                                  Details
                                </span>
                                <div className={`w-8 h-8 rounded-full border border-black/10 flex items-center justify-center bg-white group-hover:bg-black group-hover:text-white transition-all duration-300`}>
                                  <ArrowUpRight className="w-4 h-4" />
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Image Section */}
                          <div className="w-full md:w-56 h-48 md:h-full rounded-2xl overflow-hidden relative mb-6 md:mb-0 shrink-0 border border-black/5">
                            {event.image ? (
                              <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-110"
                                loading="lazy"
                              />
                            ) : (
                              <div className={`w-full h-full bg-neutral-100 flex items-center justify-center`}>
                                <span className={`text-4xl font-black text-neutral-200 select-none`}>
                                  GDG
                                </span>
                              </div>
                            )}
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
      </section>

      {/* Event Details Dialog */}
      <Dialog open={!!selectedEvent} onOpenChange={(open) => !open && setSelectedEvent(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden border-none bg-white rounded-3xl shadow-2xl">
          <ScrollArea className="max-h-[85vh]">
            {selectedEvent && (
              <div className="relative">
                {/* Banner Image */}
                <div className="h-64 md:h-80 w-full relative">
                  <img
                    src={selectedEvent.image}
                    alt={selectedEvent.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-all z-50"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="absolute bottom-6 left-8 right-8 text-white">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-white text-black`}>
                        {selectedEvent.upcoming ? 'Upcoming' : 'Past Event'}
                      </span>
                      <span className="text-sm font-bold opacity-80">{selectedEvent.date}</span>
                    </div>
                    <DialogTitle className="text-3xl md:text-4xl font-black mb-0 text-white">
                      {selectedEvent.title}
                    </DialogTitle>
                  </div>
                </div>

                <div className="p-8 md:p-10 bg-white">
                  {/* Content Grid */}
                  <div className="flex flex-col gap-10">
                    {/* Description Section */}
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-black border-l-4 border-google-blue pl-4">About the Event</h4>
                      <DialogDescription className="text-lg text-neutral-600 leading-relaxed font-medium">
                        {(selectedEvent as any).descriptionLong || selectedEvent.description}
                      </DialogDescription>
                    </div>

                    {/* Gallery Section */}
                    {(selectedEvent as any).gallery && (selectedEvent as any).gallery.length > 0 && (
                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xl font-bold text-black border-l-4 border-google-green pl-4">Event Gallery</h4>
                          <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
                            {(selectedEvent as any).gallery.length} Images
                          </span>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {(selectedEvent as any).gallery.map((img: string, idx: number) => (
                            <motion.div
                              key={idx}
                              whileHover={{ scale: 1.02 }}
                              className={`relative rounded-2xl overflow-hidden cursor-zoom-in h-48 border border-black/5 ${idx === 0 ? 'col-span-2 md:col-span-2 h-64 md:h-80' : 'h-40 md:h-full'
                                }`}
                            >
                              <img
                                src={img}
                                alt={`Gallery ${idx}`}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                              />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Footer / Call to Action */}
                    {selectedEvent.upcoming && (
                      <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 flex flex-col items-center justify-center text-center gap-4">
                        <div>
                          <h5 className="font-bold text-lg mb-1">Coming soon to CVR Campus</h5>
                          <p className="text-neutral-500 text-sm">Follow our socials for more updates on registration.</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Events;
