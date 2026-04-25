import { Phone, MapPin } from 'lucide-react';

export default function AnnouncementBar() {
  return (
    <div className="bg-deep-teal text-warm-white h-11 flex items-center">
      <div className="container-main flex items-center justify-between text-[13px] font-medium tracking-[0.04em]">
        <a
          href="tel:+919810448328"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Phone className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">24/7 Emergency:</span>
          <span>+91 98104 48328</span>
        </a>
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5" />
          <span className="hidden md:inline">
            A–119–A, Sector 35, Noida, U.P. 201301
          </span>
          <span className="md:hidden">Sector 35, Noida</span>
        </div>
      </div>
    </div>
  );
}
