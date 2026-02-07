import { motion, type Variants } from "framer-motion";

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 1.5, ease: "easeOut" as const }, opacity: { duration: 0.4 } },
  },
};

const driftAnimation = {
  y: [0, -5, 0],
  x: [0, 3, 0],
  rotate: [0, 1.5, 0],
  transition: { duration: 8, repeat: Infinity, ease: "easeInOut" as const },
};

const fadeDriftAnimation = {
  opacity: [0.08, 0.18, 0.08],
  y: [0, -4, 0],
  transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const },
};

export const DoodleCircle = ({ className = "" }: { className?: string }) => (
  <motion.svg className={className} viewBox="0 0 80 80" fill="none" animate={driftAnimation}>
    <motion.circle
      cx="40" cy="40" r="36"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="8 12"
      initial="hidden" whileInView="visible" viewport={{ once: true }}
      variants={draw}
    />
  </motion.svg>
);

export const DoodleSquiggle = ({ className = "" }: { className?: string }) => (
  <motion.svg className={className} viewBox="0 0 120 40" fill="none" animate={driftAnimation}>
    <motion.path
      d="M5 20C15 8 25 32 35 20C45 8 55 32 65 20C75 8 85 32 95 20C105 8 115 32 115 20"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      initial="hidden" whileInView="visible" viewport={{ once: true }}
      variants={draw}
    />
  </motion.svg>
);

export const DoodleDots = ({ className = "" }: { className?: string }) => (
  <motion.svg className={className} viewBox="0 0 60 60" fill="none" animate={fadeDriftAnimation}>
    <circle cx="10" cy="10" r="3" fill="currentColor" />
    <circle cx="30" cy="10" r="3" fill="currentColor" />
    <circle cx="50" cy="10" r="3" fill="currentColor" />
    <circle cx="10" cy="30" r="3" fill="currentColor" />
    <circle cx="50" cy="30" r="3" fill="currentColor" />
    <circle cx="10" cy="50" r="3" fill="currentColor" />
    <circle cx="30" cy="50" r="3" fill="currentColor" />
    <circle cx="50" cy="50" r="3" fill="currentColor" />
  </motion.svg>
);

export const DoodleLine = ({ className = "" }: { className?: string }) => (
  <motion.svg className={className} viewBox="0 0 200 4" fill="none" animate={driftAnimation}>
    <motion.line
      x1="0" y1="2" x2="200" y2="2"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="6 10"
      initial="hidden" whileInView="visible" viewport={{ once: true }}
      variants={draw}
    />
  </motion.svg>
);

export const DoodleTriangle = ({ className = "" }: { className?: string }) => (
  <motion.svg className={className} viewBox="0 0 60 60" fill="none" animate={driftAnimation}>
    <motion.path
      d="M30 8L54 52H6L30 8Z"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      initial="hidden" whileInView="visible" viewport={{ once: true }}
      variants={draw}
    />
  </motion.svg>
);

export const DoodleCross = ({ className = "" }: { className?: string }) => (
  <motion.svg className={className} viewBox="0 0 40 40" fill="none" animate={driftAnimation}>
    <motion.path
      d="M8 20H32M20 8V32"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      initial="hidden" whileInView="visible" viewport={{ once: true }}
      variants={draw}
    />
  </motion.svg>
);

export const DoodleCurvedArrow = ({ className = "" }: { className?: string }) => (
  <motion.svg className={className} viewBox="0 0 80 50" fill="none" animate={driftAnimation}>
    <motion.path
      d="M8 40C20 10 50 10 65 25"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      initial="hidden" whileInView="visible" viewport={{ once: true }}
      variants={draw}
    />
    <motion.path
      d="M58 18L66 26L56 30"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      initial="hidden" whileInView="visible" viewport={{ once: true }}
      variants={draw}
    />
  </motion.svg>
);

export const DoodleSpark = ({ className = "" }: { className?: string }) => (
  <motion.svg className={className} viewBox="0 0 40 40" fill="none" animate={fadeDriftAnimation}>
    <motion.path
      d="M20 4V12M20 28V36M4 20H12M28 20H36M8 8L14 14M26 26L32 32M32 8L26 14M14 26L8 32"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
      initial="hidden" whileInView="visible" viewport={{ once: true }}
      variants={draw}
    />
  </motion.svg>
);
