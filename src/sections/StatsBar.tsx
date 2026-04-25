import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { number: 30, suffix: '+', label: 'Years of Service' },
  { number: 100, suffix: '', label: 'Bed Capacity' },
  { number: 25, suffix: '+', label: 'Specialties' },
  { number: 24, suffix: '/7', label: 'Emergency Care' },
];

export default function StatsBar() {
  const sectionRef = useRef<HTMLElement>(null);
  const numbersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      numbersRef.current.forEach((el, i) => {
        if (!el) return;
        const target = stats[i].number;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            once: true,
          },
          onUpdate: () => {
            el.textContent = Math.round(obj.val) + stats[i].suffix;
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-deep-teal py-12 md:py-14">
      <div className="container-main">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center ${
                i < stats.length - 1
                  ? 'md:border-r md:border-warm-white/15'
                  : ''
              }`}
            >
              <div className="font-display font-bold text-[40px] md:text-[48px] lg:text-[56px] text-gold-accent leading-none">
                <span ref={(el) => { numbersRef.current[i] = el; }}>0{stat.suffix}</span>
              </div>
              <div className="text-[13px] font-medium text-warm-white/80 mt-2 tracking-[0.04em]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
