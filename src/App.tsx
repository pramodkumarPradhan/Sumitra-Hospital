import AnnouncementBar from '@/sections/AnnouncementBar';
import Navigation from '@/sections/Navigation';
import Hero from '@/sections/Hero';
import StatsBar from '@/sections/StatsBar';
import About from '@/sections/About';
import Specialities from '@/sections/Specialities';
import Team from '@/sections/Team';
import WhyChooseUs from '@/sections/WhyChooseUs';
import Testimonials from '@/sections/Testimonials';
import AppointmentCTA from '@/sections/AppointmentCTA';
import Footer from '@/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-warm-cream">
      <AnnouncementBar />
      <Navigation />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Specialities />
        <Team />
        <WhyChooseUs />
        <Testimonials />
        <AppointmentCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
