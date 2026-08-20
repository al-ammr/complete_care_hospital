import React from "react";
import { Metadata } from "next";
import { CTABanner } from "@/components/sections/CTABanner";
import { ShieldCheck, FileText, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Legal & Privacy | Complete Care Hospital",
  description:
    "Review Complete Care Hospital's Privacy Policy, Terms of Service, and Patient Rights. We comply with the Nigeria Data Protection Act (NDPA) 2023.",
};

/* ── Section data ────────────────────────────────────────────────── */

interface LegalSection {
  id: string;
  icon: React.ElementType;
  title: string;
  updatedAt: string;
  content: React.ReactNode;
}

const LEGAL_SECTIONS: LegalSection[] = [
  {
    id: "privacy-policy",
    icon: ShieldCheck,
    title: "Privacy Policy",
    updatedAt: "1 August 2025",
    content: (
      <>
        <p>
          Complete Care Hospital (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or
          &ldquo;the Hospital&rdquo;) is committed to protecting the privacy and
          security of every patient&rsquo;s personal information. This Privacy
          Policy explains how we collect, use, store, and share your data in
          compliance with the{" "}
          <strong>Nigeria Data Protection Act (NDPA) 2023</strong> and
          regulations issued by the Nigeria Data Protection Commission (NDPC).
        </p>

        <h3>1. Information We Collect</h3>
        <p>
          We may collect the following categories of personal data when you
          interact with our services:
        </p>
        <ul>
          <li>
            <strong>Identity Data:</strong> Full name, date of birth, gender,
            photograph, National Identification Number (NIN), or other
            government-issued ID.
          </li>
          <li>
            <strong>Contact Data:</strong> Phone number, email address, and
            residential address.
          </li>
          <li>
            <strong>Health Data:</strong> Medical history, diagnoses, test
            results, prescriptions, imaging records, and treatment plans.
          </li>
          <li>
            <strong>Financial Data:</strong> Billing information, Health
            Maintenance Organisation (HMO) details, and payment records.
          </li>
          <li>
            <strong>Technical Data:</strong> IP address, browser type, and usage
            data when you visit our website.
          </li>
        </ul>

        <h3>2. Legal Basis for Processing</h3>
        <p>
          Under the NDPA 2023, we process your personal data on the following
          lawful grounds:
        </p>
        <ul>
          <li>
            <strong>Consent:</strong> When you expressly agree to the processing
            of your data (e.g., signing a registration form).
          </li>
          <li>
            <strong>Performance of a Contract:</strong> To deliver healthcare
            services you have requested.
          </li>
          <li>
            <strong>Legal Obligation:</strong> To comply with Nigerian laws and
            regulatory requirements.
          </li>
          <li>
            <strong>Vital Interest:</strong> In emergency medical situations to
            protect your life or wellbeing.
          </li>
        </ul>

        <h3>3. How We Use Your Information</h3>
        <ul>
          <li>To provide diagnosis, treatment, and medical care.</li>
          <li>To schedule appointments and send reminders via SMS or email.</li>
          <li>To process billing, insurance claims, and HMO authorisations.</li>
          <li>
            To improve our services through anonymised, aggregated analysis.
          </li>
          <li>To comply with public health reporting obligations.</li>
        </ul>

        <h3>4. Data Sharing &amp; Disclosure</h3>
        <p>
          We do not sell your personal data. We may share data with trusted third
          parties only in the following circumstances:
        </p>
        <ul>
          <li>
            With your HMO or health insurance provider for claim processing.
          </li>
          <li>With referring healthcare providers for continuity of care.</li>
          <li>
            With government agencies or public health authorities as required by
            law.
          </li>
          <li>
            With service providers (e.g., laboratory partners, cloud hosting)
            under strict data processing agreements.
          </li>
        </ul>

        <h3>5. Data Security</h3>
        <p>
          We implement appropriate technical and organisational measures to
          protect your data, including encrypted storage, access controls, audit
          trails, and regular security assessments in line with NDPA standards.
        </p>

        <h3>6. Data Retention</h3>
        <p>
          Medical records are retained for a minimum of ten (10) years in
          accordance with Nigerian medical regulations. Other personal data is
          retained only as long as necessary for the purposes outlined in this
          policy.
        </p>

        <h3>7. Your Rights Under the NDPA 2023</h3>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal data held by the Hospital.</li>
          <li>Request correction of inaccurate or incomplete data.</li>
          <li>
            Request deletion of your data (subject to legal retention
            requirements).
          </li>
          <li>Withdraw consent at any time.</li>
          <li>Object to data processing for direct marketing.</li>
          <li>Lodge a complaint with the Nigeria Data Protection Commission.</li>
        </ul>

        <h3>8. Contact Us</h3>
        <p>
          For privacy-related enquiries, please contact our Data Protection
          Officer at{" "}
          <a href="mailto:privacy@completecarehospital.ng">
            privacy@completecarehospital.ng
          </a>{" "}
          or visit the Hospital reception in Gwagwalada, Abuja.
        </p>
      </>
    ),
  },
  {
    id: "terms-of-service",
    icon: FileText,
    title: "Terms of Service",
    updatedAt: "1 August 2025",
    content: (
      <>
        <p>
          By accessing or using the Complete Care Hospital website and services,
          you agree to the following terms and conditions. Please read them
          carefully.
        </p>

        <h3>1. Use of Our Services</h3>
        <p>
          Our website provides general information about our medical services,
          facilities, and healthcare professionals. This information is for
          educational purposes only and does not constitute medical advice,
          diagnosis, or treatment.
        </p>

        <h3>2. Appointment Booking</h3>
        <p>
          Online appointment requests are subject to availability and
          confirmation by our scheduling team. Submitting a request does not
          guarantee an appointment at the requested time. We will contact you via
          phone or SMS to confirm.
        </p>

        <h3>3. Patient Responsibilities</h3>
        <ul>
          <li>
            Provide accurate and complete personal and medical information.
          </li>
          <li>
            Present valid identification and HMO/insurance details at
            registration.
          </li>
          <li>
            Arrive on time for scheduled appointments or notify us of
            cancellations at least 24 hours in advance.
          </li>
          <li>Settle all outstanding bills as per the agreed payment terms.</li>
        </ul>

        <h3>4. Billing &amp; Payment</h3>
        <p>
          Payment for services is due at the time of service unless covered by a
          valid HMO plan. We accept cash (Naira), bank transfers, POS payments,
          and approved HMO authorisations. Detailed invoices will be provided
          upon request.
        </p>

        <h3>5. Intellectual Property</h3>
        <p>
          All content on this website — including text, graphics, logos, and
          images — is the property of Complete Care Hospital and is protected
          under Nigerian copyright law. Unauthorised reproduction or
          distribution is prohibited.
        </p>

        <h3>6. Limitation of Liability</h3>
        <p>
          While we strive to keep website content accurate and up-to-date,
          Complete Care Hospital makes no warranties regarding the completeness
          or accuracy of information provided online. Medical decisions should
          always be made in consultation with a qualified healthcare
          professional.
        </p>

        <h3>7. Governing Law</h3>
        <p>
          These terms are governed by the laws of the Federal Republic of
          Nigeria. Any disputes arising from your use of our services shall be
          subject to the jurisdiction of the courts in the Federal Capital
          Territory, Abuja.
        </p>
      </>
    ),
  },
  {
    id: "patient-rights",
    icon: HeartHandshake,
    title: "Patient Rights",
    updatedAt: "1 August 2025",
    content: (
      <>
        <p>
          At Complete Care Hospital, we uphold the rights and dignity of every
          patient. The following rights are guaranteed in accordance with
          Nigerian medical ethics and the National Health Act 2014.
        </p>

        <h3>1. Right to Quality Healthcare</h3>
        <p>
          Every patient has the right to receive timely, safe, and
          evidence-based medical care regardless of ethnicity, religion, gender,
          socio-economic status, or disability.
        </p>

        <h3>2. Right to Information</h3>
        <p>
          You have the right to be informed about your diagnosis, treatment
          options, potential risks, and expected outcomes in a language you
          understand. Our medical team will explain procedures clearly and answer
          your questions.
        </p>

        <h3>3. Right to Informed Consent</h3>
        <p>
          No medical procedure or treatment will be administered without your
          informed consent (or the consent of your legal guardian where
          applicable). You have the right to refuse treatment after being
          informed of the consequences.
        </p>

        <h3>4. Right to Privacy &amp; Confidentiality</h3>
        <p>
          Your medical records and personal information are confidential. They
          will only be disclosed with your consent or as required by law, in
          accordance with the NDPA 2023.
        </p>

        <h3>5. Right to Dignity &amp; Respect</h3>
        <p>
          You shall be treated with courtesy, dignity, and respect by all
          hospital staff. Care will be provided in a safe and clean environment.
        </p>

        <h3>6. Right to a Second Opinion</h3>
        <p>
          You have the right to seek a second medical opinion from another
          qualified healthcare provider at any time during your treatment.
        </p>

        <h3>7. Right to Complain</h3>
        <p>
          If you are dissatisfied with any aspect of your care, you have the
          right to file a formal complaint through our Patient Relations
          department. All complaints will be investigated promptly and addressed
          fairly.
        </p>

        <h3>8. Right to Access Medical Records</h3>
        <p>
          You may request access to your medical records at any time. Copies
          will be provided within a reasonable timeframe, subject to applicable
          administrative fees.
        </p>
      </>
    ),
  },
];

/* ── Quick-nav link component ───────────────────────────────────── */

function QuickNavLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
}) {
  return (
    <a
      href={href}
      className="group flex items-center gap-3 sm:gap-4 rounded-xl sm:rounded-2xl border border-secondary/10 bg-white p-4 sm:p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(37,99,235,0.3)] hover:border-blue-300"
    >
      <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/30 transition-transform duration-300 group-hover:scale-110">
        <Icon size={24} />
      </span>
      <span className="font-outfit text-sm sm:text-lg font-semibold text-primary transition-colors group-hover:text-blue-700">{label}</span>
    </a>
  );
}

/* ── Page component ──────────────────────────────────────────────── */

export default function LegalPage() {
  return (
    <div className="flex flex-col">
      {/* ── Hero ── */}
      <section className="bg-primary pt-24 sm:pt-32 pb-12 sm:pb-20 text-center">
        <div className="section-container">
          <h1 className="mb-4 sm:mb-6 font-outfit text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Legal &amp; Privacy
          </h1>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-white">
            Transparency, trust, and your rights — everything you need to know
            about how we protect your data and deliver care.
          </p>
        </div>
      </section>

      {/* ── Quick Navigation ── */}
      <section className="py-12 lg:py-16">
        <div className="section-container">
          <div className="grid gap-4 sm:grid-cols-3">
            {LEGAL_SECTIONS.map((section) => (
              <QuickNavLink
                key={section.id}
                href={`#${section.id}`}
                icon={section.icon}
                label={section.title}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Legal Sections ── */}
      <div className="bg-background-surface pb-20">
        {LEGAL_SECTIONS.map((section) => {
          const Icon = section.icon;

          return (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-32 pt-8"
            >
              <div className="section-container-narrow">
                <div className="rounded-2xl sm:rounded-3xl border border-secondary/10 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-200 sm:p-8 lg:p-12">
                  {/* Section Header */}
                  <div className="mb-10 flex flex-col sm:flex-row sm:items-center gap-6 border-b border-border pb-8">
                    <span className="flex h-12 w-12 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/30">
                      <Icon size={32} />
                    </span>
                    <div>
                      <h2 className="font-outfit text-xl sm:text-2xl md:text-3xl font-bold text-primary">
                        {section.title}
                      </h2>
                      <p className="mt-2 text-sm font-medium text-text-secondary uppercase tracking-wider">
                        Last updated: {section.updatedAt}
                      </p>
                    </div>
                  </div>

                  {/* Prose Content */}
                  <div className="prose prose-slate max-w-none text-text-secondary leading-relaxed [&_h3]:mt-10 [&_h3]:mb-4 [&_h3]:font-outfit [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-primary [&_p]:mb-5 [&_ul]:mb-6 [&_ul]:ml-2 [&_ul]:list-none [&_ul]:space-y-3 [&_li]:relative [&_li]:pl-6 [&_li::before]:absolute [&_li::before]:left-0 [&_li::before]:top-2 [&_li::before]:h-2 [&_li::before]:w-2 [&_li::before]:rounded-full [&_li::before]:bg-blue-500 [&_li]:text-text-secondary [&_a]:font-medium [&_a]:text-blue-600 [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-blue-800 [&_strong]:text-primary [&_strong]:font-semibold">
                    {section.content}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <CTABanner
        title="Have questions about your rights?"
        description="Our Patient Relations team is here to help. Contact us for any enquiries about your data, privacy, or patient rights."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </div>
  );
}
