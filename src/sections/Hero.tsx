import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Check, ArrowRight, Award } from 'lucide-react';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const floatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(badgeRef.current, { opacity: 0, y: 20, duration: 0.6 })
        .from(headlineRef.current, { opacity: 0, y: 30, duration: 0.8 }, '-=0.3')
        .from(subRef.current, { opacity: 0, y: 20, duration: 0.7 }, '-=0.5')
        .from(ctaRef.current, { opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
        .from(trustRef.current, { opacity: 0, y: 10, duration: 0.5 }, '-=0.3')
        .from(imageRef.current, { opacity: 0, x: 40, duration: 0.8 }, '-=0.8')
        .from(floatRef.current, { opacity: 0, scale: 0.8, duration: 0.6 }, '-=0.4');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="bg-warm-cream min-h-[90vh] pt-[140px] pb-16 md:pb-24 flex items-center"
    >
      <div className="container-main">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">
          {/* Text Column */}
          <div className="order-2 lg:order-1">
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2 bg-light-sage text-deep-teal rounded-full px-4 py-2 text-[13px] font-medium tracking-[0.04em] mb-6"
            >
              <Check className="w-4 h-4 text-soft-sage" />
              NABH Accredited since 2014
            </div>

            <h1
              ref={headlineRef}
              className="text-display text-deep-teal mb-6"
            >
              Compassionate Care for Every Generation
            </h1>

            <p
              ref={subRef}
              className="text-body-lg text-warm-charcoal/85 mb-8 max-w-xl"
            >
              Serving Noida with trusted, affordable multi-specialty healthcare for
              over 35 years. Founded in memory of Smt. Sumitra Devi.
            </p>

            <div ref={ctaRef} className="flex flex-wrap gap-4 mb-8">
              <a href="#contact" className="btn-primary">
                Book an Appointment
              </a>
              <a href="#doctors" className="btn-outline group">
                Meet Our Doctors
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div
              ref={trustRef}
              className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] font-medium text-warm-charcoal/60"
            >
              <span>24/7 Emergency</span>
              <span className="w-1 h-1 rounded-full bg-warm-charcoal/40" />
              <span>100 Beds</span>
              <span className="w-1 h-1 rounded-full bg-warm-charcoal/40" />
              <span>30,000 sq ft</span>
            </div>
          </div>

          {/* Image Column */}
          <div className="order-1 lg:order-2 relative">
            <div
              ref={imageRef}
              className="relative rounded-tl-[20px] rounded-tr-[80px] rounded-br-[20px] rounded-bl-[20px] overflow-hidden shadow-[0_24px_64px_rgba(11,90,90,0.12)]"
            >
              <img
                src="/assets/hero-doctor.jpg"
                alt="Professional doctor at Sumitra Hospital"
                className="w-full h-[400px] md:h-[500px] lg:h-[560px] object-cover"
              />
            </div>

            {/* Floating Card */}
            <div
              ref={floatRef}
              className="absolute -bottom-4 left-4 md:left-8 bg-warm-white rounded-2xl px-5 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.08)] flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-light-sage flex items-center justify-center">
                <Award className="w-5 h-5 text-soft-sage" />
              </div>
              <div>
                <div className="font-display font-bold text-[28px] md:text-[36px] text-gold-accent leading-none">
                  30+
                </div>
                <div className="text-[12px] font-medium text-warm-charcoal/70 mt-0.5">
                  Years of Excellence
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
