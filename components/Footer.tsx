
import React from 'react';
import { Wind, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 space-y-8">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Wind className="text-white w-8 h-8" />
              </div>
              <span className="text-3xl font-black tracking-tighter">
                GO-AIR
                <span className="text-blue-500">.</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed text-lg">
              Mississauga's trusted choice for heating, cooling, and air quality since 1998. Available 24/7 for all your home comfort needs.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-slate-800 p-3 rounded-xl hover:bg-blue-600 transition"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="bg-slate-800 p-3 rounded-xl hover:bg-blue-600 transition"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="bg-slate-800 p-3 rounded-xl hover:bg-blue-600 transition"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#services" className="hover:text-blue-400 transition">Our Services</a></li>
              <li><a href="#diagnostic" className="hover:text-blue-400 transition">AI Diagnostic</a></li>
              <li><a href="#reviews" className="hover:text-blue-400 transition">Customer Reviews</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8">Get In Touch</h4>
            <ul className="space-y-6 text-slate-400">
              <li className="flex gap-4">
                <Phone className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <span>(905) 555-0123</span>
              </li>
              <li className="flex gap-4">
                <Mail className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <span>emergency@go-air.ca</span>
              </li>
              <li className="flex gap-4">
                <MapPin className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <span>123 Tech Drive, <br />Mississauga, ON L5B 1B1</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Go-Air Heating & A/C. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs font-bold text-slate-500 uppercase tracking-widest">
            <span>TSSA LICENSED</span>
            <span>HRAI MEMBER</span>
            <span>WSIB INSURED</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
