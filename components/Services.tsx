
import React from 'react';
import { Snowflake, Flame, Activity, Zap, HardHat, Droplets } from 'lucide-react';

const services = [
  {
    icon: <Snowflake className="w-10 h-10" />,
    title: "Air Conditioning",
    description: "Expert repairs, preventative maintenance, and high-efficiency A/C installations to keep you cool all summer.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: <Flame className="w-10 h-10" />,
    title: "Furnace Repair",
    description: "Fast diagnosis and repairs for all gas furnace brands. Ensure your home stays warm through Mississauga winters.",
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: <Activity className="w-10 h-10" />,
    title: "Ductless Systems",
    description: "Modern, energy-efficient solutions for homes without traditional ductwork. Zoning control for every room.",
    color: "bg-emerald-100 text-emerald-600"
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: "IAQ Solutions",
    description: "Breathe cleaner air with HEPA filters, UV air purifiers, and humidity control for optimal health.",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: <Droplets className="w-10 h-10" />,
    title: "Heat Pumps",
    description: "Hybrid heating and cooling systems that save up to 50% on energy bills. Rebates available now.",
    color: "bg-cyan-100 text-cyan-600"
  },
  {
    icon: <HardHat className="w-10 h-10" />,
    title: "Maintenance",
    description: "Comprehensive multi-point inspections to prevent break-downs and extend the life of your HVAC systems.",
    color: "bg-slate-100 text-slate-600"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Our Services</h2>
          <p className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Complete Comfort Solutions For Your Home</p>
          <p className="text-lg text-slate-500">From emergency midnight repairs to seasonal tune-ups, Go-Air has the tools and expertise to handle any HVAC challenge.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-3xl border border-slate-100 hover:border-blue-200 bg-slate-50 hover:bg-white transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className={`${service.color} p-4 rounded-2xl w-fit mb-6 transition group-hover:scale-110`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="tel:9055550123" className="text-blue-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <span>&rarr;</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
