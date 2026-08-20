import React from "react";
import { Star, Quote } from "lucide-react";
import { MotionCard } from "./Card";

export interface TestimonialProps {
  quote: string;
  author: string;
  role?: string;
  rating?: number;
  delay?: number;
}

export const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  role = "Patient",
  rating = 5,
  delay = 0,
}) => {
  return (
    <MotionCard
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="relative flex h-full flex-col justify-between"
      glass
    >
      <div className="absolute -top-4 right-6 text-secondary/20">
        <Quote size={64} className="rotate-180 fill-current" />
      </div>

      <div className="relative z-10 mb-8">
        <div className="mb-4 flex gap-1 text-status-warning">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={18}
              fill={i < rating ? "currentColor" : "transparent"}
              className={i < rating ? "" : "text-border"}
            />
          ))}
        </div>
        <blockquote className="text-lg leading-relaxed text-text-primary">
          &quot;{quote}&quot;
        </blockquote>
      </div>

      <div className="relative z-10 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary font-outfit font-bold text-white">
          {author.charAt(0)}
        </div>
        <div>
          <div className="font-outfit font-bold text-primary">{author}</div>
          <div className="text-sm text-text-secondary">{role}</div>
        </div>
      </div>
    </MotionCard>
  );
};
