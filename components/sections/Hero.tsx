"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "../ui/Button";
import { staggerItem, staggerContainer } from "@/lib/motion";

export const Hero = () => {
  return (
    <section className="relative flex min-h-[100svh] sm:min-h-[95vh] items-center overflow-hidden bg-background-secondary pb-36 sm:pb-48 pt-28 sm:pt-40">
      {/* Solid background base */}
      <div className="absolute inset-0 z-0 bg-background-secondary" />

      {/* Right-aligned Doctor Image */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="absolute top-0 right-0 bottom-0 w-[60%] z-0 hidden lg:block pointer-events-none"
      >
        <Image
          src="/doctor.jpg"
          alt="Doctor"
          fill
          priority
          unoptimized
          className="object-cover object-center"
        />
        {/* Soft gradient fade on the left edge of images to blend with the text area */}
        <div className="absolute inset-0 bg-gradient-to-r from-background-secondary via-transparent to-transparent z-10" />
      </motion.div>

      {/* Content wrapper pushed to the left */}
      <div className="section-container relative z-10 w-full flex justify-start">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col justify-center max-w-2xl mb-24"
        >
          <motion.div variants={staggerItem} className="mb-6">
            <span className="inline-block rounded-full bg-accent px-4 py-1.5 font-semibold tracking-wide text-white shadow-sm border border-accent/20 backdrop-blur-sm">
              Elite Healthcare in Abuja
            </span>
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="mb-4 font-outfit text-3xl font-bold leading-[1.1] text-text-primary sm:text-5xl md:text-6xl lg:text-7xl xl:text-[4.5rem]"
          >
            World-Class Care. <br />
            <span className="font-script text-primary font-normal text-4xl sm:text-6xl md:text-7xl lg:text-8xl italic">
              Extraordinary 
            </span>
            {" "}Outcomes.
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mb-8 sm:mb-10 mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed text-text-muted md:text-xl max-w-xl"
          >
            Experience the pinnacle of modern medicine right here in the heart of Abuja. We seamlessly combine groundbreaking medical technology with profound, patient-first empathy to deliver healthcare that doesn&apos;t just treat, it transforms.
            <br /><br />
            From our 24/7 emergency care to our dedicated team of elite specialists, every aspect of our state-of-the-art facility is designed around your complete well-being.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="flex flex-col items-start justify-start gap-5 sm:flex-row"
          >
            <Link href="/appointment" className="w-full sm:w-auto">
              <Button size="lg" className="w-full rounded-full px-8 text-lg font-semibold shadow-md">
                Book Consultation
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Stat Bar matching the Teal bar in reference */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 200, damping: 25 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 w-[95%] sm:w-[90%] max-w-5xl z-20"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 rounded-2xl sm:rounded-[2rem] bg-accent px-6 sm:px-10 py-4 sm:py-6 shadow-elevated">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div>
              <p className="font-outfit text-xl sm:text-2xl font-bold text-white">24/7</p>
              <p className="text-sm font-medium text-white/80">Emergency Care</p>
            </div>
          </div>
          <div className="hidden sm:block h-12 w-px bg-white/20" />
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <div>
              <p className="font-outfit text-xl sm:text-2xl font-bold text-white">50+</p>
              <p className="text-sm font-medium text-white/80">Elite Specialists</p>
            </div>
          </div>
          <div className="hidden sm:block h-12 w-px bg-white/20" />
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <div>
              <p className="font-outfit text-xl sm:text-2xl font-bold text-white">100%</p>
              <p className="text-sm font-medium text-white/80">Patient Focus</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
