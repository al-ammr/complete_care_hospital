import React from "react";
import { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CTABanner } from "@/components/sections/CTABanner";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Services | Complete Care Hospital",
  description: "Explore our wide range of medical specialties including Cardiology, Oncology, Orthopedics, Pediatrics, and 24/7 Emergency Care.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-primary pt-24 sm:pt-32 pb-12 sm:pb-20 text-center">
        <div className="section-container">
          <h1 className="mb-4 sm:mb-6 font-outfit text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Our Services
          </h1>
          <p className="mx-auto max-w-3xl text-base sm:text-lg text-white leading-relaxed">
            We deliver comprehensive, world-class healthcare that is thoughtfully tailored to your individual needs, your lifestyle, and your journey toward lasting wellness.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-20 lg:py-32">
        <div className="section-container">
          <SectionHeading
            title="Medical Specialties"
            subtitle="Our expert teams utilize advanced technology to deliver exceptional care across a wide range of medical disciplines."
          />
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                slug={service.slug}
                iconName={service.iconName}
                imageUrl={service.imageUrl}
                delay={index % 4} // Stagger by row for grid layout
              />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
