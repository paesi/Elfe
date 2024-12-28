import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Configurator from './components/configurator/Configurator';
import Imprint from './pages/Imprint';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import { SEO } from './components/SEO';
import { GoogleAnalytics } from './components/analytics/GoogleAnalytics';
import ThankYouPage from './components/pages/ThankYouPage';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <SEO />
          <GoogleAnalytics />
          <Header />
          
          <Routes>
            <Route path="/" element={
              <main className="flex-grow pt-[104px]">
                <Hero />
                <ServicesSection />
                <Configurator />
                <WhyChooseUs />
                <Contact />
              </main>
            } />
            <Route path="/imprint" element={<Imprint />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}
