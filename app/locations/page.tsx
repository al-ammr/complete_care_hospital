import React from "react";
import { Metadata } from "next";
import { CTABanner } from "@/components/sections/CTABanner";
import { Card } from "@/components/ui/Card";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Globe,
  Navigation,
  Ambulance,
  CalendarDays,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Locations & Contact | Complete Care Hospital",
  description:
    "Find Complete Care Hospital in Phase 1, Opposite ABC Bakery, Police Barrack Gate, Gwagwalada, Abuja. View opening hours, contact details, and directions.",
};

const OPENING_HOURS = [
  { day: "Monday – Friday", hours: "8:00 AM – 6:00 PM", note: "" },
  { day: "Saturday", hours: "9:00 AM – 4:00 PM", note: "" },
  { day: "Sunday", hours: "10:00 AM – 2:00 PM", note: "Emergencies only after 2 PM" },
  { day: "Public Holidays", hours: "10:00 AM – 2:00 PM", note: "Emergencies only after 2 PM" },
];

const CONTACT_DETAILS = [
  {
    icon: Phone,
    label: "Phone",
    value: "+234 (0) 809 123 4567",
    href: "tel:+2348091234567",
  },
  {
    icon: Phone,
    label: "Emergency Hotline",
    value: "+234 (0) 809 765 4321",
    href: "tel:+2348097654321",
  },
  {
    icon: Mail,
    label: "Email",
    value: "completecarehospital11@gmail.com",
    href: "mailto:completecarehospital11@gmail.com",
  },
  {
    icon: Globe,
    label: "Website",
    value: "www.completecarehospital.ng",
    href: "https://www.completecarehospital.ng",
  },
];

export default function LocationsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary pt-24 sm:pt-32 pb-12 sm:pb-20 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-80 h-80 rounded-full bg-primary-light/30 blur-3xl" />
        <div className="section-container relative z-10">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary/15 px-4 py-1.5 text-sm font-semibold text-secondary-200">
            <MapPin size={16} />
            Find Us
          </span>
          <h1 className="mb-6 font-outfit text-3xl font-bold text-white sm:text-5xl md:text-6xl">
            Location &amp; Contact
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-200">
            Visit us at our Gwagwalada, Abuja facility. We&apos;re conveniently
            located and ready to serve you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 lg:py-28">
        <div className="section-container">
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
            {/* Left Column — Details */}
            <div className="space-y-8">
              {/* Address Card */}
              <Card className="bg-surface/50 border-secondary/20">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h2 className="font-outfit text-2xl font-bold text-primary mb-1">
                      Complete Care Hospital
                    </h2>
                    <p className="text-text-secondary font-medium">Main Campus</p>
                  </div>
                </div>

                <div className="space-y-4 text-text-secondary">
                  <div className="flex items-start gap-3">
                    <Navigation size={18} className="text-secondary shrink-0 mt-1" />
                    <p className="leading-relaxed">
                      Phase 1, Opposite ABC Bakery,
                      <br />
                      Police Barrack Gate, Gwagwalada,
                      <br />
                      Federal Capital Territory (FCT),
                      <br />
                      Abuja, Nigeria
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <a
                    href="https://maps.google.com/?q=Gwagwalada+Abuja"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-250 hover:bg-secondary-dark"
                  >
                    <Navigation size={16} />
                    Get Directions
                  </a>
                </div>
              </Card>

              {/* Contact Details */}
              <Card className="bg-surface/50">
                <h3 className="font-outfit text-xl font-bold text-primary mb-6">
                  Contact Information
                </h3>
                <div className="space-y-5">
                  {CONTACT_DETAILS.map((contact) => {
                    const Icon = contact.icon;
                    return (
                      <div key={contact.label} className="flex items-center gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Icon size={20} />
                        </div>
                        <div>
                          <p className="text-sm text-text-muted">{contact.label}</p>
                          <a
                            href={contact.href}
                            className="font-medium text-primary hover:text-secondary-dark transition-colors"
                          >
                            {contact.value}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>

              {/* Emergency Notice */}
              <div className="rounded-xl border-2 border-accent-emergency/30 bg-accent-emergency/5 p-4 sm:p-6 flex items-start gap-4">
                <Ambulance size={28} className="text-accent-emergency shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-outfit text-lg font-bold text-accent-emergency mb-1">
                    Emergency Services — 24/7
                  </h3>
                  <p className="text-text-secondary mb-3">
                    Our Emergency Department is open around the clock, every day of
                    the year.
                  </p>
                  <a
                    href="tel:+2348097654321"
                    className="inline-flex items-center gap-2 font-bold text-accent-emergency hover:underline"
                  >
                    <Phone size={16} />
                    Call: +234 (0) 809 765 4321
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column — Map & Hours */}
            <div className="space-y-8">
              {/* Google Maps Embed */}
              <div className="overflow-hidden rounded-2xl border border-border shadow-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31528.610789385033!2d7.063!3d8.9433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e7276eb1c2c47%3A0x87a0b6c4a8b1c5e3!2sGwagwalada%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Complete Care Hospital Location - Gwagwalada, Abuja"
                  className="w-full h-[280px] sm:h-[350px] lg:h-[400px]"
                />
              </div>

              {/* Opening Hours */}
              <Card className="bg-surface/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                    <Clock size={24} />
                  </div>
                  <h3 className="font-outfit text-xl font-bold text-primary">
                    Opening Hours
                  </h3>
                </div>

                <div className="overflow-hidden rounded-lg border border-border">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-primary/5">
                        <th className="px-4 py-3 text-left font-semibold text-primary">
                          Day
                        </th>
                        <th className="px-4 py-3 text-left font-semibold text-primary">
                          Hours (WAT)
                        </th>
                        <th className="px-4 py-3 text-left font-semibold text-primary hidden sm:table-cell">
                          Note
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {OPENING_HOURS.map((row) => (
                        <tr key={row.day} className="hover:bg-surface/50 transition-colors">
                          <td className="px-4 py-3.5 font-medium text-text-primary">
                            {row.day}
                          </td>
                          <td className="px-4 py-3.5 text-text-secondary">
                            {row.hours}
                          </td>
                          <td className="px-4 py-3.5 text-text-muted text-xs hidden sm:table-cell">
                            {row.note || "—"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="mt-4 text-xs text-text-muted flex items-center gap-1.5">
                  <CalendarDays size={14} />
                  All times are in West Africa Time (WAT / UTC+1)
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to visit us?"
        description="Book an appointment with one of our specialists or contact us for more information about our services."
      />
    </div>
  );
}
