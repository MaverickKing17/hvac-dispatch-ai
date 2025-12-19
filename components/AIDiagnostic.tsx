
import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, User, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import { getDiagnosticResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIDiagnostic: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "Hi! I'm your AI Diagnostic assistant for Go-Air. Describe the issue you're having with your heating or cooling system, and I'll help you identify potential causes." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await getDiagnosticResponse(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <section id="diagnostic" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold">
              <Sparkles className="w-4 h-4" />
              Next-Gen HVAC Assistance
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Not Sure What's Wrong? <br />
              <span className="text-blue-600">Try Our AI Diagnostic Tool.</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Describe your problem—like weird noises, leaking water, or poor airflow. Our smart assistant uses expert knowledge to provide immediate insights before our technician arrives.
            </p>
            <div className="bg-orange-50 border border-orange-100 p-6 rounded-2xl flex gap-4">
              <div className="bg-orange-500 p-3 rounded-full h-fit">
                <AlertCircle className="text-white w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-orange-900 mb-1">Safety First</h4>
                <p className="text-orange-800/80 text-sm">
                  If you smell gas or see smoke, do not use this tool. Evacuate immediately and call our emergency line.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[600px] border border-slate-200">
            {/* Header */}
            <div className="bg-slate-900 p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-blue-500 p-2 rounded-xl">
                  <Bot className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold leading-none">Smart Assistant</h3>
                  <p className="text-blue-400 text-xs mt-1">Available 24/7</p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-green-500 text-[10px] font-bold uppercase tracking-widest">Live</span>
              </div>
            </div>

            {/* Chat Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex gap-3 max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`p-2 rounded-full h-fit ${m.role === 'user' ? 'bg-blue-600' : 'bg-slate-200'}`}>
                      {m.role === 'user' ? <User className="text-white w-4 h-4" /> : <Bot className="text-slate-600 w-4 h-4" />}
                    </div>
                    <div className={`p-4 rounded-2xl text-sm leading-relaxed ${m.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none shadow-blue-500/10' : 'bg-white text-slate-700 rounded-tl-none border border-slate-100 shadow-sm shadow-slate-200/50'}`}>
                      {m.content.split('\n').map((line, idx) => (
                        <p key={idx} className={idx > 0 ? 'mt-2' : ''}>{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-3 items-center bg-white border border-slate-100 p-4 rounded-2xl shadow-sm">
                    <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
                    <span className="text-xs font-medium text-slate-500">Analyzing your issue...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="p-4 bg-white border-t">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="e.g. My A/C is blowing warm air..."
                  className="w-full pl-4 pr-14 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm outline-none"
                />
                <button 
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 top-2 bottom-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white px-4 rounded-xl transition-all flex items-center justify-center shadow-lg shadow-blue-500/20"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDiagnostic;
