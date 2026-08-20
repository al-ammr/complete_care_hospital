import { cn } from "@/lib/utils";
import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "teal" | "navy" | "emergency" | "success" | "warning";
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    const variants = {
      default: "bg-surface text-text-secondary border border-border",
      teal: "bg-secondary/10 text-secondary-dark border border-secondary/20",
      navy: "bg-primary/10 text-primary border border-primary/20",
      emergency: "bg-accent-emergency/10 text-accent-emergency border border-accent-emergency/20",
      success: "bg-status-success/10 text-status-success border border-status-success/20",
      warning: "bg-status-warning/10 text-status-warning border border-status-warning/20",
    };

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold tracking-wide",
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);
Badge.displayName = "Badge";
