"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionProps {
  items: {
    title: string;
    content: React.ReactNode;
  }[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ items, className }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="overflow-hidden rounded-xl border border-border bg-white transition-colors hover:border-secondary/50"
          >
            <button
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between p-6 text-left focus:outline-none focus-visible:bg-surface"
              aria-expanded={isOpen}
            >
              <span className="font-outfit text-lg font-semibold text-primary">
                {item.title}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface text-secondary-dark"
              >
                <ChevronDown size={20} />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0 },
                  }}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  <div className="px-6 pb-6 pt-0 text-text-secondary leading-relaxed">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
