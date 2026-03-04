import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-forest-950 text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-serif font-bold text-white mb-4">
              Nkatanri <span className="text-gold-500">Ltd</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-sm mb-6">
              Your trusted partner for sourcing premium Nigerian agricultural commodities. 
              We are dedicated to sustainability, transparency, and B2B excellence.
            </p>
            <div className="flex gap-4">
               {/* Social placeholders */}
               <div className="w-8 h-8 rounded bg-white/10 hover:bg-gold-500 transition-colors cursor-pointer"></div>
               <div className="w-8 h-8 rounded bg-white/10 hover:bg-gold-500 transition-colors cursor-pointer"></div>
               <div className="w-8 h-8 rounded bg-white/10 hover:bg-gold-500 transition-colors cursor-pointer"></div>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gold-500 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-gold-400 transition-colors">Home</a></li>
              <li><a href="#ginger" className="hover:text-gold-400 transition-colors">Ginger</a></li>
              <li><a href="#cashews" className="hover:text-gold-400 transition-colors">Cashews</a></li>
              <li><a href="#cocoa" className="hover:text-gold-400 transition-colors">Cocoa</a></li>
              <li><a href="#compliance" className="hover:text-gold-400 transition-colors">Compliance</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gold-500 mb-4">Contact</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-gold-500 shrink-0" size={16} />
                <span>12 Export Way, Apapa Port Complex, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-gold-500 shrink-0" size={16} />
                <span>export@nkatanri.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-gold-500 shrink-0" size={16} />
                <span>+234 800 NKATANRI</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Nkatanri Ltd. All rights reserved.</p>
          <p>Export License #NEPC/001/2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;