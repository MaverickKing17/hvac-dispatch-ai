
import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Wind } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Wind className="text-white w-6 h-6" />
            </div>
            <span className={`text-2xl font-black tracking-tighter ${scrolled ? 'text-blue-900' : 'text-white'}`}>
              GO-AIR
              <span className="text-blue-500">.</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className={`font-medium hover:text-blue-500 transition ${scrolled ? 'text-slate-600' : 'text-white'}`}>Services</a>
            <a href="#diagnostic" className={`font-medium hover:text-blue-500 transition ${scrolled ? 'text-slate-600' : 'text-white'}`}>AI Diagnostic</a>
            <a href="#reviews" className={`font-medium hover:text-blue-500 transition ${scrolled ? 'text-slate-600' : 'text-white'}`}>Reviews</a>
            <a 
              href="tel:9055550123" 
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-orange-500/30 transition transform hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 fill-current" />
              (905) 555-0123
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className={scrolled ? 'text-slate-900' : 'text-white'} /> : <Menu className={scrolled ? 'text-slate-900' : 'text-white'} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t p-4 space-y-4 shadow-xl">
          <a href="#services" onClick={() => setIsOpen(false)} className="block text-lg text-slate-600 font-medium">Services</a>
          <a href="#diagnostic" onClick={() => setIsOpen(false)} className="block text-lg text-slate-600 font-medium">AI Diagnostic</a>
          <a href="#reviews" onClick={() => setIsOpen(false)} className="block text-lg text-slate-600 font-medium">Reviews</a>
          <a href="tel:9055550123" className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-4 rounded-xl font-bold">
            <Phone className="w-5 h-5 fill-current" />
            Call Now: (905) 555-0123
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
