import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  Heart,
  Activity,
  Scissors,
  Baby,
  Bone,
  Stethoscope,
  Smile,
  Ear,
  Brain,
  Droplets,
  Shield,
  MessageCircle,
  ArrowRight,
} from 'lucide-react';

const allSpecialities = [
  {
    title: 'Cardiology (Non-Invasive)',
    desc: 'Advanced cardiac diagnostics and non-invasive treatments for heart conditions.',
    icon: Heart,
  },
  {
    title: 'Critical Care',
    desc: '24×7 intensive care with life support systems and expert critical care teams.',
    icon: Activity,
  },
  {
    title: 'General Surgery',
    desc: 'Minimally invasive and conventional surgical procedures with precision.',
    icon: Scissors,
  },
  {
    title: 'Obstetrics & Gynaecology',
    desc: 'Complete mother and child care, from prenatal to postnatal services.',
    icon: Baby,
  },
  {
    title: 'Orthopaedic',
    desc: 'Joint replacements, fracture care, and sports injury rehabilitation.',
    icon: Bone,
  },
  {
    title: 'Paediatrics & Neonatology',
    desc: 'Specialized care for infants, children, and adolescents.',
    icon: Stethoscope,
  },
  {
    title: 'Dental',
    desc: 'Complete oral health services including cosmetic and surgical dentistry.',
    icon: Smile,
  },
  {
    title: 'ENT',
    desc: 'Diagnosis and treatment of ear, nose, throat, and head-neck disorders.',
    icon: Ear,
  },
  {
    title: 'Neurology',
    desc: 'Comprehensive care for neurological conditions and disorders.',
    icon: Brain,
  },
  {
    title: 'Nephrology',
    desc: 'Kidney care, dialysis services, and renal health management.',
    icon: Droplets,
  },
  {
    title: 'Urology',
    desc: 'Treatment of urinary tract and male reproductive system conditions.',
    icon: Shield,
  },
  {
    title: 'Psychiatry',
    desc: 'Mental health awareness programs, counseling, and rehabilitation services.',
    icon: MessageCircle,
  },
];

export default function Specialities() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? allSpecialities : allSpecialities.slice(0, 6);

  useScrollReveal('.spec-card', { y: 30, stagger: 0.08 });

  return (
    <section id="specialities" className="bg-warm-cream section-padding">
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-caption text-soft-sage block mb-3">
            Our Services
          </span>
          <h2 className="text-h1 text-deep-teal mb-4">
            Comprehensive Multi-Specialty Care
          </h2>
          <p className="text-body-lg text-warm-charcoal/80 max-w-[640px] mx-auto">
            From routine check-ups to complex procedures, our departments are
            equipped with modern technology and experienced specialists.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visible.map((spec) => {
            const Icon = spec.icon;
            return (
              <div
                key={spec.title}
                className="spec-card bg-warm-white rounded-[20px] p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(11,90,90,0.1)] group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full bg-light-sage flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-soft-sage">
                  <Icon className="w-6 h-6 text-soft-sage transition-colors duration-300 group-hover:text-warm-white" />
                </div>
                <h3 className="font-body font-semibold text-[18px] text-deep-teal mb-2">
                  {spec.title}
                </h3>
                <p className="text-[15px] text-warm-charcoal/75 leading-relaxed">
                  {spec.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn-outline group"
          >
            {showAll ? 'Show Less' : 'View All Specialities'}
            <ArrowRight
              className={`w-4 h-4 ml-2 transition-transform ${
                showAll ? 'rotate-90' : 'group-hover:translate-x-1'
              }`}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
