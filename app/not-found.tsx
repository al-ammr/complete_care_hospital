"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { FileQuestion, Home } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col">
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-primary">
        {/* Decorative blurred shapes */}
        <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-secondary/8 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-primary-light/20 blur-3xl" />

        <div className="section-container relative z-10 text-center">
          {/* Large 404 number */}
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 14,
              delay: 0.1,
            }}
            className="mb-4 font-outfit text-[8rem] font-extrabold leading-none tracking-tighter text-secondary/20 sm:text-[10rem] md:text-[12rem]"
          >
            404
          </motion.p>

          {/* Illustration icon */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto -mt-16 mb-8 flex h-24 w-24 items-center justify-center rounded-2xl bg-secondary/15"
          >
            <FileQuestion
              className="text-secondary"
              size={48}
              strokeWidth={1.5}
            />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mb-4 font-outfit text-3xl font-bold text-white sm:text-4xl md:text-5xl"
          >
            Page Not Found
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mx-auto mb-10 max-w-md text-lg leading-relaxed text-primary-200"
          >
            Sorry, the page you&rsquo;re looking for doesn&rsquo;t exist or may
            have been moved. Let&rsquo;s get you back on track.
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
          >
            <Link href="/">
              <Button
                size="lg"
                variant="secondary"
                className="shadow-glow-teal px-8 text-base"
              >
                <Home size={18} />
                Return to Homepage
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
