import { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Specialities', href: '#specialities' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-11 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-warm-white/95 backdrop-blur-md border-b border-deep-teal/10 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container-main h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-light-sage flex items-center justify-center">
            <Leaf className="w-5 h-5 text-soft-sage" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-semibold text-[22px] md:text-[24px] text-deep-teal leading-none">
              Sumitra
            </span>
            <span className="text-[11px] font-medium tracking-[0.04em] text-warm-charcoal/70 leading-none mt-0.5">
              Hospital & Research Centre
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative font-body font-medium text-[15px] tracking-[0.02em] text-deep-teal hover:text-soft-sage transition-colors group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-soft-sage transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a href="#contact" className="hidden md:inline-flex btn-blush">
            Book Appointment
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-deep-teal"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-warm-white border-t border-deep-teal/10 px-4 py-6 space-y-4 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block font-body font-medium text-[16px] text-deep-teal hover:text-soft-sage transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-blush w-full mt-2" onClick={() => setMobileOpen(false)}>
            Book Appointment
          </a>
        </div>
      )}
    </header>
  );
}
