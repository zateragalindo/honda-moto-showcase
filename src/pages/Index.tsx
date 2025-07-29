import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SellerProfile from '@/components/SellerProfile';
import Stories from '@/components/Stories';
import PostsFeed from '@/components/PostsFeed';
import BikeGrid from '@/components/BikeGrid';
import WorkGallery from '@/components/WorkGallery';
import Testimonials from '@/components/Testimonials';
import BikeModal from '@/components/BikeModal';
import ConsorcioModal from '@/components/ConsorcioModal';
import FinanciamentoModal from '@/components/FinanciamentoModal';
import Stats from '@/components/Stats';
import Footer from '@/components/Footer';
import { Bike } from '@/types/bike';

const Index = () => {
  const [selectedBike, setSelectedBike] = useState<Bike | null>(null);
  const [isBikeModalOpen, setIsBikeModalOpen] = useState(false);
  const [isConsorcioModalOpen, setIsConsorcioModalOpen] = useState(false);
  const [isFinanciamentoModalOpen, setIsFinanciamentoModalOpen] = useState(false);

  const handleBikeSelect = (bike: Bike) => {
    setSelectedBike(bike);
    setIsBikeModalOpen(true);
  };

  const handleConsorcioClick = (bike: Bike) => {
    setSelectedBike(bike);
    setIsBikeModalOpen(false);
    setIsConsorcioModalOpen(true);
  };

  const handleFinanciamentoClick = (bike: Bike) => {
    setSelectedBike(bike);
    setIsBikeModalOpen(false);
    setIsFinanciamentoModalOpen(true);
  };

  const closeAllModals = () => {
    setIsBikeModalOpen(false);
    setIsConsorcioModalOpen(false);
    setIsFinanciamentoModalOpen(false);
    setSelectedBike(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <SellerProfile />
      {/* <Stories />
      <PostsFeed /> */}
      <BikeGrid onBikeSelect={handleBikeSelect} />
      <WorkGallery />
      {/* <Testimonials /> */}
      <Stats />
      <Footer />

      {/* Modals */}
      <BikeModal
        bike={selectedBike}
        isOpen={isBikeModalOpen}
        onClose={closeAllModals}
        onConsorcioClick={handleConsorcioClick}
        onFinanciamentoClick={handleFinanciamentoClick}
      />

      <ConsorcioModal
        bike={selectedBike}
        isOpen={isConsorcioModalOpen}
        onClose={closeAllModals}
      />

      <FinanciamentoModal
        bike={selectedBike}
        isOpen={isFinanciamentoModalOpen}
        onClose={closeAllModals}
      />
    </div>
  );
};

export default Index;
