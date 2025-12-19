
import React from 'react';
import { ShieldCheck, Clock, Star, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://picsum.photos/id/122/1920/1080)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-blue-900/80 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8 animate-in fade-in duration-1000">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 px-4 py-2 rounded-full text-blue-200 font-semibold text-sm backdrop-blur-md">
              <MapPin className="w-4 h-4" />
              Serving Mississauga & Greater Toronto Area
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
              A/C Broken? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">
                We'll Fix It Today.
              </span>
            </h1>

            <p className="text-xl text-blue-100 max-w-lg leading-relaxed font-light">
              Don't sweat the Mississauga heat. Go-Air provides 24/7 emergency HVAC repairs with 5-star service you can trust. Licensed, bonded, and ready now.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:9055550123" className="flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-5 rounded-xl text-xl font-bold shadow-2xl shadow-orange-500/40 transition-all hover:scale-105 active:scale-95">
                Call Emergency Repair
              </a>
              <a href="#diagnostic" className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-5 rounded-xl text-xl font-bold transition-all">
                Free AI Diagnostic
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-blue-400 w-8 h-8" />
                <span className="text-sm font-medium">TSSA Certified</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-blue-400 w-8 h-8" />
                <span className="text-sm font-medium">24/7 Service</span>
              </div>
              <div className="flex items-center gap-3 hidden sm:flex">
                <Star className="text-yellow-400 w-8 h-8 fill-yellow-400" />
                <span className="text-sm font-medium">500+ Reviews</span>
              </div>
            </div>
          </div>

          {/* Lead Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl relative">
            <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-6 py-2 rounded-full font-bold shadow-lg animate-bounce">
              Save 10% Today
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Get a Free Instant Quote</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" placeholder="(905) 555-0123" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Service Type</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                  <option>A/C Repair</option>
                  <option>Furnace Repair</option>
                  <option>New Installation</option>
                  <option>Maintenance Tune-up</option>
                </select>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-lg transition shadow-xl shadow-blue-600/20 mt-4">
                Send My Quote Request
              </button>
              <p className="text-xs text-center text-slate-400 mt-4">
                By clicking, you agree to be contacted via phone/text. We value your privacy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
