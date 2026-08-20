"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/Button";
import { X, Cookie } from "lucide-react";
import Link from "next/link";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem("cookie-consent");
    if (!hasConsented) {
      // Small delay so it doesn't pop up instantly on page load
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 sm:bottom-4 sm:left-auto sm:right-4 sm:max-w-sm pointer-events-none"
        >
          <div className="pointer-events-auto rounded-2xl border border-secondary/20 bg-white p-5 shadow-2xl">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2 text-primary">
                <Cookie size={20} className="text-secondary" />
                <h3 className="font-outfit font-bold">Cookie Policy</h3>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="text-text-muted hover:text-text-primary transition-colors"
                aria-label="Close cookie consent"
              >
                <X size={18} />
              </button>
            </div>
            <p className="mb-4 text-sm text-text-secondary">
              We use cookies to enhance your experience, ensure security, and analyze site traffic. 
              Read our <Link href="/legal" className="text-blue-600 hover:underline">Privacy Policy</Link> for more details.
            </p>
            <div className="flex gap-3">
              <Button
                variant="secondary"
                size="sm"
                className="w-full"
                onClick={handleAccept}
              >
                Accept All
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
