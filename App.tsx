import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import CommoditySection from './components/CommoditySection';
import CashewTable from './components/CashewTable';
import ComplianceHub from './components/ComplianceHub';
import RFQForm from './components/RFQForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Ginger', href: '#ginger' },
    { name: 'Cashews', href: '#cashews' },
    { name: 'Cocoa', href: '#cocoa' },
    { name: 'Hibiscus', href: '#hibiscus' },
    { name: 'Compliance', href: '#compliance' },
    { name: 'Contact', href: '#rfq' },
  ];

  return (
    <main className="w-full bg-white min-h-screen text-forest-950 font-sans selection:bg-gold-500 selection:text-white">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-forest-950/95 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
           {/* Logo */}
           <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center text-forest-950 font-serif font-bold text-xl shadow-lg shadow-gold-500/20">
               N
             </div>
             <span className={`font-serif font-bold text-xl tracking-tight ${isScrolled ? 'text-white' : 'text-white'}`}>
               Nkatanri <span className="text-gold-500">Ltd</span>
             </span>
           </div>

           {/* Desktop Menu */}
           <div className="hidden lg:flex gap-8 text-sm font-medium">
             {navLinks.map((link) => (
               <a 
                 key={link.name}
                 href={link.href} 
                 className={`transition-colors hover:text-gold-500 ${
                   isScrolled ? 'text-gray-300' : 'text-white/90'
                 }`}
               >
                 {link.name}
               </a>
             ))}
           </div>

           {/* CTA Button */}
           <div className="hidden lg:block">
             <a 
               href="#rfq" 
               className="bg-gold-500 hover:bg-gold-400 text-forest-950 text-xs font-bold px-6 py-3 rounded-lg transition-all shadow-lg shadow-gold-500/20"
             >
               B2B Portal
             </a>
           </div>

           {/* Mobile Menu Toggle */}
           <button 
             className="lg:hidden text-white"
             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
           >
             {mobileMenuOpen ? <X /> : <Menu />}
           </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-forest-950 border-t border-white/10 p-6 lg:hidden shadow-2xl">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-gold-500 font-medium py-2 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#rfq" 
                onClick={() => setMobileMenuOpen(false)}
                className="bg-gold-500 text-forest-950 font-bold py-3 rounded-lg text-center mt-4"
              >
                Access B2B Portal
              </a>
            </div>
          </div>
        )}
      </nav>

      <Hero />

      <CommoditySection 
        id="ginger"
        title="Nigerian Ginger"
        subtitle="The World's Spiciest & Most Oleoresin-Rich"
        description="Sourced directly from the rich soils of Kaduna, our ginger is globally renowned for its high pungency and exceptional oil content. We offer both Fresh and Dried Split forms, processed to meet international ASTA standards."
        specs={[
          { label: 'Moisture Content', value: '< 12%' },
          { label: 'Oil Content', value: '> 1.5%' },
          { label: 'Purity', value: '> 99%' },
          { label: 'Impurities', value: '< 2%' },
        ]}
        imageSeed="ginger"
      />

      <CashewTable />

      <CommoditySection 
        id="cocoa"
        title="Premium Cocoa Beans"
        subtitle="Criollo & Trinitario Varieties"
        description="Our Grade A Fermented Cocoa Beans are the choice of premium chocolatiers. Carefully fermented to unlock deep, complex chocolate notes suitable for high-end confectionery and cosmetic industrial use."
        specs={[
          { label: 'Bean Count', value: '< 100 / 100g' },
          { label: 'Moisture', value: '< 7.5%' },
          { label: 'Mold', value: '< 3%' },
          { label: 'Slate', value: '< 3%' },
        ]}
        imageSeed="cocoa"
        isReverse={true}
      />

      <CommoditySection 
        id="hibiscus"
        title="Dried Hibiscus Flower"
        subtitle="Deep Red, Whole Flower"
        description="Hand-picked at peak maturity and sun-dried to preserve its vibrant color and natural acidity. Our hibiscus is free from additives and perfect for herbal teas, extracts, and natural food coloring."
        specs={[
          { label: 'Moisture', value: '< 10%' },
          { label: 'Total Ash', value: '< 10%' },
          { label: 'Acid Insoluble Ash', value: '< 1.5%' },
          { label: 'Salmonella', value: 'Negative' },
        ]}
        imageSeed="hibiscus"
      />

      <ComplianceHub />
      <RFQForm />
      <Footer />
    </main>
  );
};

export default App;
