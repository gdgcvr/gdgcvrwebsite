"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { latestEvent } from "@/data/events";
import { REGISTER_URL } from "@/constants/links";

const Hero = () => {
  const [eventLabel, setEventLabel] = useState("Next Event");

  useEffect(() => {
    if (latestEvent.startDate) {
      const isUpcoming = new Date(latestEvent.startDate) >= new Date();
      setEventLabel(isUpcoming ? "Next Event" : "Latest Event");
    }
  }, []);

  return (
    <section className="relative min-h-[95vh] pt-28 md:pt-32 pb-10 flex justify-center items-center bg-[#fafafa] selection:bg-black selection:text-white px-4 md:px-8 overflow-hidden">
      {/* Background Grid - VISIBLE & TECHNICAL */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
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
      <div className="relative z-10 w-full max-w-[1400px] h-full grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
        {/* 1. Main Title Block (Dominant) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-1 lg:col-span-8 lg:row-span-2 bg-neutral-50 rounded-[2rem] p-6 sm:p-8 md:p-10 lg:p-12 border border-neutral-100 relative overflow-hidden group flex flex-col justify-between min-h-[380px] md:min-h-[460px] lg:min-h-0"
        >
          {/* Background Texture */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
          ></div>
          <div className="absolute top-0 right-0 p-6 md:p-8" aria-hidden="true">
            <div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
              <ArrowRight className="text-neutral-400 group-hover:text-black transition-colors" />
            </div>
          </div>

          <div className="relative z-10 mt-auto">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[6.5rem] xl:text-[7rem] font-bold leading-[0.9] tracking-tight text-neutral-900"
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
            <p className="mt-6 text-neutral-500 font-medium max-w-md text-base sm:text-lg">
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
        <div className="col-span-1 lg:col-span-4 lg:row-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
          {/* 2a. Recruitment / Register Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="md:col-span-1 lg:col-span-1 bg-neutral-900 rounded-[2rem] p-6 relative overflow-hidden group min-h-[200px] flex flex-col justify-between border border-neutral-800"
          >
            {/* Subtle glow background */}
            <div
              className="absolute -top-10 -right-10 w-32 h-32 bg-google-green/10 rounded-full blur-2xl pointer-events-none group-hover:bg-google-green/20 transition-colors"
              aria-hidden="true"
            />

            {/* Header: Live status indicator */}
            <div className="flex items-center gap-2 relative z-10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400/90">
                We're Recruiting
              </span>
            </div>

            {/* Main Text Content */}
            <div className="relative z-10 my-3">
              <h2 className="text-xl font-bold text-neutral-100 tracking-tight leading-snug">
                Register for 2026-27 batch
              </h2>
              <p className="mt-1.5 text-neutral-400 text-xs md:text-sm leading-relaxed">
                Passionate about building, learning, and tech? Register now to join GDG on Campus CVR College of Engineering.
              </p>
            </div>

            {/* Action Button */}
            <div className="relative z-10 pt-1">
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full bg-white/10 hover:bg-white/15 text-neutral-100 border border-white/15 px-4 py-2.5 rounded-xl font-medium text-xs md:text-sm transition-all duration-200 group/btn backdrop-blur-sm shadow-sm"
              >
                <span className="text-neutral-200 group-hover/btn:text-white font-medium">
                  Register Here
                </span>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
              </a>
            </div>
          </motion.div>

          {/* 2b. Event Ticker (The "Time" Element) - ACTIVE BLUE */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="md:col-span-1 lg:col-span-1"
          >
            <Link
              href="/events?id=latest-event"
              className="h-full w-full bg-google-blue border border-google-blue rounded-[2rem] p-6 relative overflow-hidden group shadow-lg shadow-google-blue/20 min-h-[180px] flex flex-col justify-between hover:shadow-xl hover:shadow-google-blue/30 hover:scale-[1.02] active:scale-[0.99] transition-all duration-300 cursor-pointer"
              role="region"
              aria-label={eventLabel}
            >
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-google-blue shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Zap size={18} fill="currentColor" />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/80">
                    {eventLabel}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-white/70 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </div>
              </div>
              <div className="mt-2">
                <h2 className="text-2xl font-bold text-white group-hover:underline decoration-white/50 underline-offset-4 transition-all">
                  {latestEvent.title}
                </h2>
                <time className="text-white/80 block">{latestEvent.date}</time>
                <p
                  className="mt-2 text-white/70 text-sm truncate"
                  title={latestEvent.description}
                >
                  {latestEvent.description}
                </p>
              </div>
              {/* Decorative Big Icon */}
              <Zap
                className="absolute -bottom-4 -right-4 w-32 h-32 text-white/10 transform -rotate-12 pointer-events-none group-hover:scale-110 group-hover:rotate-0 transition-transform duration-500"
                aria-hidden="true"
              />
            </Link>
          </motion.div>

          {/* 2c. Community & Join (Split) */}
          <div className="md:col-span-2 lg:col-span-1 flex gap-4 md:gap-6 min-h-[130px]">
            {/* Community */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex-1"
            >
              <Link
                href="/events"
                className="h-full w-full bg-[#FED7AA] hover:bg-[#FDBA74] rounded-[2rem] p-5 flex flex-col justify-center items-center text-[#7C2D12] relative overflow-hidden group shadow-sm hover:shadow-md transition-all"
              >
                <div className="absolute inset-0 bg-[#FDBA74] scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300"></div>
                <span className="relative z-10 font-bold text-lg tracking-tight">
                  All Events
                </span>
                <ArrowRight className="relative z-10 w-5 h-5 mt-1 text-[#7C2D12] group-hover:translate-x-1 transition-transform" />
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
                href="/team"
                className="h-full w-full bg-[#CEEAD6] hover:bg-[#B7E1CD] rounded-[2rem] p-5 flex flex-col justify-center items-center text-[#0D652D] relative overflow-hidden group transition-all"
              >
                <div className="absolute inset-0 bg-[#B7E1CD] scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300"></div>
                <span className="relative z-10 font-bold text-lg tracking-tight">
                  Team
                </span>
                <ArrowRight className="relative z-10 w-5 h-5 mt-1 text-[#0D652D] group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
