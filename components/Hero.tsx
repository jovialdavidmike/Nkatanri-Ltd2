import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/logistics/1920/1080?blur=2" 
          alt="Global Logistics Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Forest Green Overlay (80% opacity) */}
      <div className="absolute inset-0 bg-forest-950/85 z-10"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mx-auto">
            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
            <span className="text-gold-500 text-xs font-bold uppercase tracking-widest">Global Trade Hub</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight tracking-tight">
            The Abuja <span className="text-gold-500">Standard</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
            Global Sourcing, Verified Quality. <br className="hidden md:block" />
            Connecting Nigerian abundance to UAE, Europe, India, and USA.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a 
              href="#products" 
              className="px-8 py-4 bg-gold-500 text-forest-950 font-bold rounded-lg hover:bg-gold-400 transition-all shadow-lg shadow-gold-500/20 w-full sm:w-auto"
            >
              View Commodities
            </a>
            <a 
              href="#rfq" 
              className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-lg hover:bg-white/5 transition-all w-full sm:w-auto flex items-center justify-center gap-2 group"
            >
              Start Procurement
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Stats Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute bottom-10 left-0 w-full px-6 hidden md:block"
        >
          <div className="max-w-5xl mx-auto grid grid-cols-4 gap-8 border-t border-white/10 pt-8">
            <div>
              <p className="text-3xl font-mono font-bold text-white">4+</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Key Commodities</p>
            </div>
            <div>
              <p className="text-3xl font-mono font-bold text-white">12%</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Max Moisture</p>
            </div>
            <div>
              <p className="text-3xl font-mono font-bold text-white">99%</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Purity Guaranteed</p>
            </div>
            <div>
              <p className="text-3xl font-mono font-bold text-white">24/7</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Logistics Support</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
