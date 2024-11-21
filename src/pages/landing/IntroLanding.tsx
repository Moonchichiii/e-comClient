import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
    .from('.intro-text h1', {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "expo.out"
    }, "-=0.8")
    .from('.intro-text p', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "expo.out"
    }, "-=0.6")
    .to('.intro-text', {
      scale: 1.02,
      duration: 2,
      ease: "none",
      repeat: -1,
      yoyo: true
    });

    const handleTransition = () => {
      gsap.timeline()
        .to('.intro-glow', {
          scale: 1.5,
          opacity: 0,
          duration: 0.8,
          ease: "power2.inOut"
        })
        .to('.intro-text', {
          y: -50,
          opacity: 0,
          scale: 0.8,
          duration: 0.8,
          ease: "power2.inOut"
        }, "-=0.6")
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
    <div className="intro-container fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700">
      <div className="absolute inset-0">
        <div className="intro-glow absolute inset-0 bg-gradient-to-r from-white/20 via-indigo-400/20 to-violet-400/20 blur-3xl" />
      </div>
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
        <div className="intro-text relative text-center">
          <h1 className="font-abys text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter select-none">
            LuxeCommerce
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto select-none">
            Where Luxury Meets Innovation
          </p>
          <div className="mt-6 sm:mt-8 text-white/80 text-xs sm:text-sm animate-pulse-soft">
            Click anywhere to continue
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroLanding;