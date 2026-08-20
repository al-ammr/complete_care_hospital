import React from "react";
import { Phone } from "lucide-react";
import Link from "next/link";

export const EmergencyBanner = () => {
  return (
    <div className="bg-accent-emergency px-4 py-2 text-center sm:px-6 lg:px-8">
      <Link
        href="tel:+2348065395623"
        className="inline-flex items-center justify-center gap-2 text-sm font-semibold tracking-wide text-white transition-opacity hover:opacity-90 sm:text-base"
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
          <Phone size={14} className="animate-pulse" />
        </span>
        24/7 Emergency Care: +234 806 539 5623
      </Link>
    </div>
  );
};
