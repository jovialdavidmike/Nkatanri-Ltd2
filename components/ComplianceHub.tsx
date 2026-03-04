import React from 'react';
import { FileText, Shield, Download, Lock } from 'lucide-react';

const ComplianceHub: React.FC = () => {
  return (
    <section id="compliance" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4 max-w-2xl">
            <span className="px-3 py-1 bg-forest-900/5 text-forest-900 text-xs font-bold uppercase tracking-widest rounded-full border border-forest-900/10">
              Compliance Hub
            </span>
            <h2 className="text-4xl font-serif font-bold text-forest-900">
              Technical Documentation
            </h2>
            <p className="text-gray-600 text-lg">
              Transparency is our currency. Access our standard Safety Data Sheets (SDS) and Certificate of Analysis (COA) templates.
            </p>
          </div>
          <div className="flex items-center gap-2 text-forest-900 font-medium bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
            <Shield className="w-5 h-5 text-gold-500" />
            <span>ISO 9001:2015 Compliant Processes</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Document Card 1 */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-gold-500/50 hover:shadow-lg transition-all group">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-forest-50 rounded-lg text-forest-900 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                <FileText className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-gray-400">PDF • 2.4 MB</span>
            </div>
            <h3 className="text-lg font-bold text-forest-900 mb-2">Safety Data Sheet (SDS)</h3>
            <p className="text-sm text-gray-500 mb-6">Standard safety specifications for Dried Split Ginger handling and storage.</p>
            <button className="w-full flex items-center justify-center gap-2 py-2 border border-gray-200 rounded-lg text-sm font-bold text-gray-600 hover:bg-gray-50 transition-colors">
              <Download className="w-4 h-4" /> Download Preview
            </button>
          </div>

          {/* Document Card 2 */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-gold-500/50 hover:shadow-lg transition-all group">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-forest-50 rounded-lg text-forest-900 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                <FileText className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-gray-400">PDF • 1.8 MB</span>
            </div>
            <h3 className="text-lg font-bold text-forest-900 mb-2">Certificate of Analysis (COA)</h3>
            <p className="text-sm text-gray-500 mb-6">Sample COA template showing our standard testing parameters for Cocoa Beans.</p>
            <button className="w-full flex items-center justify-center gap-2 py-2 border border-gray-200 rounded-lg text-sm font-bold text-gray-600 hover:bg-gray-50 transition-colors">
              <Download className="w-4 h-4" /> Download Preview
            </button>
          </div>

          {/* Restricted Access Card */}
          <div className="bg-forest-900 p-6 rounded-xl border border-forest-800 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Lock className="w-24 h-24" />
            </div>
            <div className="flex justify-between items-start mb-4 relative z-10">
              <div className="p-3 bg-white/10 rounded-lg text-gold-500">
                <Lock className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-white mb-2 relative z-10">Client Portal Access</h3>
            <p className="text-sm text-gray-400 mb-6 relative z-10">
              Existing clients can log in to view live shipment tracking and specific batch documentation.
            </p>
            <button className="w-full flex items-center justify-center gap-2 py-2 bg-gold-500 text-forest-950 rounded-lg text-sm font-bold hover:bg-gold-400 transition-colors relative z-10">
              Client Login
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceHub;
