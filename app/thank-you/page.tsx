"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ThankYouPage() {
  return (
    <div className="flex flex-col">
      {/* ── Hero ── */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-primary">
        {/* Decorative background elements */}
        <div className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 h-80 w-80 rounded-full bg-primary-light/30 blur-3xl" />

        <div className="section-container relative z-10 text-center">
          {/* Animated success icon */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.15,
            }}
            className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-secondary/20"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.35,
              }}
            >
              <CheckCircle2 className="text-secondary" size={64} strokeWidth={1.5} />
            </motion.div>
          </motion.div>

          {/* Thank-you text */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-4 font-outfit text-4xl font-bold text-white sm:text-5xl md:text-6xl"
          >
            Thank You!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="mx-auto mb-4 max-w-xl text-lg leading-relaxed text-primary-200"
          >
            Your submission has been received successfully. Our team at Complete
            Care Hospital will review your information and get back to you
            shortly.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="mx-auto mb-10 max-w-md text-sm text-primary-300"
          >
            Expect a confirmation call or SMS within 24 hours. For urgent
            enquiries, please call our front desk directly.
          </motion.p>

          {/* CTA button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <Link href="/">
              <Button
                size="lg"
                variant="secondary"
                className="shadow-glow-teal px-8 text-base"
              >
                <ArrowLeft size={18} />
                Back to Homepage
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
