
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AIDiagnostic from './components/AIDiagnostic';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Call Bar for Mobile Conversion */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[60] p-4 bg-white border-t border-slate-100 flex gap-4">
        <a 
          href="tel:9055550123" 
          className="flex-1 bg-blue-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-xl shadow-blue-500/20 active:scale-95 transition"
        >
          Call Emergency Now
        </a>
      </div>

      <Navbar />
      
      <main>
        <Hero />
        
        {/* Trust Banner */}
        <div className="bg-slate-900 py-10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition duration-500">
              <span className="text-2xl font-black text-white italic">Carrier.</span>
              <span className="text-2xl font-black text-white italic">Trane.</span>
              <span className="text-2xl font-black text-white italic">Lennox.</span>
              <span className="text-2xl font-black text-white italic">Rheem.</span>
              <span className="text-2xl font-black text-white italic">York.</span>
              <span className="text-2xl font-black text-white italic">Goodman.</span>
            </div>
          </div>
        </div>

        <Services />
        
        {/* High Conversion Banner */}
        <div className="bg-blue-600 py-16">
          <div className="max-w-7xl mx-auto px-4 text-center text-white space-y-6">
            <h2 className="text-3xl md:text-5xl font-black">24/7 Emergency Repairs?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">Our trucks are fully stocked and roaming Mississauga right now. We fix 90% of issues on the first visit.</p>
            <a href="tel:9055550123" className="inline-block bg-white text-blue-600 px-10 py-5 rounded-2xl text-2xl font-black shadow-2xl transition hover:scale-105 active:scale-95">
              Call (905) 555-0123
            </a>
          </div>
        </div>

        <AIDiagnostic />
        
        <Reviews />

        {/* FAQ Preview / Simple Map CTA */}
        <section className="py-24 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 text-center">
             <h2 className="text-3xl font-black text-slate-900 mb-4">Serving Every Corner of Mississauga</h2>
             <p className="text-slate-500 mb-12">From Port Credit to Lisgar, Malton to Sheridan – we're your local experts.</p>
             <div className="h-96 w-full rounded-3xl bg-slate-200 overflow-hidden relative grayscale opacity-80">
                <img src="https://picsum.photos/id/164/1200/400" className="w-full h-full object-cover" alt="Map Area" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur p-8 rounded-3xl shadow-2xl">
                    <p className="text-xl font-bold text-slate-800">Dispatch Office: L5B 1B1</p>
                    <p className="text-blue-600 font-bold">15 Min Average Response Time</p>
                  </div>
                </div>
             </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
