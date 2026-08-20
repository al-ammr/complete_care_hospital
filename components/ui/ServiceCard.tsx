"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { motion } from "motion/react";
import { cardHover } from "@/lib/motion";
import { cn } from "@/lib/utils";

export interface ServiceCardProps {
  title: string;
  description: string;
  slug: string;
  iconName: string;
  imageUrl?: string;
  delay?: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  slug,
  iconName,
  imageUrl,
  delay = 0,
}) => {
  // Dynamically resolve the lucide icon
  const Icon = (LucideIcons as Record<string, React.ElementType>)[iconName] || LucideIcons.Activity;

  return (
    <motion.div
      whileHover={cardHover}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl sm:rounded-4xl",
        "border border-border bg-background-card shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover"
      )}
    >
      {/* Top Image Half */}
      <div className="relative h-44 sm:h-48 w-full shrink-0 overflow-hidden bg-surface">
        <Image
          src={imageUrl || "/hospital_facility_1786558559005.jpg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-primary/10 transition-opacity duration-300 group-hover:opacity-0" />
      </div>

      {/* Overlapping Icon */}
      <div className="absolute left-6 top-36 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-lg transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-110">
        <Icon size={24} strokeWidth={2.5} />
      </div>

      {/* Content Half */}
      <div className="flex flex-1 flex-col p-5 pt-9 sm:p-6 sm:pt-10">
        <h3 className="mb-3 font-outfit text-xl font-bold text-text-primary transition-colors group-hover:text-primary">
          {title}
        </h3>
        <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-text-secondary text-pretty">
          {description}
        </p>

        <div className="mt-auto">
          <Link
            href={`/services/${slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-light"
          >
            Learn More
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
