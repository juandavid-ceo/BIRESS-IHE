
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import VisionMission from './components/VisionMission';
import Services from './components/Services';
import OurFocus from './components/OurFocus';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <VisionMission />
        <Services />
        <OurFocus />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
