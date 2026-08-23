"use client";

import React, { useState, useMemo } from "react";
import { motion } from "motion/react";
import { DoctorCard } from "@/components/ui/DoctorCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/sections/CTABanner";
import { doctors } from "@/lib/data";

import { Search, Filter, Users } from "lucide-react";
import Image from "next/image";

// Note: metadata must be set via a layout.tsx or generateMetadata in a parent
// server component since this is 'use client'. We handle SEO via <head> tags.

const SPECIALTIES = Array.from(new Set(doctors.map((d) => d.specialty))).sort();

export default function DoctorsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSpecialty, setActiveSpecialty] = useState("All");

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      const matchesSearch =
        doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesSpecialty =
        activeSpecialty === "All" || doctor.specialty === activeSpecialty;
      return matchesSearch && matchesSpecialty;
    });
  }, [searchQuery, activeSpecialty]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalOrganization",
            name: "Complete Care Hospital Doctors",
            member: doctors.map((doc) => ({
              "@type": "Physician",
              name: doc.name,
              medicalSpecialty: doc.specialty,
            })),
          }),
        }}
      />

      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="bg-primary pt-24 sm:pt-32 pb-12 sm:pb-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-80 h-80 rounded-full bg-primary-light/30 blur-3xl" />
          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary/15 px-4 py-1.5 text-sm font-semibold text-secondary-200">
                <Users size={16} />
                Our Medical Team
              </span>
              <h1 className="mb-6 font-outfit text-3xl font-bold text-white sm:text-5xl md:text-6xl">
                Meet Our Doctors
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-white">
                Our team of highly skilled and compassionate physicians is
                dedicated to providing exceptional care. Find the right specialist
                for your needs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-12 sm:py-20 lg:py-24 bg-white border-b border-border">
          <div className="section-container">
            <div className="grid gap-12 lg:grid-cols-12 items-start lg:items-center">
              {/* Image Column */}
              <div className="lg:col-span-5 relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/founder1.jpg" 
                  alt="Dr. Josiah Onuche" 
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Content Column */}
              <div className="lg:col-span-7">
                <span className="mb-4 inline-block font-semibold text-primary tracking-wider uppercase text-sm">
                  Meet Our Founder
                </span>
                <h2 className="mb-2 font-outfit text-3xl font-bold text-primary sm:text-4xl">
                  Dr. Josiah Onuche
                </h2>
                <p className="mb-8 text-lg font-medium text-primary/70 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <span>Founder, Chief Medical Director.</span>
                  <a href="https://www.linkedin.com/in/josiah_joeonuche" target="_blank" rel="noopener noreferrer" className="mt-2 sm:mt-0 text-secondary hover:underline text-base flex items-center gap-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                    LinkedIn Profile
                  </a>
                </p>
                <div className="prose prose-sm sm:prose-lg text-text-secondary max-w-none text-justify sm:text-left space-y-6">
                  <p>
                    Dr. Josiah Onuche is the visionary founder and Chief Medical Director of Complete Care Hospital. With an unwavering commitment to bridging the gap between quality healthcare and underserved communities, Dr. Onuche established the hospital in 2015 with a modest 20-bed facility in Gwagwalada. His leadership and foresight have since transformed it into a leading multi-specialty healthcare institution serving thousands of families across the region.
                  </p>
                  <p>
                    A highly skilled medical professional with extensive experience in clinical practice and hospital administration, Dr. Onuche is driven by a deep-seated belief that every individual deserves access to compassionate, world-class care regardless of their background or circumstances. Under his guidance, Complete Care has expanded into a 100-bed hospital, launched a state-of-the-art diagnostic center, and established specialized Oncology and Cardiovascular centers, all while maintaining the personal touch and patient-centered values that define the institution.
                  </p>
                  <p>
                    Beyond his clinical and administrative roles, Dr. Onuche is a passionate advocate for community health, actively partnering with local organizations to address social determinants of health such as nutrition, education, and preventive care. His vision for Complete Care extends far beyond the hospital walls, aiming to build a healthier, more equitable future for all. Through his tireless dedication, innovative mindset, and compassionate leadership, Dr. Josiah Onuche continues to inspire his team and uplift the communities he serves.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search & Filter Section */}
        <section className="bg-background-surface py-4 sm:py-8 border-b border-border sticky top-14 sm:top-16 z-30">
          <div className="section-container">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              {/* Search Input */}
              <div className="relative flex-1 max-w-md">
                <Search
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
                />
                <input
                  type="text"
                  placeholder="Search by name or specialty..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input pl-12"
                  aria-label="Search doctors"
                />
              </div>

              {/* Specialty Filters */}
              <div className="flex flex-wrap items-center gap-2">
                <Filter size={18} className="text-text-muted mr-1 hidden sm:block" />
                <button
                  onClick={() => setActiveSpecialty("All")}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    activeSpecialty === "All"
                      ? "bg-primary text-white shadow-md"
                      : "bg-white text-text-secondary border border-border hover:border-secondary/50 hover:text-primary"
                  }`}
                >
                  All Specialties
                </button>
                {SPECIALTIES.map((specialty) => (
                  <button
                    key={specialty}
                    onClick={() => setActiveSpecialty(specialty)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                      activeSpecialty === specialty
                        ? "bg-primary text-white shadow-md"
                        : "bg-white text-text-secondary border border-border hover:border-secondary/50 hover:text-primary"
                    }`}
                  >
                    {specialty}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Doctors Grid */}
        <section className="py-12 sm:py-20 lg:py-28">
          <div className="section-container">
            <SectionHeading
              title="Our Specialists"
              subtitle={`Showing ${filteredDoctors.length} of ${doctors.length} doctors`}
              badge="Expert Care"
            />

            {filteredDoctors.length > 0 ? (
              <div
                className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3"
              >
                {filteredDoctors.map((doctor, index) => (
                  <DoctorCard
                    key={doctor.id}
                    name={doctor.name}
                    specialty={doctor.specialty}
                    qualifications={doctor.qualifications}
                    imageUrl={doctor.imageUrl}
                    slug={doctor.slug}
                    delay={index}
                  />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-background-surface text-text-muted">
                  <Search size={40} strokeWidth={1.5} />
                </div>
                <h3 className="font-outfit text-2xl font-bold text-primary mb-3">
                  No Doctors Found
                </h3>
                <p className="text-text-secondary max-w-md mx-auto">
                  No doctors match your current search criteria. Try adjusting your
                  search or clearing the filters.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveSpecialty("All");
                  }}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium transition-all duration-250 bg-secondary text-white shadow-sm hover:bg-secondary-dark"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        <CTABanner
          title="Need help choosing a specialist?"
          description="Our patient coordinators can help match you with the right doctor based on your specific health needs."
          buttonText="Contact Us"
          buttonHref="/locations"
        />
      </div>
    </>
  );
}
