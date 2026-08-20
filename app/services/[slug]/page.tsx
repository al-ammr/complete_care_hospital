import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { services, doctors } from "@/lib/data";
import { CTABanner } from "@/components/sections/CTABanner";
import { DoctorCard } from "@/components/ui/DoctorCard";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.title} | Complete Care Hospital`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const serviceIndex = services.findIndex((s) => s.slug === resolvedParams.slug);
  const service = services[serviceIndex];

  if (!service) {
    notFound();
  }

  const prevService = services[serviceIndex === 0 ? services.length - 1 : serviceIndex - 1];
  const nextService = services[serviceIndex === services.length - 1 ? 0 : serviceIndex + 1];

  // Find related doctors based on specialty matching the service title
  const relatedDoctors = doctors.filter((doc) => doc.specialty.includes(service.title));
  const Icon = (LucideIcons as Record<string, React.ElementType>)[service.iconName] || LucideIcons.Activity;

  return (
    <div className="flex flex-col">
      {/* Dynamic Hero */}
      <section className="bg-primary pt-24 sm:pt-32 pb-12 sm:pb-20">
        <div className="section-container">
          <Link href="/services" className="mb-8 inline-flex items-center text-primary-200 hover:text-white hover:-translate-x-1 transition-all duration-300">
            <ArrowLeft size={16} className="mr-2" />
            Back to Services
          </Link>
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/30 shrink-0 transition-transform hover:scale-110 duration-300">
              <Icon size={32} />
            </div>
            <div>
              <h1 className="mb-3 sm:mb-4 font-outfit text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
                {service.title}
              </h1>
              <p className="max-w-2xl text-sm sm:text-base md:text-lg text-white">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-10 sm:py-16 lg:py-20">
        <div className="section-container grid gap-8 sm:gap-12 lg:gap-16 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="mb-4 sm:mb-6 font-outfit text-2xl sm:text-3xl font-bold text-primary">Overview</h2>
            <div className="prose prose-lg text-text-secondary max-w-none">
              <p>
                Our {service.title} department is dedicated to providing the highest standard of care. 
                Equipped with cutting-edge technology and staffed by renowned specialists, we offer comprehensive 
                diagnostic and treatment services tailored to your specific needs.
              </p>
              <p className="mt-4">
                We believe in a multidisciplinary approach, ensuring that every aspect of your health is 
                considered when developing your personalized care plan. Our commitment to continuous innovation 
                means you have access to the latest medical advancements and therapies.
              </p>
            </div>

            <h3 className="mt-8 sm:mt-12 mb-4 sm:mb-6 font-outfit text-xl sm:text-2xl font-bold text-primary">Key Conditions Treated</h3>
            <ul className="grid gap-4 sm:grid-cols-2 mb-12">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <li key={i} className="flex items-start gap-3 text-text-secondary rounded-lg p-3 transition-colors hover:bg-blue-50/50">
                  <CheckCircle2 size={20} className="text-blue-600 shrink-0 mt-0.5 drop-shadow-sm" />
                  <span>Condition associated with {service.title} {i}</span>
                </li>
              ))}
            </ul>

            {/* Service Navigation */}
            <div className="mt-10 sm:mt-16 border-t border-border pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 sm:gap-6">
              <Link 
                href={`/services/${prevService.slug}`} 
                className="group flex w-full sm:w-auto items-center gap-4 rounded-2xl border border-secondary/10 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-x-1 hover:shadow-md hover:border-blue-300"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <ArrowLeft size={20} />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">Previous</p>
                  <p className="font-outfit font-medium text-primary line-clamp-1">{prevService.title}</p>
                </div>
              </Link>
              
              <Link 
                href={`/services/${nextService.slug}`} 
                className="group flex w-full sm:w-auto items-center justify-end gap-4 rounded-2xl border border-secondary/10 bg-white p-4 shadow-sm transition-all duration-300 hover:translate-x-1 hover:shadow-md hover:border-blue-300"
              >
                <div className="text-right">
                  <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">Next</p>
                  <p className="font-outfit font-medium text-primary line-clamp-1">{nextService.title}</p>
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <LucideIcons.ArrowRight size={20} />
                </div>
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="rounded-2xl sm:rounded-3xl border border-secondary/10 bg-white p-5 sm:p-8 sticky top-24 sm:top-28 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(37,99,235,0.2)] hover:border-blue-300">
              <h3 className="mb-4 font-outfit text-xl font-bold text-primary">Need an Appointment?</h3>
              <p className="mb-6 text-text-secondary">
                Schedule a consultation with our {service.title} specialists today.
              </p>
              <Link href={`/appointment?service=${encodeURIComponent(service.title)}`} className="block w-full">
                <button className="w-full rounded-xl bg-teal-600 py-3 font-semibold text-white shadow-[0_4px_14px_rgba(13,148,136,0.4)] transition-all duration-300 hover:-translate-y-1 hover:bg-teal-500 hover:shadow-[0_6px_20px_rgba(13,148,136,0.6)]">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Doctors */}
      {relatedDoctors.length > 0 && (
        <section className="bg-surface py-20">
          <div className="section-container">
            <h2 className="mb-12 text-center font-outfit text-3xl font-bold text-primary">
              Our {service.title} Specialists
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedDoctors.map((doc, index) => (
                <DoctorCard
                  key={doc.id}
                  name={doc.name}
                  specialty={doc.specialty}
                  qualifications={doc.qualifications}
                  imageUrl={doc.imageUrl}
                  slug={doc.slug}
                  delay={index}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </div>
  );
}
