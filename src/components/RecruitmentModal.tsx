"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, Users, Code, Rocket } from "lucide-react";
import { REGISTER_URL } from "@/constants/links";

const highlights = [
  {
    icon: Code,
    title: "Build & Learn",
    description: "Hands-on workshops with cutting-edge technologies",
  },
  {
    icon: Users,
    title: "Community",
    description: "Connect with passionate developers on campus",
  },
  {
    icon: Rocket,
    title: "Grow",
    description: "Lead projects, organize events & build your portfolio",
  },
];

const RecruitmentModalInner = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Open automatically on initial load
    setIsOpen(true);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="recruitment-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6"
          onClick={handleClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            id="recruitment-modal"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-2xl md:rounded-3xl shadow-2xl max-h-[95vh] md:max-h-[90vh] overflow-y-auto overflow-x-hidden"
          >
            {/* ── Top Banner ── */}
            <div className="relative overflow-hidden bg-neutral-900 px-6 pt-8 pb-10 md:px-8 md:pt-10 md:pb-14">
              {/* Animated gradient orbs */}
              <div className="absolute -top-20 -left-20 w-56 h-56 rounded-full bg-google-blue/30 blur-[80px] animate-pulse" />
              <div className="absolute -bottom-10 -right-16 w-48 h-48 rounded-full bg-google-red/25 blur-[70px] animate-pulse [animation-delay:1s]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-google-green/20 blur-[60px] animate-pulse [animation-delay:2s]" />

              {/* Dot grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, white 1.5px, transparent 1.5px)",
                  backgroundSize: "20px 20px",
                }}
              />

              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white flex items-center justify-center transition-all duration-200 z-10"
                aria-label="Close recruitment modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Content */}
              <div className="relative z-10">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white/80 text-[11px] font-bold uppercase tracking-widest mb-4 md:mb-5"
                >
                  Now Recruiting
                </motion.div>

                {/* Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl md:text-4xl font-black text-white leading-[1.1] mb-3 tracking-tight"
                >
                  Join{" "}
                  <span className="bg-gradient-to-r from-google-blue via-google-red to-google-yellow bg-clip-text text-transparent">
                    GDG on Campus
                  </span>
                  <br />
                  CVR — 2026-27
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="text-white/50 text-sm font-medium max-w-xs"
                >
                  Be part of the most vibrant developer community on campus.
                </motion.p>
              </div>

              {/* Google color bar at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1 flex">
                <div className="flex-1 bg-google-blue" />
                <div className="flex-1 bg-google-red" />
                <div className="flex-1 bg-google-yellow" />
                <div className="flex-1 bg-google-green" />
              </div>
            </div>

            {/* ── Body ── */}
            <div className="bg-white px-6 py-6 md:px-8 md:py-8">
              {/* Highlights */}
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {highlights.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.08 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center shrink-0 group-hover:border-google-blue/30 group-hover:bg-blue-50/50 transition-colors duration-300">
                      <item.icon className="w-[18px] h-[18px] text-neutral-400 group-hover:text-google-blue transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900 mb-0.5">
                        {item.title}
                      </h4>
                      <p className="text-xs text-neutral-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="space-y-3"
              >
                <a
                  id="recruitment-register-btn"
                  href={REGISTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 md:py-3.5 rounded-xl md:rounded-2xl bg-neutral-900 text-white font-bold text-sm hover:bg-neutral-800 hover:shadow-lg hover:shadow-neutral-900/20 active:scale-[0.98] transition-all duration-200 group"
                >
                  <span>Register Now</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <button
                  onClick={handleClose}
                  className="w-full py-2.5 rounded-2xl text-neutral-400 hover:text-neutral-600 text-xs font-medium transition-colors duration-200"
                >
                  Maybe later
                </button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const RecruitmentModal = () => {
  return (
    <Suspense fallback={null}>
      <RecruitmentModalInner />
    </Suspense>
  );
};

export default RecruitmentModal;
