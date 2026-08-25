import React from "react";
import { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/sections/CTABanner";
import { Card } from "@/components/ui/Card";
import { ShieldCheck, Heart, Award, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Complete Care Hospital",
  description: "Learn about Complete Care Hospital's mission, history, and our commitment to premium healthcare in Gwagwalada, Abuja.",
};

const VALUES = [
  {
    title: "Compassion",
    description: "Treating every patient with empathy, dignity, and respect.",
    icon: Heart,
  },
  {
    title: "Excellence",
    description: "Maintaining the highest standards in medical care and safety.",
    icon: Award,
  },
  {
    title: "Integrity",
    description: "Upholding honesty, transparency, and strong ethical principles.",
    icon: ShieldCheck,
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary pt-24 sm:pt-32 pb-12 sm:pb-20 text-center">
        <div className="section-container">
          <h1 className="mb-6 font-outfit text-3xl font-bold text-white sm:text-5xl md:text-6xl">
            About Complete Care Hospital
          </h1>

          <div className="block sm:hidden w-full h-56 relative mb-6 rounded-2xl overflow-hidden shadow-xl border border-secondary/20">
            <Image src="/facility.jpg" alt="Complete Care Facility" fill sizes="(max-width: 768px) 100vw, 100vw" className="object-cover" />
          </div>

          <p className="mx-auto max-w-4xl text-sm sm:text-lg text-white leading-relaxed text-justify sm:text-center">
            Founded in 2015 with a clear and compassionate vision, Complete Care was established to fill a critical need in our community: accessible, high-quality healthcare delivered with dignity and heart. What began as a modest outpatient clinic has since grown into a trusted, multi-specialty healthcare system, yet our founding principles remain unchanged. We exist to serve, heal, and uplift every individual who walks through our doors.
            <br /><br />
            At Complete Care, we believe that true wellness extends far beyond the absence of illness, encompassing physical vitality, emotional resilience, mental clarity, and social connectedness. That is why every aspect of our organization is designed with the whole person in mind, ensuring that each patient receives not just treatment, but a tailored, compassionate care plan that respects their unique circumstances, cultural background, and personal goals.
          </p>
          <p className="mx-auto max-w-4xl text-lg text-white leading-relaxed mt-4 font-semibold">
            Company Registration Number: 1016801
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-20 lg:py-32">
        <div className="section-container">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="bg-white border-secondary/20 p-5 sm:p-8 lg:p-10 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-secondary/50 hover:shadow-[0_10px_40px_rgba(42,157,143,0.25)] active:-translate-y-2 active:border-secondary/50 active:shadow-[0_10px_40px_rgba(42,157,143,0.25)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-20 text-secondary">
                <ShieldCheck size={120} className="-mr-8 -mt-8" />
              </div>
              <h3 className="mb-4 font-outfit text-2xl sm:text-3xl font-bold text-primary relative z-10">Our Mission</h3>
              <p className="text-text-secondary leading-relaxed text-lg relative z-10">
                To provide accessible, high-quality, and patient-centered healthcare services to the Gwagwalada community and beyond, utilizing advanced technology and a highly skilled medical team.
              </p>
            </Card>
            <Card className="bg-white border-secondary/20 p-5 sm:p-8 lg:p-10 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-secondary/50 hover:shadow-[0_10px_40px_rgba(42,157,143,0.25)] active:-translate-y-2 active:border-secondary/50 active:shadow-[0_10px_40px_rgba(42,157,143,0.25)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-20 text-secondary">
                <Award size={120} className="-mr-8 -mt-8" />
              </div>
              <h3 className="mb-4 font-outfit text-2xl sm:text-3xl font-bold text-primary relative z-10">Our Vision</h3>
              <p className="text-text-secondary leading-relaxed text-lg relative z-10">
                To be the premier healthcare institution in Nigeria, recognized for our commitment to clinical excellence, compassionate care, and continuous medical innovation.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-surface py-12 sm:py-20 lg:py-32">
        <div className="section-container">
          <SectionHeading title="Our Core Values" subtitle="The principles that guide our everyday actions." />
          <div className="grid gap-8 sm:grid-cols-3">
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={value.title} 
                  className="bg-white border-secondary/20 p-5 sm:p-8 text-center shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-secondary/50 hover:shadow-[0_10px_40px_rgba(42,157,143,0.25)] active:-translate-y-2 active:border-secondary/50 active:shadow-[0_10px_40px_rgba(42,157,143,0.25)]"
                >
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-md">
                    <Icon size={32} />
                  </div>
                  <h4 className="mb-3 font-outfit text-2xl font-bold text-primary">{value.title}</h4>
                  <p className="text-text-secondary leading-relaxed">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-12 sm:py-20 lg:py-32">
        <div className="section-container">
          <SectionHeading title="Our History" align="left" />
          <div className="mt-12 grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="space-y-8 sm:space-y-12 border-l-2 border-accent/30 pl-6 sm:pl-8 relative ml-4">
              <div className="relative">
                <div className="absolute -left-[37px] sm:-left-[41px] flex h-6 w-6 items-center justify-center rounded-full bg-accent text-white shadow-md">
                  <CheckCircle2 size={16} />
                </div>
                <h4 className="font-bold text-primary text-2xl">2015</h4>
                <p className="mt-3 text-text-secondary leading-relaxed text-lg max-w-3xl">Complete Care Hospital opened in Gwagwalada as a 20-bed facility with a mission to bring quality healthcare closer to the community.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[37px] sm:-left-[41px] flex h-6 w-6 items-center justify-center rounded-full bg-accent text-white shadow-md">
                  <CheckCircle2 size={16} />
                </div>
                <h4 className="font-bold text-primary text-2xl">2018</h4>
                <p className="mt-3 text-text-secondary leading-relaxed text-lg max-w-3xl">We expanded into a 100-bed hospital and launched a state-of-the-art diagnostic center, transforming into a regional healthcare destination with faster, more accurate testing capabilities.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[37px] sm:-left-[41px] flex h-6 w-6 items-center justify-center rounded-full bg-accent text-white shadow-md">
                  <CheckCircle2 size={16} />
                </div>
                <h4 className="font-bold text-primary text-2xl">2023</h4>
                <p className="mt-3 text-text-secondary leading-relaxed text-lg max-w-3xl">We unveiled our specialized Oncology and Cardiovascular centers, bringing world-class cancer care and advanced heart treatments to our community and eliminating the need for long-distance travel for critical services.</p>
              </div>
            </div>
            
            <div className="group relative h-[260px] sm:h-[380px] lg:h-[600px] w-full overflow-hidden rounded-2xl sm:rounded-[2rem] shadow-2xl">
              <Image
                src="/facility_two.jpg"
                alt="Complete Care Facility"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
