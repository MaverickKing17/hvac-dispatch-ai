
import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';

const reviews = [
  {
    author: "Robert T.",
    location: "Mississauga, ON",
    text: "Go-Air saved us when our furnace died in -20C weather. They were here within 2 hours. Very professional and fair pricing!",
    rating: 5,
    date: "Jan 2024"
  },
  {
    author: "Sarah Jenkins",
    location: "Streetsville",
    text: "Switched to a hybrid heat pump system on Go-Air's recommendation. The installation was clean and we're already seeing energy savings.",
    rating: 5,
    date: "March 2024"
  },
  {
    author: "Mike Thompson",
    location: "Port Credit",
    text: "Best HVAC company in Mississauga. I've used them for my home and office. Honest guys who don't push unnecessary repairs.",
    rating: 5,
    date: "April 2024"
  }
];

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Customer Proof</h2>
            <p className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Mississauga's Highest Rated HVAC Team</p>
            <div className="flex items-center gap-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />)}
              </div>
              <span className="text-2xl font-black text-slate-800">4.9/5</span>
              <span className="text-slate-400 font-medium">based on 520+ Google Reviews</span>
            </div>
          </div>
          <a href="#" className="hidden md:block bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition">
            Read All Reviews
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative">
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-0.5">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter ml-auto">{review.date}</span>
              </div>
              <p className="text-slate-600 italic leading-relaxed mb-8">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4 border-t pt-6 border-slate-200">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                  {review.author[0]}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 flex items-center gap-2">
                    {review.author}
                    <CheckCircle2 className="w-4 h-4 text-blue-500 fill-blue-500/20" />
                  </h4>
                  <p className="text-xs text-slate-400 font-medium">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
