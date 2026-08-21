import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeatureBar } from './components/FeatureBar';
import { Products } from './components/Products';
import { WhyChoose } from './components/WhyChoose';
import { FlavorsSection } from './components/FlavorsSection';
import { QualityRibbon } from './components/QualityRibbon';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';

export const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState({
    product: 'ROF PRE LEVEL 7',
    size: '60 SERVINGS',
    flavor: 'TANGY ORANGE',
    price: '₹2,499',
  });

  const handleOpenOrderModal = (
    product = 'ROF PRE LEVEL 7',
    size = '60 SERVINGS',
    flavor = 'TANGY ORANGE',
    price = '₹2,499'
  ) => {
    setModalConfig({ product, size, flavor, price });
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#060b18] text-white flex flex-col font-body selection:bg-blue-600 selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenOrderModal={handleOpenOrderModal} />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenOrderModal={handleOpenOrderModal} />

        {/* Feature Ribbon 1 */}
        <FeatureBar />

        {/* Products Section */}
        <Products onOpenOrderModal={handleOpenOrderModal} />

        {/* Why Choose ROF Nutrition (ROF Advantage) */}
        <WhyChoose />

        {/* Flavors Section (Creative Flavor Showcase) */}
        <FlavorsSection onOpenOrderModal={handleOpenOrderModal} />

        {/* Quality & Science Ribbon */}
        <QualityRibbon />

        {/* CTA Banner */}
        <CtaSection onOpenOrderModal={handleOpenOrderModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Order Modal */}
      <OrderModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialProduct={modalConfig.product}
        initialSize={modalConfig.size}
        initialFlavor={modalConfig.flavor}
        initialPrice={modalConfig.price}
      />
    </div>
  );
};

export default App;
