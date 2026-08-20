"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/Button";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  links: { name: string; href: string }[];
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose, links }) => {
  const pathname = usePathname();

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[90] bg-primary/20 backdrop-blur-sm lg:hidden"
          />

          {/* Sliding Menu */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-0 right-0 top-0 z-[100] flex w-[85vw] max-w-[400px] flex-col bg-white shadow-elevated lg:hidden"
          >
            <div className="flex h-16 sm:h-20 items-center justify-between border-b border-border px-4 sm:px-6">
              <Link href="/" className="flex items-center gap-2" onClick={onClose}>
                <Image src="/logo.png" alt="Complete Care Hospital Logo" width={150} height={32} className="h-8 w-auto object-contain" />
              </Link>
              <button
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-md text-text-secondary hover:bg-surface"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-5 sm:px-6 py-5 sm:py-8">
              <ul className="flex flex-col gap-4 sm:gap-6">
                {links.map((link) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === link.href
                      : pathname.startsWith(link.href);

                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className={cn(
                          "block text-lg font-medium transition-colors",
                          isActive ? "text-secondary" : "text-text-primary hover:text-secondary"
                        )}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-6 sm:mt-12 border-t border-border pt-5 sm:pt-8">
                <p className="mb-4 text-sm font-semibold text-text-secondary uppercase tracking-wider">
                  Emergency
                </p>
                <a href="tel:+2348065395623" className="block text-xl font-bold text-accent-emergency">
                  +234 806 539 5623
                </a>
              </div>
            </nav>

            <div className="border-t border-border p-4 sm:p-6">
              <Link href="/appointment" onClick={onClose} className="block w-full">
                <Button className="w-full">Book Appointment</Button>
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
