"use client";

import React from "react";
import Image from "next/image";
import { MotionCard } from "./Card";
import { cardHover } from "@/lib/motion";
import { Stethoscope } from "lucide-react";
import { Badge } from "./Badge";

export interface DoctorCardProps {
  name: string;
  specialty: string;
  qualifications: string;
  imageUrl?: string;
  slug: string;
  delay?: number;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({
  name,
  specialty,
  qualifications,
  imageUrl,
  delay = 0,
}) => {
  return (
    <MotionCard
      whileHover={cardHover}
      whileTap={cardHover}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="group overflow-hidden p-0"
      hoverEffect
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-border">
            <Stethoscope size={64} strokeWidth={1} />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div className="p-5 sm:p-6 lg:p-8">
        <Badge variant="navy" className="mb-4">
          {specialty}
        </Badge>
        <h3 className="mb-2 font-outfit text-xl sm:text-2xl font-bold text-primary transition-colors group-hover:text-secondary">
          {name}
        </h3>
        <p className="text-sm text-text-secondary">{qualifications}</p>
      </div>
    </MotionCard>
  );
};
