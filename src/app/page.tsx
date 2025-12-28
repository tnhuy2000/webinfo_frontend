'use client';

import { ServiceList } from '@/features/services';
import { TeamGrid } from '@/features/team';
import { ContactInfoDisplay } from '@/features/contact';
import { Button } from '@/components/ui';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-foreground">
            Welcome to Our Company
          </h1>
          <p className="text-xl text-secondary mb-8">
            Building innovative solutions for modern businesses
          </p>
          <Button size="lg">
            Get Started
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Our Services
          </h2>
          <ServiceList limit={3} />
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Meet Our Team
          </h2>
          <TeamGrid limit={4} />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-foreground">
            Get In Touch
          </h2>
          <ContactInfoDisplay />
        </div>
      </section>
    </div>
  );
}
