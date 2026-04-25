import { Leaf, Facebook, Twitter, Instagram, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const quickLinks = [
  'Home',
  'About Us',
  'Specialities',
  'Doctors',
  'Facilities',
  'Contact',
];

const departments = [
  'Cardiology',
  'Critical Care',
  'General Surgery',
  'Gynaecology',
  'Orthopaedic',
  'Paediatrics',
  'Dental',
  'ENT',
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-dark-teal pt-16 md:pt-20 pb-8">
      <div className="container-main">
        <div className="grid md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-10 lg:gap-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-light-sage/20 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-soft-sage" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-semibold text-[24px] text-warm-white leading-none">
                  Sumitra
                </span>
                <span className="text-[11px] font-medium tracking-[0.04em] text-warm-white/60 leading-none mt-0.5">
                  Hospital & Research Centre
                </span>
              </div>
            </div>
            <p className="text-[15px] text-warm-white/75 leading-relaxed mb-6 max-w-sm">
              Serving Noida with compassionate, affordable, multi-specialty
              healthcare since 1987. NABH Accredited.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, href: 'https://www.facebook.com/sumitrahospitalnoida/' },
                { icon: Twitter, href: 'https://twitter.com/HospitalSumitra' },
                { icon: Instagram, href: 'https://www.instagram.com/sumitrahospital_/' },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-warm-white/10 flex items-center justify-center text-warm-white hover:bg-warm-white/20 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body font-semibold text-[16px] text-warm-white mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-[15px] text-warm-white/70 hover:text-warm-white hover:translate-x-1 transition-all inline-flex items-center"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h4 className="font-body font-semibold text-[16px] text-warm-white mb-5">
              Departments
            </h4>
            <ul className="space-y-3">
              {departments.map((dept) => (
                <li key={dept}>
                  <span className="text-[15px] text-warm-white/70">
                    {dept}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body font-semibold text-[16px] text-warm-white mb-5">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-warm-white/60 mt-0.5 shrink-0" />
                <p className="text-[15px] text-warm-white/80 leading-relaxed">
                  A–119–A, Sector 35, Noida, Uttar Pradesh 201301
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-warm-white/60 shrink-0" />
                <a
                  href="tel:+919810448328"
                  className="text-[15px] text-warm-white/80 hover:text-gold-accent transition-colors"
                >
                  +91 98104 48328
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-warm-white/60 shrink-0" />
                <a
                  href="mailto:info@sumitrahospital.com"
                  className="text-[15px] text-warm-white/80 hover:text-gold-accent transition-colors"
                >
                  info@sumitrahospital.com
                </a>
              </div>
              <a
                href="https://www.google.com/maps?ll=28.581004,77.353388&z=14&t=m&hl=en&gl=IN&mapclient=embed&cid=5822797184233380995"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[13px] font-medium text-gold-accent hover:underline underline-offset-2 mt-2"
              >
                Get Directions
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-warm-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-warm-white/50">
            © 2024 Sumitra Hospital. All rights reserved.
          </p>
          <p className="text-[13px] text-warm-white/50">
            NABH Accredited • NABL Accredited Lab
          </p>
        </div>
      </div>
    </footer>
  );
}
