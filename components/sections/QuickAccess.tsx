"use client";

import React from "react";
import Link from "next/link";
import { UserPlus, CalendarHeart, MapPin, PhoneCall } from "lucide-react";
import { motion } from "motion/react";

const QUICK_LINKS = [
  {
    title: "Find a Doctor",
    description: "Expert specialists",
    icon: UserPlus,
    href: "/doctors",
  },
  {
    title: "Book Visit",
    description: "Schedule online",
    icon: CalendarHeart,
    href: "/appointment",
  },
  {
    title: "Locations",
    description: "Get directions",
    icon: MapPin,
    href: "/locations",
  },
  {
    title: "Emergency",
    description: "24/7 Assistance",
    icon: PhoneCall,
    href: "tel:+2348065395623",
  },
];

export const QuickAccess = () => {
  return (
    <section className="relative z-20 py-20 pb-32 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-5xl rounded-[2.5rem] bg-white p-4 shadow-elevated border border-border flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {QUICK_LINKS.map((link, index) => {
            const Icon = link.icon;
            return (
              <React.Fragment key={link.title}>
                <Link
                  href={link.href}
                  className="group flex flex-1 items-center gap-4 rounded-3xl p-4 transition-colors hover:bg-surface w-full md:w-auto"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                    <Icon size={24} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-outfit text-lg font-bold text-primary group-hover:text-primary-light">
                      {link.title}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {link.description}
                    </p>
                  </div>
                </Link>
                {index < QUICK_LINKS.length - 1 && (
                  <div className="hidden md:block h-12 w-px bg-border" />
                )}
              </React.Fragment>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
