"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "motion/react";
import React from "react";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: "default" | "secondary" | "accent" | "emergency" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", isLoading, children, ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50 disabled:pointer-events-none disabled:opacity-50";
    
    const variants = {
      default: "bg-accent text-white hover:bg-accent-light shadow-md hover:shadow-lg",
      secondary: "bg-white border-2 border-primary text-primary hover:bg-primary/5", // Outline style per rules
      accent: "bg-accent text-white hover:bg-accent-light shadow-md hover:shadow-lg", // Teal accent
      emergency: "bg-accent-emergency text-white hover:bg-accent-emergency/90 uppercase tracking-wide",
      outline: "bg-white border-2 border-primary text-primary hover:bg-primary/5",
      ghost: "text-text-secondary hover:text-primary hover:bg-background-surface",
      link: "text-secondary underline-offset-4 hover:underline",
    };

    const sizes = {
      default: "h-12 px-6 py-3",
      sm: "h-9 px-4 py-2 text-sm",
      lg: "h-14 px-8 py-4 text-lg",
      icon: "h-10 w-10",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02, transition: { type: "spring", bounce: 0, duration: 0.3 } }}
        whileTap={{ scale: 0.97, transition: { type: "spring", bounce: 0, duration: 0.3 } }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && (
          <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        )}
        {children as React.ReactNode}
      </motion.button>
    );
  }
);
Button.displayName = "Button";
