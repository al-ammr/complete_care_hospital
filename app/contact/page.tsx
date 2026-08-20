import React from "react";
import { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";
import { CTABanner } from "@/components/sections/CTABanner";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Ambulance,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Complete Care Hospital",
  description:
    "Get in touch with Complete Care Hospital in Gwagwalada, Abuja. Call, email, or visit us for enquiries, appointments, and emergency care.",
  keywords: [
    "contact hospital",
    "hospital phone number",
    "Gwagwalada hospital",
    "Abuja",
    "Nigeria",
    "Complete Care Hospital",
  ],
};

const CONTACT_DETAILS = [
  {
    icon: Phone,
    title: "Phone",
    lines: ["+234 806 539 5623"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["completecarehospital11@gmail.com"],
  },
  {
    icon: MapPin,
    title: "Address",
    lines: [
      "Plot 45, Hospital Road",
      "Gwagwalada, FCT",
      "Abuja, Nigeria",
    ],
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: [
      "Mon – Fri: 8:00 AM – 6:00 PM",
      "Saturday: 9:00 AM – 1:00 PM",
      "Sunday: Closed (Emergency Only)",
    ],
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* ── Hero Section ── */}
      <section className="bg-primary pt-24 sm:pt-32 pb-12 sm:pb-20 text-center">
        <div className="section-container">
          <h1 className="mb-4 sm:mb-6 font-outfit text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Contact Us
          </h1>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-white">
            Have a question, need information, or want to give feedback? We&apos;re
            here to help. Reach out to Complete Care Hospital today.
          </p>
        </div>
      </section>

      {/* ── Contact Info Cards ── */}
      <section className="border-b border-border bg-background-surface py-16">
        <div className="section-container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CONTACT_DETAILS.map((detail) => {
              const Icon = detail.icon;
              return (
                <div
                  key={detail.title}
                  className="rounded-2xl bg-white p-5 sm:p-8 shadow-md border border-secondary/10 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(37,99,235,0.3)] hover:border-blue-300"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/30">
                    <Icon size={28} />
                  </div>
                  <h3 className="mb-2 font-outfit text-lg font-semibold text-primary">
                    {detail.title}
                  </h3>
                  <div className="space-y-1 text-sm text-text-secondary">
                    {detail.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Emergency Banner ── */}
      <section className="bg-accent-emergency/5 py-10">
        <div className="section-container">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent-emergency/10 text-accent-emergency">
              <Ambulance size={28} />
            </div>
            <div>
              <h3 className="font-outfit text-xl font-bold text-accent-emergency">
                24/7 Emergency Line
              </h3>
              <p className="mt-1 text-text-secondary">
                For life-threatening emergencies, call immediately:{" "}
                <strong className="text-accent-emergency">
                  +234 800 CARE 911
                </strong>{" "}
                or{" "}
                <strong className="text-accent-emergency">
                  +234 (0) 812 911 0000
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact Form Section ── */}
      <section className="py-12 sm:py-20 lg:py-32">
        <div className="section-container">
          <div className="grid items-start gap-16 lg:grid-cols-5">
            {/* Left column — Additional info */}
            <div className="lg:col-span-2">
              <SectionHeading
                title="Send Us a Message"
                subtitle="Fill out the form and our patient relations team will respond within 24 hours."
                badge="Get in Touch"
                align="left"
              />

              <div className="mt-8 space-y-6">
                <div className="rounded-xl border border-secondary/20 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(37,99,235,0.2)] hover:border-blue-300 p-6">
                  <h4 className="mb-2 font-outfit font-semibold text-primary">
                    Before You Write
                  </h4>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                      For appointment bookings, use our{" "}
                      <a
                        href="/appointment"
                        className="font-medium text-secondary underline-offset-2 hover:underline"
                      >
                        online booking form
                      </a>
                      .
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                      For medical emergencies, please call our emergency line
                      directly.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                      We typically respond within 1 business day.
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl border border-secondary/20 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(37,99,235,0.2)] hover:border-blue-300 p-6">
                  <h4 className="mb-2 font-outfit font-semibold text-primary">
                    Contact us on WhatsApp
                  </h4>
                  <p className="mb-4 text-sm text-text-secondary">
                    Prefer instant messaging? Reach out to us directly on WhatsApp.
                  </p>
                  <a
                    href="https://wa.me/2348065395623?text=Hello,%20My%20name%20is%20__________,%20I%20need%20to%20make%20a%20consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-2 font-bold text-white shadow-md transition-all hover:-translate-y-1 hover:bg-[#20b858] hover:shadow-lg hover:shadow-[#25D366]/30"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    +234 806 539 5623
                  </a>
                </div>
              </div>
            </div>

            {/* Right column — Form & Map */}
            <div className="lg:col-span-3 space-y-8">
              <ContactForm />
              
              <div className="overflow-hidden rounded-xl border border-border shadow-md w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31528.610789385033!2d7.063!3d8.9433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e7276eb1c2c47%3A0x87a0b6c4a8b1c5e3!2sGwagwalada%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Complete Care Hospital Location - Gwagwalada, Abuja"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
