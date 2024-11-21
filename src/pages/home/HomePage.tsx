import { useAuth } from '@/hooks/useAuth';
import { Navigate } from 'react-router-dom';
import HeroSection from '@/pages/landing/components/HeroSection';
import { FeaturesSection } from '@/pages/landing/components/FeaturesSection';
import { ProductsSection } from '@/pages/landing/components/ProductsSection';
import CookieConsent from '@/pages/landing/components/CookieConsent';

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
      <CookieConsent />
    </div>
  );
};

export default HomePage;