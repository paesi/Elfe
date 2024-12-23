import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import Imprint from './components/Imprint';
import Terms from './components/Terms';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow pt-[104px]">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <ServicesSection />
                <WhyChooseUs />
                <Contact />
              </>
            } />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/imprint" element={<Imprint />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
