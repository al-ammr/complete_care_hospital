/**
 * Framer Motion animation variants for Complete Care Hospital.
 * Provides consistent, premium motion across the application.
 */

// ── Fade & Slide Reveals ──────────────────────────────────────────────

export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export const fadeInDown = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
};

// ── Staggered Containers ──────────────────────────────────────────────

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 250, damping: 25 },
  },
};

// ── Spring Physics ────────────────────────────────────────────────────

export const springBounce = {
  type: "spring" as const,
  stiffness: 300,
  damping: 20,
};

export const springSmooth = {
  type: "spring" as const,
  stiffness: 400,
  damping: 25,
};

// ── Interactive States ────────────────────────────────────────────────

export const cardHover = {
  scale: 1.03,
  y: -8,
  boxShadow: "0 10px 40px rgba(37, 99, 235, 0.25)",
  transition: { type: "spring" as const, stiffness: 350, damping: 25 },
};

export const buttonHover = {
  scale: 1.05,
};

export const buttonTap = {
  scale: 0.98,
};

// ── State Transitions ─────────────────────────────────────────────────

export const accordionExpand = {
  open: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.3, ease: "easeOut" },
  },
  collapsed: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

export const pageTransition = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -15 },
  transition: { duration: 0.4, ease: "easeInOut" },
};

// ── Scroll Reveal Defaults ────────────────────────────────────────────

export const scrollRevealViewport = {
  once: true,
  margin: "-100px" as const,
};
