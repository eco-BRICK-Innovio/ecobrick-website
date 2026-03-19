import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Linkedin,
  ArrowLeft,
  Send,
  CheckCircle2,
  Factory
} from 'lucide-react';

const App = () => {
  const [formState, setFormState] = useState('idle'); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('sending');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900 pb-12 text-left" dir="ltr">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-blue-600 p-2.5 rounded-xl shadow-lg shadow-blue-200">
              <Factory className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl tracking-tight leading-none">
                <span className="text-blue-500 font-light">eco</span>
                <span className="text-blue-900 font-black ml-1">BRICK</span>
                <span className="text-blue-600 font-medium italic ml-1">Innovio</span>
              </h1>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mt-1">Sustainable Infrastructure</span>
            </div>
          </div>
          <a href="/Financial-Pitch/index.html" className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors text-sm font-semibold">
            <ArrowLeft className="w-4 h-4" /> Back to Financial Pitch
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pt-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-slate-900 mb-4">Get in Touch</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Ready to partner with eco BRICK Innovio? Whether you're an investor, municipality, or potential partner, we're ready to start the conversation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
            <div className="bg-blue-50 p-4 rounded-2xl mb-4">
              <Mail className="text-blue-600 w-6 h-6" />
            </div>
            <h4 className="font-bold text-slate-800 mb-1">Email Us</h4>
            <a href="mailto:office@ecobrick.tech" className="text-sm text-blue-600 hover:underline">office@ecobrick.tech</a>
          </div>
          
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center text-center text-left">
            <div className="bg-blue-50 p-4 rounded-2xl mb-4">
              <Linkedin className="text-blue-600 w-6 h-6" />
            </div>
            <h4 className="font-bold text-slate-800 mb-1">LinkedIn</h4>
            <a href="https://www.linkedin.com/company/ecobrick-innovio" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">eco BRICK Innovio</a>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
            <div className="bg-blue-50 p-4 rounded-2xl mb-4">
              <MapPin className="text-blue-600 w-6 h-6" />
            </div>
            <h4 className="font-bold text-slate-800 mb-1">Our Location</h4>
            <p className="text-sm text-slate-500">Israel Strategic Hub</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 bg-blue-900 text-white">
              <h3 className="text-2xl font-bold mb-6">Partner with the Future of Construction</h3>
              <p className="text-blue-100 opacity-80 mb-8 leading-relaxed">
                Join us in scaling waste-to-asset infrastructure. Our team is dedicated to industrial-scale circular economy solutions.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-white/10 p-2 rounded-lg"><CheckCircle2 className="w-5 h-5 text-blue-400" /></div>
                  <p className="text-sm">Strategic Industrial Partnerships</p>
                </div>
                <div className="flex gap-4">
                  <div className="bg-white/10 p-2 rounded-lg"><CheckCircle2 className="w-5 h-5 text-blue-400" /></div>
                  <p className="text-sm">Municipal Waste Management</p>
                </div>
                <div className="flex gap-4">
                  <div className="bg-white/10 p-2 rounded-lg"><CheckCircle2 className="w-5 h-5 text-blue-400" /></div>
                  <p className="text-sm">Industrial Site Licensing</p>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              {formState === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center transition-all animate-in fade-in zoom-in duration-500">
                  <div className="bg-green-100 p-4 rounded-full mb-6">
                    <CheckCircle2 className="w-12 h-12 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Message Sent!</h3>
                  <p className="text-slate-500 mb-8">Thank you for reaching out. A team member will contact you shortly.</p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="text-blue-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Enter your name"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="you@company.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Message</label>
                    <textarea 
                      required
                      rows="4"
                      placeholder="How can we help you?"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    disabled={formState === 'sending'}
                    className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-2 ${formState === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {formState === 'sending' ? 'Sending...' : (
                      <>
                        Send Message <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-slate-200 text-center">
          <p className="text-slate-400 text-xs">© 2026 eco BRICK Innovio. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
