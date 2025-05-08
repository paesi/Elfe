import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { NavButton } from './navigation/NavButton';
import { MobileNavButton } from './navigation/MobileNavButton';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo_Elfe.jpg';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-background text-primary shadow-md fixed w-full z-50">
      <div className="py-2">
        <div className="container mx-auto px-4 flex justify-end items-center space-x-4">
          <a href="tel:+41797356059" className="flex items-center space-x-2 hover:text-highlight">
            <Phone size={16} />
            <span>+41 79 602 18 12</span>
          </a>
          <a href="mailto:info@epexon.com" className="flex items-center space-x-2 hover:text-highlight">
            <Mail size={16} />
            <span>info@steinbruch.be</span>
          </a>
        </div>
      </div>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <button onClick={() => scrollToSection('hero')} className="flex items-center space-x-2">
            <img src={Logo} alt="Logo" className="h-14 w-auto" />
          </button>

          <div className="hidden md:flex space-x-6">
            <NavButton onClick={() => scrollToSection('hero')}>Home</NavButton>
            <NavButton onClick={() => scrollToSection('elfe')}>Elfe</NavButton>
            <NavButton onClick={() => scrollToSection('steinbruch')}>Steinbruch</NavButton>
            <NavButton onClick={() => scrollToSection('verein')}>Der Verein</NavButton>
            <NavButton onClick={() => scrollToSection('#contact')}>Kontakt</NavButton>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <MobileNavButton onClick={() => scrollToSection('hero')}>Home</MobileNavButton>
            <MobileNavButton onClick={() => scrollToSection('elfe')}>Elfe</MobileNavButton>
            <MobileNavButton onClick={() => scrollToSection('steinbruch')}>Steinbruch</MobileNavButton>
            < MobileNavButton onClick={() => scrollToSection('verein')}>Der Verein</MobileNavButton>
            <MobileNavButton onClick={() => scrollToSection('contact')}>Kontakt</MobileNavButton>
          </div>
        )}
      </nav>
    </header>
  );
}

