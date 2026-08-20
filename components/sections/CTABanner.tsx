import React from "react";
import Link from "next/link";
import { Button } from "../ui/Button";
import { CalendarHeart } from "lucide-react";

export interface CTABannerProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export const CTABanner: React.FC<CTABannerProps> = ({
  title = "Ready to prioritize your health?",
  description = "Schedule a consultation with our specialists today and take the first step towards a healthier you.",
  buttonText = "Book an Appointment",
  buttonHref = "/appointment",
}) => {
  return (
    <section className="bg-background-dark-surface py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Decorative abstract shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-secondary/10 blur-3xl mix-blend-screen" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-primary/20 blur-3xl mix-blend-screen" />
      
      <div className="section-container relative z-10 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-outfit text-2xl sm:text-3xl font-bold text-white sm:text-4xl md:text-5xl mb-6">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-primary-200 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex justify-center">
            <Link href={buttonHref} className="w-full sm:w-auto">
              <Button size="lg" variant="accent" className="shadow-glow-teal text-base px-6 sm:px-8 h-12 sm:h-14 rounded-full w-full sm:w-auto">
                <CalendarHeart className="mr-2" size={20} />
                {buttonText}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
