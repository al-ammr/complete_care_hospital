"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion, HTMLMotionProps } from "motion/react";

export interface CardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  hoverEffect?: boolean;
  glass?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverEffect = true, glass = false, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "rounded-4xl border border-border bg-background-card p-8 shadow-card transition-colors duration-300 hover:border-blue-300",
          glass && "bg-white/80 backdrop-blur-xl border-white/20",
          className
        )}
        whileHover={
          hoverEffect
            ? {
                y: -8,
                boxShadow: "0 10px 40px rgba(37, 99, 235, 0.25)",
                transition: { type: "spring", bounce: 0.1, duration: 0.4 },
              }
            : undefined
        }
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
Card.displayName = "Card";

export const MotionCard = motion.create(Card);
