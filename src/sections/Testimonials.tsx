import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'The doctors at Sumitra Hospital handled my father\'s cardiac emergency with incredible speed and expertise. We are forever grateful for their 24/7 care.',
    name: 'Rajesh K.',
    role: 'Cardiology Patient',
    initial: 'RK',
  },
  {
    quote:
      'I chose Sumitra for my delivery, and the gynecology team made the entire experience so comfortable and safe. Highly recommended for mother and child care.',
    name: 'Priya S.',
    role: 'Maternity Patient',
    initial: 'PS',
  },
  {
    quote:
      'After my knee replacement surgery, the orthopaedic team and physiotherapists helped me walk again with confidence. Truly world-class care at affordable prices.',
    name: 'Mohan T.',
    role: 'Orthopaedic Patient',
    initial: 'MT',
  },
];

export default function Testimonials() {
  useScrollReveal('.testimonial-card', { y: 20, stagger: 0.15 });

  return (
    <section className="bg-soft-peach section-padding">
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-caption text-soft-sage block mb-3">
            Testimonials
          </span>
          <h2 className="text-h1 text-deep-teal">
            What Our Patients Say
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-[1280px] mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="testimonial-card bg-light-blush rounded-[20px] p-8 md:p-10"
            >
              <Quote className="w-10 h-10 text-blush-rose/30 mb-5" />
              <p className="text-[16px] text-warm-charcoal italic leading-relaxed mb-6">
                "{t.quote}"
              </p>
              <div className="h-px bg-blush-rose/30 mb-5" />
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-deep-teal/10 flex items-center justify-center">
                  <span className="text-[13px] font-semibold text-deep-teal">
                    {t.initial}
                  </span>
                </div>
                <div>
                  <div className="font-body font-semibold text-[16px] text-deep-teal">
                    {t.name}
                  </div>
                  <div className="text-[13px] font-medium text-soft-sage">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
