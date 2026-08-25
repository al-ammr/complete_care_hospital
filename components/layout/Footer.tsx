import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white">
      {/* Pre-footer Call to action pattern */}
      <div className="bg-primary text-white">
        <div className="w-full px-4 sm:px-6 md:px-8 xl:px-12 grid items-center gap-6 sm:gap-8 py-8 sm:py-12 md:grid-cols-2">
          <div>
            <h3 className="font-outfit text-xl font-bold text-white sm:text-2xl md:text-3xl">
              Ready to prioritize your health?
            </h3>
            <p className="mt-2 text-primary-200">
              Schedule a consultation with our specialists today.
            </p>
          </div>
          <div className="flex justify-start md:justify-end">
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 font-bold text-white shadow-glow-teal transition-all hover:bg-accent-light hover:-translate-y-1"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-accent/5 text-primary">
        <div className="w-full px-4 sm:px-6 md:px-8 xl:px-12 pt-8 pb-10 sm:pb-16">
          <div className="flex flex-wrap lg:flex-nowrap justify-start gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
            {/* Column 1: Brand & Contact */}
            <div className="flex flex-col gap-4 sm:gap-6 lg:-mt-8 xl:-ml-4 w-full sm:max-w-sm lg:w-[350px] xl:w-[400px]">
              <Link href="/" className="flex items-center gap-2">
                <Image src="/logo.png" alt="Complete Care Hospital Logo" width={200} height={40} className="h-10 w-auto object-contain" style={{ width: "auto" }} />
              </Link>
              <p className="text-text-secondary leading-relaxed">
                Premium healthcare services, advanced diagnostics, and compassionate care in the heart of Gwagwalada, Abuja.
              </p>
              <ul className="flex flex-col gap-4 text-text-secondary">
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="mt-1 shrink-0 text-accent" />
                  <span>Phase 1, Opposite ABC Bakery, Police Barack Gate, Gwagwalada, Abuja</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={20} className="shrink-0 text-accent" />
                  <a href="tel:+2348065395623" className="hover:text-primary transition-colors">
                    +234 806 539 5623
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={20} className="shrink-0 text-accent" />
                  <a href="mailto:completecarehospital11@gmail.com" className="hover:text-primary transition-colors">
                    completecarehospital11@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Quick Links */}
            <div className="w-full sm:w-auto lg:w-[150px] xl:w-[180px]">
              <h4 className="mb-4 sm:mb-6 font-outfit text-lg font-bold">Quick Links</h4>
              <ul className="flex flex-col gap-3 text-text-secondary">
                <li>
                  <Link href="/about" className="hover:text-accent transition-colors">About Us</Link>
                </li>
                <li>
                  <Link href="/doctors" className="hover:text-accent transition-colors">Our Doctors</Link>
                </li>
                <li>
                  <Link href="/patients" className="hover:text-accent transition-colors">Patient Resources</Link>
                </li>
                <li>
                  <Link href="/appointment" className="hover:text-accent transition-colors">Book Appointment</Link>
                </li>
                <li>
                  <Link href="/locations" className="hover:text-accent transition-colors">Locations & Contact</Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div className="w-full sm:w-auto lg:w-[180px] xl:w-[220px]">
              <h4 className="mb-4 sm:mb-6 font-outfit text-lg font-bold">Top Services</h4>
              <ul className="flex flex-col gap-3 text-text-secondary">
                <li>
                  <Link href="/services/general-diagnostics" className="hover:text-accent transition-colors">General Diagnostics</Link>
                </li>
                <li>
                  <Link href="/services/oncology" className="hover:text-accent transition-colors">Oncology Center</Link>
                </li>
                <li>
                  <Link href="/services/orthopedics" className="hover:text-accent transition-colors">Orthopedics</Link>
                </li>
                <li>
                  <Link href="/services/ivf-fertility" className="hover:text-accent transition-colors">IVF & Fertility Clinic</Link>
                </li>
                <li>
                  <Link href="/services/pediatrics" className="hover:text-accent transition-colors">Pediatrics</Link>
                </li>
                <li>
                  <Link href="/services" className="mt-2 inline-block font-semibold text-accent hover:text-primary transition-colors">View All Services &rarr;</Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Hours */}
            <div className="w-full sm:w-auto lg:flex-1 lg:max-w-md xl:max-w-lg">
              <h4 className="mb-4 sm:mb-6 font-outfit text-lg font-bold">Opening Hours</h4>
              <ul className="flex flex-col gap-4 text-text-secondary">
                <li className="flex justify-between border-b border-primary/10 pb-2">
                  <span>Monday - Friday</span>
                  <span className="font-medium text-primary">Always Open</span>
                </li>
                <li className="flex justify-between border-b border-primary/10 pb-2">
                  <span>Saturday</span>
                  <span className="font-medium text-primary">Always Open</span>
                </li>
                <li className="flex justify-between border-b border-primary/10 pb-2">
                  <span>Sunday</span>
                  <span className="font-medium text-primary">Always Open</span>
                </li>
                <li className="mt-2 flex items-start gap-3 rounded-lg bg-accent/10 p-4">
                  <Clock size={20} className="shrink-0 text-accent" />
                  <div>
                    <p className="font-bold text-primary">24/7 Emergency Care</p>
                    <p className="text-sm">Always open for emergencies.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="bg-primary py-6 text-center text-sm text-primary-200">
          <div className="w-full px-4 md:px-8 xl:px-12 flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-white">&copy; {currentYear} Complete Care Hospital. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/legal" className="hover:text-white transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
