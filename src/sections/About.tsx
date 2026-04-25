import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';

export default function About() {
  useScrollReveal('.about-reveal', { y: 30, stagger: 0.12 });
  useScrollReveal('.about-image', { y: 20, x: 20, duration: 0.8 });

  return (
    <section id="about" className="bg-warm-white section-padding">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="about-image relative">
            <div className="rounded-[20px] overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.1)]">
              <img
                src="/assets/hospital-building.jpg"
                alt="Sumitra Hospital Building"
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
            </div>
            <div className="absolute top-4 right-4 bg-blush-rose text-deep-teal rounded-lg px-4 py-2.5 text-[13px] font-semibold tracking-[0.04em] shadow-sm">
              Est. 1987
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="about-reveal text-caption text-soft-sage block mb-3">
              About Us
            </span>
            <h2 className="about-reveal text-h1 text-deep-teal mb-6">
              A Legacy of Care, Built on Compassion
            </h2>

            <div className="space-y-4 text-body-lg text-warm-charcoal/85">
              <p className="about-reveal">
                Sumitra Hospital is a multi-specialty 100-bedded NABH-accredited
                hospital located at Sector 35, Noida — just steps from Noida City
                Centre Metro Station. We provide advanced medical and surgical care
                with the highest standards of quality, at prices that remain
                accessible to all.
              </p>
              <p className="about-reveal">
                Founded by Dr. V.K. Gupta, a renowned practicing pediatrician of
                Noida, in loving memory of his mother Late Smt. Sumitra Devi, our
                hospital has been serving every strata of society with dedication
                and compassion since 1987.
              </p>
              <p className="about-reveal">
                Spread across 30,000 sq. ft. of modern infrastructure, we house
                dedicated, qualified, and compassionate staff committed to
                patient-centered care.
              </p>
            </div>

            <a
              href="#specialities"
              className="about-reveal inline-flex items-center gap-2 mt-8 font-body font-semibold text-[15px] text-soft-sage hover:text-deep-teal transition-colors group"
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
