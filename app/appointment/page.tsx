import React from "react";
import { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import dynamic from "next/dynamic";
const AppointmentForm = dynamic(() => import("@/components/forms/AppointmentForm").then(mod => mod.AppointmentForm), {
  loading: () => <div className="animate-pulse bg-surface h-96 w-full rounded-2xl"></div>
});
import { CTABanner } from "@/components/sections/CTABanner";
import { CalendarDays, Clock, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Book an Appointment | Complete Care Hospital",
  description:
    "Schedule your appointment at Complete Care Hospital, Gwagwalada, Abuja. Choose from 12+ specialist departments and book at a time that suits you.",
  keywords: [
    "book appointment",
    "hospital appointment",
    "Gwagwalada",
    "Abuja",
    "Nigeria",
    "Complete Care Hospital",
  ],
};

const BENEFITS = [
  {
    icon: CalendarDays,
    title: "Flexible Scheduling",
    description: "Choose a date and time that works for your schedule.",
  },
  {
    icon: Clock,
    title: "Minimal Wait Times",
    description: "Pre-booked appointments ensure you are seen promptly.",
  },
  {
    icon: ShieldCheck,
    title: "Confirmed Bookings",
    description:
      "Receive SMS and email confirmation within minutes of booking.",
  },
];

type PageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function AppointmentPage({ searchParams }: PageProps) {
  const resolvedParams = await searchParams;
  const prefillService = typeof resolvedParams.service === "string" ? resolvedParams.service : "";

  return (
    <div className="flex flex-col">
      {/* ── Hero Section ── */}
      <section className="bg-primary pt-24 sm:pt-32 pb-12 sm:pb-20 text-center">
        <div className="section-container">
          <h1 className="mb-4 sm:mb-6 font-outfit text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Book an Appointment
          </h1>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-white">
            Take the first step towards better health. Schedule a consultation
            with one of our specialist doctors at Complete Care Hospital,
            Gwagwalada, Abuja.
          </p>
        </div>
      </section>

      {/* ── Benefits Strip ── */}
      <section className="border-b border-border bg-background-surface py-12">
        <div className="section-container">
          <div className="grid gap-8 sm:grid-cols-3">
            {BENEFITS.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="rounded-2xl bg-white p-4 sm:p-6 shadow-md border border-secondary/10 flex items-start gap-3 sm:gap-4 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(37,99,235,0.3)] hover:border-blue-300"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/30">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-outfit text-lg font-semibold text-primary">
                      {benefit.title}
                    </h3>
                    <p className="mt-1 text-sm text-text-secondary">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Appointment Form Section ── */}
      <section className="py-12 sm:py-20 lg:py-32">
        <div className="section-container">
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              title="Schedule Your Visit"
              subtitle="Fill in the form below and our team will confirm your appointment via phone or email within 24 hours."
              badge="Appointment"
            />
            <AppointmentForm defaultService={prefillService} />
          </div>
        </div>
      </section>

      {/* ── Important Info ── */}
      <section className="bg-background-surface py-16">
        <div className="section-container">
          <div className="mx-auto max-w-3xl rounded-2xl border border-secondary/10 bg-white p-5 sm:p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(37,99,235,0.2)] hover:border-blue-300">
            <h3 className="mb-4 font-outfit text-xl font-bold text-primary">
              Important Information
            </h3>
            <ul className="space-y-3 text-text-secondary">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
                Appointments are available Monday to Friday, 8:00 AM – 4:00 PM,
                and Saturdays 9:00 AM – 1:00 PM.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
                Please arrive 15 minutes before your scheduled time with a valid
                ID and any previous medical records.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
                For emergency cases, please call our 24/7 emergency line at{" "}
                <strong className="text-accent-emergency">
                  +234 800 CARE 911
                </strong>{" "}
                or visit our Emergency Care unit directly.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
                We accept all major HMO plans including NHIS, Leadway, Hygeia,
                and AXA Mansard.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
