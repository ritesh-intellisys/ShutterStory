import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedWeddings from './components/FeaturedWeddings';
import WhyWorkWithUs from './components/WhyWorkWithUs';
import MemoriesSection from './components/MemoriesSection';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <FeaturedWeddings />
      <WhyWorkWithUs />
      <MemoriesSection />
      <Testimonials />
      <Services />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;