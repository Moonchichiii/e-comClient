import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

const IntroLanding: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => handleTransition()
    });

    tl.from('.intro-glow', {
      opacity: 0,
      scale: 0.8,
      duration: 1.5,
      ease: "power4.out"
    })
    .from('.intro-logo', {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "expo.out"
    }, "-=0.8")
    .from('.intro-tagline', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "expo.out"
    }, "-=0.6")
    .from('.intro-cta', {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "expo.out"
    }, "-=0.4");

    const handleTransition = () => {
      gsap.timeline()
        .to('.intro-content', {
          y: -30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.inOut"
        })
        .to('.intro-container', {
          opacity: 0,
          duration: 0.5,
          onComplete: () => navigate('/home', { replace: true })
        }, "-=0.3");
    };

    const handleClick = () => {
      tl.kill();
      handleTransition();
    };

    const autoTransition = setTimeout(() => {
      handleTransition();
    }, 4000);

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
      clearTimeout(autoTransition);
      tl.kill();
    };
  }, [navigate]);

  return (
    <div className="intro-container fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700">
      <div className="intro-glow absolute inset-0 bg-gradient-to-r from-white/20 via-indigo-400/20 to-violet-400/20 blur-3xl" />
      
      <div className="intro-content relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
        <h1 className="intro-logo font-abys text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-6 tracking-tighter">
          LuxeCommerce
        </h1>
        
        <p className="intro-tagline text-xl sm:text-2xl md:text-3xl text-white/90 font-light max-w-2xl mx-auto mb-8">
          Where Luxury Meets Innovation
        </p>
        
        <div className="intro-cta text-white/80 text-base sm:text-lg animate-pulse-soft">
          Click anywhere to continue
        </div>
      </div>
    </div>
  );
};

export default IntroLanding;