import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  Clock,
  FlaskConical,
  Users,
  Award,
  HeartPulse,
  MapPin,
} from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: '24/7 Emergency Services',
    desc: 'Round-the-clock emergency care with rapid response teams, fully equipped trauma bays, and immediate access to specialists.',
  },
  {
    icon: FlaskConical,
    title: 'NABL Accredited Lab',
    desc: 'In-house diagnostic laboratory accredited by NABL, ensuring accurate and timely test results for informed treatment decisions.',
  },
  {
    icon: Users,
    title: 'Affordable Care for All',
    desc: 'We believe quality healthcare is a right, not a privilege. Our services are priced to remain accessible to every section of society.',
  },
  {
    icon: Award,
    title: 'NABH Accredited',
    desc: 'National Accreditation Board for Hospitals & Healthcare Providers accreditation reflects our commitment to patient safety and quality.',
  },
  {
    icon: HeartPulse,
    title: 'Patient-Centered Approach',
    desc: 'Compassionate, trained staff dedicated to making every patient feel heard, respected, and cared for at every step.',
  },
  {
    icon: MapPin,
    title: 'Prime Location',
    desc: 'Conveniently located opposite Wave City Centre, Sector 35, Noida — easily accessible by metro and road.',
  },
];

export default function WhyChooseUs() {
  useScrollReveal('.feature-card', { y: 20, scale: 0.95, stagger: 0.1 });

  return (
    <section className="bg-deep-teal section-padding">
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-caption text-gold-accent block mb-3">
            Why Sumitra
          </span>
          <h2 className="text-h1 text-warm-white max-w-[600px] mx-auto">
            Healthcare That Puts Patients First
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-[1080px] mx-auto">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="feature-card bg-warm-white/5 border border-warm-white/10 rounded-[20px] p-8 md:p-10 transition-all duration-300 hover:bg-warm-white/10 hover:-translate-y-1"
              >
                <Icon className="w-10 h-10 text-gold-accent mb-5" />
                <h3 className="font-body font-semibold text-[18px] text-warm-white mb-3">
                  {feat.title}
                </h3>
                <p className="text-[15px] text-warm-white/75 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
