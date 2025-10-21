import AppBar from './components/AppBar';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import Specializations from './components/Specializations';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import FeeEstimation from './components/FeeEstimation';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="font-sans" dir="rtl">
      {/* Navigation */}
      <AppBar />

      {/* Main Content */}
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="achievements">
          <Achievements />
        </section>
        
        <section id="specializations">
          <Specializations />
        </section>
        
        <section id="services">
          <Services />
        </section>
        
        <section id="why-us">
          <WhyUs />
        </section>
        
        <section id="fee-estimation">
          <FeeEstimation />
        </section>
        
        <section id="location">
          <Location />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
