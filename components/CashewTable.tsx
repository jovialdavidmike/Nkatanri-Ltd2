import React from 'react';
import { Scale, CheckCircle2 } from 'lucide-react';

const CashewTable: React.FC = () => {
  return (
    <section id="cashews" className="py-24 bg-forest-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-3 py-1 bg-gold-500/20 text-gold-500 text-xs font-bold uppercase tracking-widest rounded-full border border-gold-500/30">
            Raw Cashew Nuts (RCN)
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold">
            Technical Specification <span className="text-gold-500">Comparison</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We prioritize Kernel Outturn Ratio (KOR) testing to ensure maximum yield for processors.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* W240 Card */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-gold-500/50 transition-colors group">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-3xl font-serif font-bold text-white">W240</h3>
                <p className="text-gold-500 font-medium">Premium Grade</p>
              </div>
              <div className="p-3 bg-gold-500/10 rounded-lg text-gold-500">
                <Scale className="w-6 h-6" />
              </div>
            </div>
            <ul className="space-y-4">
              <li className="flex justify-between items-center py-3 border-b border-white/5">
                <span className="text-gray-400">Nut Count</span>
                <span className="font-mono font-bold">220-240 / lb</span>
              </li>
              <li className="flex justify-between items-center py-3 border-b border-white/5">
                <span className="text-gray-400">Moisture</span>
                <span className="font-mono font-bold">&lt; 10%</span>
              </li>
              <li className="flex justify-between items-center py-3 border-b border-white/5">
                <span className="text-gray-400">Defective</span>
                <span className="font-mono font-bold">&lt; 8%</span>
              </li>
              <li className="flex justify-between items-center py-3 border-b border-white/5">
                <span className="text-gray-400">KOR</span>
                <span className="font-mono font-bold text-gold-500">48-50 lbs</span>
              </li>
            </ul>
          </div>

          {/* W320 Card */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-gold-500/50 transition-colors group">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-3xl font-serif font-bold text-white">W320</h3>
                <p className="text-gold-500 font-medium">Standard Grade</p>
              </div>
              <div className="p-3 bg-gold-500/10 rounded-lg text-gold-500">
                <Scale className="w-6 h-6" />
              </div>
            </div>
            <ul className="space-y-4">
              <li className="flex justify-between items-center py-3 border-b border-white/5">
                <span className="text-gray-400">Nut Count</span>
                <span className="font-mono font-bold">300-320 / lb</span>
              </li>
              <li className="flex justify-between items-center py-3 border-b border-white/5">
                <span className="text-gray-400">Moisture</span>
                <span className="font-mono font-bold">&lt; 10%</span>
              </li>
              <li className="flex justify-between items-center py-3 border-b border-white/5">
                <span className="text-gray-400">Defective</span>
                <span className="font-mono font-bold">&lt; 10%</span>
              </li>
              <li className="flex justify-between items-center py-3 border-b border-white/5">
                <span className="text-gray-400">KOR</span>
                <span className="font-mono font-bold text-gold-500">46-48 lbs</span>
              </li>
            </ul>
          </div>

          {/* KOR Process Info */}
          <div className="bg-gold-500 text-forest-950 rounded-2xl p-8 shadow-xl shadow-gold-500/10">
            <h3 className="text-2xl font-serif font-bold mb-4">Our KOR Testing Process</h3>
            <p className="mb-6 font-medium opacity-90">
              We don't guess. Every batch undergoes rigorous Kernel Outturn Ratio testing before shipment.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm font-bold">Random Sampling Methodology</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm font-bold">Moisture Meter Verification</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm font-bold">Cutting Test for Defect Rate</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm font-bold">Pre-Shipment Inspection Report</span>
              </li>
            </ul>
            <div className="mt-8 pt-6 border-t border-forest-900/10">
              <p className="text-xs uppercase tracking-widest font-bold mb-1 opacity-70">Guaranteed Yield</p>
              <p className="text-3xl font-mono font-bold">98% Accuracy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CashewTable;
