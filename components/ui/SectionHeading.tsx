"use client";

import { cn } from "@/lib/utils";

import React from "react";
import { motion } from "motion/react";
import { fadeInUp } from "@/lib/motion";

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: "left" | "center" | "right";
  animated?: boolean;
  inverse?: boolean;
}

export const SectionHeading = React.forwardRef<HTMLDivElement, SectionHeadingProps>(
  ({ className, title, subtitle, badge, align = "center", animated = true, inverse = false, ...props }, ref) => {
    
    const alignmentClasses = {
      left: "text-left items-start",
      center: "text-center items-center mx-auto",
      right: "text-right items-end ml-auto",
    };

    const content = (
      <div
        ref={ref}
        className={cn("mb-12 flex max-w-3xl flex-col lg:mb-16", alignmentClasses[align], className)}
        {...props}
      >
        {badge && (
          <span className={cn(
            "mb-4 inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold tracking-wide",
            inverse ? "bg-white/10 text-secondary border border-white/20" : "bg-accent text-white shadow-sm"
          )}>
            {badge}
          </span>
        )}
        <h2 className={cn(
          "font-outfit text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance",
          inverse ? "text-white" : "text-primary"
        )}>
          {title}
        </h2>
        {subtitle && (
          <p className={cn(
            "mt-4 text-lg leading-relaxed sm:text-xl text-pretty max-w-2xl",
            inverse ? "text-primary-50" : "text-text-secondary"
          )}>
            {subtitle}
          </p>
        )}
        {align === "center" && (
          <div className="mt-6 h-1 w-16 rounded-full bg-secondary" />
        )}
        {align === "left" && (
          <div className="mt-6 h-1 w-16 rounded-full bg-secondary" />
        )}
      </div>
    );

    if (animated) {
      return (
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          {content}
        </motion.div>
      );
    }

    return content;
  }
);
SectionHeading.displayName = "SectionHeading";
