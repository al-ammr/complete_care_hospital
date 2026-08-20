import React from "react";
import { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/sections/CTABanner";
import { Card } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";
import {
  CreditCard,
  FileText,
  Download,
  Clock,
  Users,
  ShieldCheck,
  Baby,
  AlertCircle,
  HeartHandshake,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Patient Resources | Complete Care Hospital",
  description:
    "Access billing information, insurance details, medical records, visitor guidelines, and frequently asked questions at Complete Care Hospital, Gwagwalada, Abuja.",
};

const INSURANCE_PARTNERS = [
  "NHIS (National Health Insurance Scheme)",
  "HMO – Hygeia HMO",
  "HMO – Leadway Health",
  "HMO – AXA Mansard",
  "HMO – Reliance HMO",
  "HMO – Redcare HMO",
];

const MEDICAL_RECORDS = [
  {
    title: "Patient Registration Form",
    description: "New patient intake form – please complete before your first visit.",
    fileName: "Patient_Registration_Form.pdf",
  },
  {
    title: "Medical Records Request Form",
    description: "Request copies of your medical records for personal use or transfer.",
    fileName: "Medical_Records_Request_Form.pdf",
  },
  {
    title: "Consent for Treatment",
    description: "Standard consent form required before medical procedures.",
    fileName: "Consent_for_treatment.pdf",
  },
  {
    title: "Discharge Summary Template",
    description: "Overview document provided upon discharge from inpatient care.",
    fileName: "Discharge_Summary_Template.pdf",
  },
];

const VISITOR_GUIDELINES = [
  {
    icon: Clock,
    title: "Visiting Hours",
    content:
      "General wards: 10:00 AM – 12:00 PM & 4:00 PM – 6:00 PM (WAT), daily. ICU: 11:00 AM – 12:00 PM & 5:00 PM – 6:00 PM (WAT), limited to 2 visitors.",
  },
  {
    icon: Users,
    title: "Visitor Limits",
    content:
      "A maximum of 2 visitors per patient at a time. Children under 12 must be accompanied by an adult.",
  },
  {
    icon: ShieldCheck,
    title: "Health & Safety",
    content:
      "All visitors must sanitise their hands on entry. Face masks are recommended in clinical areas. Visitors with infectious symptoms are advised to postpone visits.",
  },
  {
    icon: Baby,
    title: "Maternity Ward",
    content:
      "Only one birth partner is allowed during labour. Post-delivery visits follow standard visiting hours. No children under 5 in the maternity ward.",
  },
];

const FAQ_ITEMS = [
  {
    title: "How do I register as a new patient?",
    content:
      "You can register at our front desk during operating hours or download the Patient Registration Form from this page and bring it completed to your first appointment. You will need a valid ID and your NHIS/HMO card if applicable.",
  },
  {
    title: "What payment methods do you accept?",
    content:
      "We accept cash (₦), bank transfers, debit/credit cards (Visa, Mastercard, Verve), POS payments, and mobile payments. We also process claims through NHIS and enrolled HMO plans.",
  },
  {
    title: "How do I request my medical records?",
    content:
      "Complete the Medical Records Request Form (available for download on this page) and submit it to the Health Information Management department. Records are typically ready within 3–5 business days. A nominal processing fee of ₦2,000 applies.",
  },
  {
    title: "Can I book an appointment online?",
    content:
      "Yes! You can book an appointment through our website's appointment page or by calling us at +234 (0) 809 123 4567 during business hours (8:00 AM – 6:00 PM WAT, Monday–Saturday).",
  },
  {
    title: "Do you offer emergency services?",
    content:
      "Yes, our Emergency Department operates 24 hours a day, 7 days a week, including public holidays. For emergencies, call +234 (0) 809 123 4567 or come directly to our emergency entrance.",
  },
  {
    title: "What should I bring to my appointment?",
    content:
      "Please bring a valid government-issued ID, your NHIS or HMO card (if enrolled), any previous medical records or test results, a list of current medications, and your referral letter if applicable.",
  },
  {
    title: "Is there parking available at the hospital?",
    content:
      "Yes, we have a free car park within the hospital premises at our Phase 1, Gwagwalada location. There is also designated parking for persons with disabilities.",
  },
];

export default function PatientsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary pt-24 sm:pt-32 pb-12 sm:pb-20 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-80 h-80 rounded-full bg-primary-light/30 blur-3xl" />
        <div className="section-container relative z-10">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary/15 px-4 py-1.5 text-sm font-semibold text-secondary-200">
            <HeartHandshake size={16} />
            Patient Support
          </span>
          <h1 className="mb-6 font-outfit text-3xl font-bold text-white sm:text-5xl md:text-6xl">
            Patient Resources
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white">
            Everything you need for a smooth hospital experience — from billing
            and insurance to medical records and visitor information.
          </p>
        </div>
      </section>

      {/* Billing & Insurance */}
      <section className="py-12 sm:py-16 lg:py-28">
        <div className="section-container">
          <SectionHeading
            title="Billing & Insurance"
            subtitle="We work with major health insurance providers in Nigeria to make quality healthcare accessible."
            badge="Financial Information"
          />

          <div className="grid gap-8 md:grid-cols-2">
            <Card hoverEffect className="bg-surface/50 border-secondary/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <CreditCard size={24} />
                </div>
                <div>
                  <h3 className="font-outfit text-xl font-bold text-primary mb-2">
                    Payment Options
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    We accept multiple payment methods to suit your convenience.
                  </p>
                </div>
              </div>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  Cash payments (Nigerian Naira – ₦)
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  Bank transfers &amp; POS terminals
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  Debit/Credit cards (Visa, Mastercard, Verve)
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  Mobile payments &amp; USSD
                </li>
              </ul>
            </Card>

            <Card hoverEffect className="bg-surface/50 border-secondary/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h3 className="font-outfit text-xl font-bold text-primary mb-2">
                    Insurance Partners
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    We are enrolled with the following HMO and insurance providers.
                  </p>
                </div>
              </div>
              <ul className="space-y-3 text-text-secondary">
                {INSURANCE_PARTNERS.map((partner) => (
                  <li key={partner} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {partner}
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="mt-8 rounded-xl border border-border bg-status-info-light/30 p-4 sm:p-6 flex items-start gap-4">
            <AlertCircle size={24} className="text-status-info shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-primary mb-1">Billing Enquiries</p>
              <p className="text-text-secondary">
                For billing questions or to discuss payment plans, contact our
                Billing Department at{" "}
                <a
                  href="tel:+2348065395623"
                  className="font-medium text-primary hover:text-primary/80 hover:underline transition-colors"
                >
                  +234 (0) 806 539 5623
                </a>{" "}
                or email{" "}
                <a
                  href="mailto:completecarehospital11@gmail.com"
                  className="font-medium text-primary hover:text-primary/80 hover:underline transition-colors"
                >
                  completecarehospital11@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Records */}
      <section className="bg-background-surface py-12 sm:py-16 lg:py-28">
        <div className="section-container">
          <SectionHeading
            title="Medical Records & Forms"
            subtitle="Download the forms you need before your visit or to request your medical records."
            badge="Documents"
          />

          <div className="grid gap-6 sm:grid-cols-2">
            {MEDICAL_RECORDS.map((record) => (
              <Card key={record.fileName} hoverEffect className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-emergency/10 text-accent-emergency">
                  <FileText size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-outfit text-lg font-bold text-primary mb-1">
                    {record.title}
                  </h3>
                  <p className="text-sm text-text-secondary mb-4">
                    {record.description}
                  </p>
                  <a
                    href={`/documents/${record.fileName}`}
                    download
                    className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-primary transition-colors"
                  >
                    <Download size={16} />
                    Download PDF
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visitor Guidelines */}
      <section className="py-12 sm:py-16 lg:py-28">
        <div className="section-container">
          <SectionHeading
            title="Visitor Guidelines"
            subtitle="Important information for friends and family visiting patients at Complete Care Hospital."
            badge="Visiting Information"
          />

          <div className="grid gap-8 sm:grid-cols-2">
            {VISITOR_GUIDELINES.map((guideline) => {
              const Icon = guideline.icon;
              return (
                <Card key={guideline.title} hoverEffect className="bg-surface/50">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-outfit text-lg font-bold text-primary mb-2">
                        {guideline.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        {guideline.content}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="mt-8 rounded-xl border border-border bg-status-warning-light/30 p-4 sm:p-6 flex items-start gap-4">
            <AlertCircle size={24} className="text-status-warning shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-primary mb-1">Special Circumstances</p>
              <p className="text-text-secondary">
                During heightened health advisories or outbreaks, visiting policies
                may be temporarily adjusted. Please call ahead at{" "}
                <a
                  href="tel:+2348091234567"
                  className="font-medium text-secondary-dark hover:underline"
                >
                  +234 (0) 809 123 4567
                </a>{" "}
                to confirm current guidelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-background-surface py-12 sm:py-16 lg:py-28">
        <div className="section-container">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions about our hospital services and policies."
            badge="FAQs"
          />

          <div className="mx-auto max-w-3xl">
            <Accordion items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      <CTABanner
        title="Still have questions?"
        description="Our patient services team is ready to assist you. Reach out to us for any enquiries about billing, records, or hospital policies."
        buttonText="Contact Us"
        buttonHref="/locations"
      />
    </div>
  );
}
