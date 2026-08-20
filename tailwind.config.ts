import type { Config } from "tailwindcss";

/**
 * Complete Care Hospital — Premium Design System Tokens
 * ═════════════════════════════════════════════════════
 *
 * This Tailwind configuration defines the full visual language for the
 * Complete Care Hospital website. Every color, shadow, radius, font,
 * spacing value, and animation timing is intentional and designed to
 * convey trust, warmth, and medical professionalism.
 *
 * Color Philosophy:
 *   • Deep Navy primary — authority & trust
 *   • Vibrant Teal accent — healing & modernity
 *   • Warm Red emergency — urgency without harshness
 *   • Soft neutrals — comfort & clarity
 *
 * @see docs/06-Design-System-Complete-Care-Hospital.md
 */

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      // ── Color Palette ───────────────────────────────────────────────
      colors: {
        // Primary — Deep Medical Blue (Trust, Competence)
        primary: {
          DEFAULT: "#1769AA",
          light: "#2196F3",
          50: "#E3F2FD",
          100: "#BBDEFB",
          200: "#90CAF9",
          300: "#64B5F6",
          400: "#42A5F5",
          500: "#1976D2",
          600: "#1565C0",
          700: "#1769AA",
          800: "#0D47A1",
          900: "#0A2A7A",
        },

        // Secondary — Pale Blue (Secondary Backgrounds)
        secondary: {
          DEFAULT: "#F2F8FC",
          dark: "#E1EEF7",
          50: "#FFFFFF",
          100: "#F2F8FC",
          200: "#E1EEF7",
          300: "#CDE3F2",
          400: "#B9D7EC",
          500: "#A5CBE6",
          600: "#80B4D9",
          700: "#5B9DCC",
          800: "#3686BF",
          900: "#23608C",
        },

        // Accent — Calm Teal (Supporting Actions)
        accent: {
          DEFAULT: "#2A9D8F",
          light: "#4ECDC4",
          dark: "#1B635A",
          emergency: "#B42318",
          "emergency-light": "#E53935",
          "emergency-dark": "#8B0000",
        },

        // Backgrounds — Soft, comfortable layers
        background: {
          DEFAULT: "#FFFFFF",
          surface: "#FFFFFF",
          secondary: "#F2F8FC",
          card: "#FFFFFF",
          dark: "#1769AA",
          "dark-surface": "#12304A", // Deep Navy for footer
        },

        // Text — Hierarchical contrast
        text: {
          primary: "#12304A", // Deep navy
          secondary: "#12304A", // Deep navy
          muted: "#476175",
          inverse: "#FFFFFF",
          "inverse-muted": "rgba(255, 255, 255, 0.7)",
        },

        // Borders & Dividers
        border: {
          DEFAULT: "#D9E6EE",
          light: "#F2F8FC",
          dark: "#B3CDDF",
        },

        // Functional / Status Colors
        status: {
          success: "#2E8B57", // Healthcare green
          "success-light": "#E8F5E9",
          warning: "#F59E0B",
          "warning-light": "#FEF3C7",
          error: "#B42318",
          "error-light": "#FEE2E2",
          info: "#1769AA",
          "info-light": "#F2F8FC",
        },
      },

      // ── Typography ──────────────────────────────────────────────────
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        inter: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        outfit: ["var(--font-outfit)", "system-ui", "sans-serif"],
        script: ["var(--font-dancing-script)", "cursive"],
      },

      fontSize: {
        // Fluid display sizes using clamp()
        "display-xl": [
          "clamp(3rem, 5vw + 1rem, 5rem)",
          { lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: "700" },
        ],
        display: [
          "clamp(2.5rem, 4vw + 1rem, 4rem)",
          { lineHeight: "1.15", letterSpacing: "-0.025em", fontWeight: "700" },
        ],
        "display-sm": [
          "clamp(2rem, 3vw + 0.5rem, 3rem)",
          { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        "heading-lg": [
          "clamp(1.5rem, 2vw + 0.5rem, 2.25rem)",
          { lineHeight: "1.3", letterSpacing: "-0.015em", fontWeight: "600" },
        ],
        heading: [
          "clamp(1.25rem, 1.5vw + 0.5rem, 1.75rem)",
          { lineHeight: "1.35", letterSpacing: "-0.01em", fontWeight: "600" },
        ],
        "heading-sm": [
          "1.125rem",
          { lineHeight: "1.4", letterSpacing: "-0.005em", fontWeight: "600" },
        ],
        lead: [
          "clamp(1.125rem, 1vw + 0.5rem, 1.25rem)",
          { lineHeight: "1.7", fontWeight: "400" },
        ],
      },

      // ── Spacing (Extended) ──────────────────────────────────────────
      spacing: {
        "13": "3.25rem",
        "15": "3.75rem",
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
        "section-sm": "3rem", // 48px  — mobile section padding
        "section-md": "5rem", // 80px  — tablet section padding
        "section-lg": "6rem", // 96px  — desktop section padding
        "section-xl": "8rem", // 128px — hero/CTA section padding
      },

      // ── Max Width ───────────────────────────────────────────────────
      maxWidth: {
        container: "80rem", // 1280px
        "container-lg": "90rem", // 1440px
        narrow: "42rem", // 672px  — for text-heavy content
        "section-heading": "48rem", // 768px — for section headings
      },

      // ── Border Radius ───────────────────────────────────────────────
      borderRadius: {
        "4xl": "2rem", // 32px
        "5xl": "2.5rem", // 40px 
        "6xl": "3rem", // 48px
      },

      // ── Elevation & Shadows (Multi-layered Premium) ─────────────────
      boxShadow: {
        // Subtle resting state
        card: "0 1px 3px rgba(10, 37, 64, 0.04), 0 6px 16px rgba(10, 37, 64, 0.06)",
        // Elevated hover state
        "card-hover":
          "0 4px 12px rgba(10, 37, 64, 0.06), 0 12px 28px rgba(10, 37, 64, 0.1)",
        // High elevation (modals, dropdowns, floating elements)
        elevated:
          "0 8px 24px rgba(10, 37, 64, 0.08), 0 24px 48px rgba(10, 37, 64, 0.12)",
        // Glow effect for CTA buttons
        "glow-teal":
          "0 0 20px rgba(226, 27, 34, 0.3), 0 0 60px rgba(226, 27, 34, 0.1)", // renamed to keep tailwind classes intact, but it's red glow now
        "glow-navy":
          "0 0 20px rgba(10, 42, 122, 0.3), 0 0 60px rgba(10, 42, 122, 0.1)",
        // Inner shadow for recessed elements
        "inner-soft": "inset 0 2px 4px rgba(10, 37, 64, 0.06)",
        // Navigation shadow
        nav: "0 1px 0 rgba(10, 37, 64, 0.05), 0 4px 16px rgba(10, 37, 64, 0.08)",
      },

      // ── Backdrop Blur ───────────────────────────────────────────────
      backdropBlur: {
        xs: "2px",
      },

      // ── Animations & Keyframes ──────────────────────────────────────
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-left": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-in-right": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-bottom": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in-down":
          "fade-in-down 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in-left":
          "fade-in-left 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in-right":
          "fade-in-right 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
        "slide-in-bottom":
          "slide-in-bottom 0.4s cubic-bezier(0.22, 1, 0.36, 1) both",
        shimmer: "shimmer 2s linear infinite",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
      },

      // ── Transition Timing ───────────────────────────────────────────
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.22, 1, 0.36, 1)",
        "in-out-expo": "cubic-bezier(0.87, 0, 0.13, 1)",
        spring: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      },

      transitionDuration: {
        "250": "250ms",
        "350": "350ms",
        "400": "400ms",
      },

      // ── Z-Index Scale ───────────────────────────────────────────────
      zIndex: {
        "60": "60",
        "70": "70",
        "80": "80",
        "90": "90",
        "100": "100",
        nav: "50",
        modal: "100",
        toast: "110",
      },

      // ── Background Image (Gradients) ────────────────────────────────
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-hero": "linear-gradient(135deg, #0A2A7A 0%, #1A40A0 50%, #0A2A7A 100%)",
        "gradient-teal": "linear-gradient(135deg, #1550D9 0%, #0F3BA3 100%)",
        "gradient-card": "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(10,42,122,0.02) 100%)",
        "gradient-overlay": "linear-gradient(to top, rgba(10,42,122,0.85) 0%, transparent 100%)",
        "gradient-section": "linear-gradient(180deg, #F9FAFB 0%, #F3F4F6 100%)",
      },
    },
  },

  plugins: [],
};

export default config;
