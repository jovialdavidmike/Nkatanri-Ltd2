import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { FormStatus } from '../types';

const RFQForm: React.FC = () => {
  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(FormStatus.SUBMITTING);
    // Simulate API call
    setTimeout(() => {
      setStatus(FormStatus.SUCCESS);
    }, 2000);
  };

  return (
    <section id="rfq" className="py-20 relative overflow-hidden bg-forest-950">
      {/* Decorative BG */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-forest-900/40 skew-x-12 transform origin-top"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto glass-panel rounded-2xl p-8 md:p-12 shadow-2xl shadow-black/50 border border-gold-500/10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif text-white mb-3">Partner with Nkatanri</h2>
            <p className="text-gray-400">
              Request a quote today. Our team typically responds with a Proforma Invoice within 24 hours.
            </p>
          </div>

          {status === FormStatus.SUCCESS ? (
             <div className="flex flex-col items-center justify-center py-12 text-center">
               <div className="w-16 h-16 bg-forest-800 rounded-full flex items-center justify-center mb-6 border border-gold-500/50">
                 <Send className="text-gold-500" size={32} />
               </div>
               <h3 className="text-2xl font-serif text-white mb-2">Request Received</h3>
               <p className="text-gray-300">Thank you for your interest. We will be in touch shortly.</p>
               <button 
                 onClick={() => setStatus(FormStatus.IDLE)}
                 className="mt-6 text-gold-500 hover:text-gold-400 underline font-medium"
               >
                 Send another request
               </button>
             </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-gold-500 font-bold">Company Name</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="Enter company name"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-gold-500 font-bold">Contact Email</label>
                  <input 
                    required 
                    type="email" 
                    placeholder="procurement@company.com"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-gold-500 font-bold">Product Interest</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all appearance-none">
                    <option className="bg-forest-900 text-gray-300">Select a product...</option>
                    <option className="bg-forest-900 text-white" value="ginger">Split Dried Ginger</option>
                    <option className="bg-forest-900 text-white" value="cashew">Cashew Nuts (RCN)</option>
                    <option className="bg-forest-900 text-white" value="cocoa">Cocoa Beans</option>
                    <option className="bg-forest-900 text-white" value="hibiscus">Dried Hibiscus Flower</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-gold-500 font-bold">Volume (MT)</label>
                  <input 
                    type="number" 
                    placeholder="e.g. 20"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-gold-500 font-bold">Additional Requirements</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell us about your destination port, specific quality parameters (e.g. ASTA), or preferred Incoterms."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === FormStatus.SUBMITTING}
                className="w-full py-4 bg-gold-500 text-forest-950 font-bold rounded-lg shadow-lg hover:bg-gold-400 hover:shadow-gold-500/20 transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === FormStatus.SUBMITTING ? (
                  <>
                    <Loader2 className="animate-spin" /> Processing...
                  </>
                ) : (
                  <>
                    Request Quote <Send size={18} />
                  </>
                )}
              </button>
              
              <p className="text-center text-xs text-gray-500 mt-4">
                By submitting, you agree to our privacy policy. Your data is secure.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default RFQForm;