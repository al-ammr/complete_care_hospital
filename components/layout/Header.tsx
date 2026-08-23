"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/Button";
import { MobileNav } from "./MobileNav";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Our Doctors", href: "/doctors" },
  { name: "Patients & Visitors", href: "/patients" },
  { name: "Contact", href: "/contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-nav w-full transition-all duration-300",
          isScrolled ? "glass-nav py-2 shadow-nav" : "bg-white py-4 shadow-sm"
        )}
      >
        <div className="w-full px-3 sm:px-6 md:px-8 lg:px-12 xl:px-24 flex h-14 sm:h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 transition-opacity hover:opacity-90"
          >
            <Image src="/logo.png" alt="Complete Care Hospital Logo" width={200} height={40} className="h-8 sm:h-10 w-auto object-contain" style={{ width: "auto" }} />
            <span className="font-outfit font-extrabold text-[9px] leading-tight sm:text-xs xl:text-sm text-primary tracking-wide xl:tracking-widest max-w-[140px] sm:max-w-[200px] xl:max-w-none xl:whitespace-nowrap uppercase">
              COMPLETE CARE HOSPITAL AND LABORATORY LTD
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === link.href
                    : pathname.startsWith(link.href);

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-primary",
                        isActive ? "text-primary font-bold" : "text-text-primary"
                      )}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link href="/appointment">
              <Button variant="default" className="rounded-full">Book Appointment</Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full text-text-primary hover:bg-black/5 lg:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={NAV_LINKS}
      />
    </>
  );
};
