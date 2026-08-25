"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ShieldCheck, Clock, Users, Stethoscope } from "lucide-react";
import { Button } from "../ui/Button";
import { SectionHeading } from "../ui/SectionHeading";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const FEATURES = [
  {
    title: "State-of-the-Art Facilities",
    description:
      "Equipped with the latest medical technology and diagnostic imaging systems to ensure accurate and timely treatments.",
    icon: ShieldCheck,
  },
  {
    title: "Expert Specialists",
    description:
      "A dedicated team of over 50 board-certified specialists bringing decades of combined experience.",
    icon: Users,
  },
  {
    title: "24/7 Availability",
    description:
      "Medical emergencies can happen at any time. Our emergency department is fully staffed round-the-clock.",
    icon: Clock,
  },
  {
    title: "Patient-Centered Care",
    description:
      "We prioritize your comfort and well-being, offering personalized treatment plans tailored to you.",
    icon: Stethoscope,
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="bg-white py-24 lg:py-32 relative overflow-hidden">
      <div className="section-container relative z-10">
        <SectionHeading
          title="Why Choose Complete Care Hospital?"
          subtitle="We combine world-class medical expertise with compassionate care to provide the best possible outcomes for our patients."
          badge="Our Differentiators"
          align="left"
        />

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Column: Features */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col gap-10"
          >
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  variants={fadeInUp}
                  className="flex gap-6 group"
                >
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon size={28} />
                  </div>
                  <div>
                    <h3 className="mb-2 font-outfit text-2xl font-bold text-primary transition-colors group-hover:text-secondary-dark">
                      {feature.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed text-lg max-w-md">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
            {/* CTA Button under features */}
            <motion.div variants={fadeInUp} className="mt-4 flex justify-center lg:justify-start">
              <Link href="/about">
                <Button variant="default" className="rounded-full shadow-md px-8">
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Image */}
          <div className="relative hidden lg:flex h-full w-full items-center justify-end">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-[90%] aspect-[4/5]"
            >
              <div className="absolute inset-0 overflow-hidden rounded-[2rem] shadow-2xl">
                <Image
                  src="/facility.jpg"
                  alt="Hospital Facility"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
              
              {/* Floating Badge (ECO CERTIFIED equivalent) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
                className="absolute top-[60%] -left-16 z-20 flex h-32 w-32 items-center justify-center rounded-full bg-accent text-white shadow-lg border-[6px] border-white"
              >
                <div className="text-center">
                  <span className="block font-outfit text-3xl font-bold">10k+</span>
                  <span className="block text-xs font-semibold uppercase tracking-wider">Patients</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
