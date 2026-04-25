import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Phone } from 'lucide-react';

export default function AppointmentCTA() {
  useScrollReveal('.cta-content', { y: 20 });

  return (
    <section className="bg-warm-cream py-20 md:py-24 lg:py-[100px]">
      <div className="container-main">
        <div className="cta-content text-center max-w-[800px] mx-auto">
          <h2 className="text-h1 text-deep-teal mb-4">
            Ready to Book Your Appointment?
          </h2>
          <p className="text-body-lg text-warm-charcoal/80 mb-8">
            Our team is ready to assist you. Book online or call us directly for
            immediate assistance.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href="#contact" className="btn-blush">
              Book Online
            </a>
            <a
              href="tel:+919810448328"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call: 98104 48328
            </a>
          </div>

          <p className="text-[13px] font-medium text-warm-charcoal/60">
            Emergency? Walk in anytime — our 24/7 emergency department is always
            open.
          </p>
        </div>
      </div>
    </section>
  );
}
