// pages/landing/IntroLanding.tsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';

const IntroLanding = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        navigate('/home', { replace: true });
      }
    });

    tl.from('.intro-text', {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out"
    })
    .to('.intro-text', {
      y: -50,
      opacity: 0,
      delay: 1.5,
      duration: 0.5,
      ease: "power4.in"
    })
    .to('.intro-container', {
      opacity: 0,
      duration: 0.3
    });
  }, [navigate]);

  return (
    <div className="intro-container min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white">
      <div className="text-center space-y-6 intro-text">
        <h1 className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-500">
          LuxeCommerce
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
          Where Luxury Meets Convenience
        </p>
      </div>
    </div>
  );
};

export default IntroLanding;