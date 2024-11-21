import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Navigate } from 'react-router-dom';
import HeroSection from '../landing/components/Herosection';
import { FeaturesSection } from '../landing/components/FeaturesSection';
import { ProductsSection } from '../landing/components/ProductsSection';
import NewsletterSection from '../landing/components/NewsletterSection';

const HomePage = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="bg-white">
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <NewsletterSection />
    </div>
  );
};

export default HomePage;