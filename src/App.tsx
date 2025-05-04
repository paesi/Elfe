import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Elfe from './pages/Elfe';
import Steinbruch from './pages/Steinbruch';
import Verein from './pages/Verein';
import Contact from './components/Contact';
import Imprint from './pages/Imprint';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import { SEO } from './components/SEO';
import { GoogleAnalytics } from './components/analytics/GoogleAnalytics';
import ThankYouPage from './pages/ThankYouPage';

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
        <Contact />
      </main>
    } />
    <Route path="/elfe" element={<Elfe />} />
    <Route path="/steinbruch" element={<Steinbruch />} />
    <Route path="/verein" element={<Verein />} />
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
