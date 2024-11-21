import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

const IntroLanding: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Set initial states manually
    gsap.set(['.intro-logo', '.intro-tagline', '.intro-cta'], {
      opacity: 0,
      y: 50
    });

    const tl = gsap.timeline({
      delay: 0.2,
      onComplete: () => {
        setTimeout(handleTransition, 3500);
      }
    });

    // Simpler animation sequence
    tl.to('.intro-logo', {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power2.out"
    })
    .to('.intro-tagline', {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power2.out"
    }, "-=0.5")
    .to('.intro-cta', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5");

    const handleTransition = () => {
      const exitTl = gsap.timeline({
        onComplete: () => navigate('/home', { replace: true })
      });

      exitTl
        .to(['.intro-logo', '.intro-tagline', '.intro-cta'], {
          opacity: 0,
          y: -30,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.inOut"
        })
        .to('.intro-container', {
          opacity: 0,
          duration: 0.3
        });
    };

    const handleClick = () => {
      tl.kill();
      handleTransition();
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
      tl.kill();
    };
  }, [navigate]);

  return (
    <div className="intro-container fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700">
      
      <div className="intro-glow absolute inset-0 bg-gradient-to-r from-white/20 via-indigo-400/20 to-violet-400/20 blur-3xl" />
      
      
      <div className="relative z-20 w-full max-w-4xl mx-auto px-4 sm:px-6 py-12">
      
        <h1 className="intro-logo select-none font-abys text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-6 tracking-tighter">
          E-Commerce
        </h1>
        
      
        <p className="intro-tagline select-none text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 font-light max-w-2xl mx-auto mb-8">
          Where Luxury Meets Innovation
        </p>
        
      
        <div className="intro-cta select-none text-sm sm:text-base md:text-lg text-white/80 animate-pulse">
          Click anywhere to continue
        </div>
      </div>
    </div>
  );
};

export default IntroLanding;