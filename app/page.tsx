import { Hero } from "@/components/sections/Hero";
import { QuickAccess } from "@/components/sections/QuickAccess";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CTABanner } from "@/components/sections/CTABanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/lib/data";

export default function Home() {
  // Take top 4 services for the homepage
  const topServices = services.slice(0, 4);

  return (
    <div className="flex flex-col">
      <Hero />
      
      {/* White Section: Why Choose Us */}
      <WhyChooseUs />

      {/* Deep Teal Section: Top Services */}
      <section className="py-24 lg:py-32 bg-primary">
        <div className="section-container">
          <SectionHeading
            title="Our Top Specialties"
            subtitle="Explore our wide range of specialized medical services designed to provide comprehensive care for you and your family."
            badge="Expert Care"
            inverse={true}
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-16">
            {topServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                slug={service.slug}
                iconName={service.iconName}
                imageUrl={service.imageUrl}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* White Section: Quick Access overlapping from top */}
      <div className="bg-background">
        <QuickAccess />
      </div>

      <CTABanner />
    </div>
  );
}
