import React from 'react';
import { CheckCircle, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

interface Spec {
  label: string;
  value: string;
}

interface CommoditySectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  specs: Spec[];
  imageSeed: string;
  isReverse?: boolean;
}

const CommoditySection: React.FC<CommoditySectionProps> = ({
  id,
  title,
  subtitle,
  description,
  specs,
  imageSeed,
  isReverse = false,
}) => {
  return (
    <section id={id} className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex flex-col ${isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
          
          {/* Content */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-gold-500/10 text-gold-600 text-xs font-bold uppercase tracking-widest rounded-full border border-gold-500/20">
                  Premium Export Grade
                </span>
                <span className="flex items-center gap-1 text-forest-800 text-xs font-bold uppercase tracking-widest">
                  <Leaf className="w-3 h-3" /> Verified
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest-900 leading-tight">
                {title}
              </h2>
              <p className="text-xl text-gold-600 font-medium font-serif italic">
                {subtitle}
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                {description}
              </p>
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {specs.map((spec, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-gold-500/30 transition-colors">
                  <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">{spec.label}</p>
                    <p className="text-forest-900 font-mono font-medium">{spec.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a href="#rfq" className="inline-flex items-center justify-center px-8 py-4 bg-forest-900 text-white font-bold rounded-lg hover:bg-forest-800 transition-all shadow-lg shadow-forest-900/20 group">
                Request Quote
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 w-full">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-forest-900/10 group">
              <div className="absolute inset-0 bg-forest-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src={`https://picsum.photos/seed/${imageSeed}/800/600`} 
                alt={title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg border border-gray-100">
                <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Origin</p>
                <p className="text-forest-900 font-serif font-bold text-lg">Nigeria, West Africa</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CommoditySection;
