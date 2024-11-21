import React, { useEffect, useRef } from 'react';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out"
    })
    .from(subtitleRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.5")
    .from(ctaRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.5,
      ease: "back.out(1.7)"
    }, "-=0.3")
    .from(imageRef.current, {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.8");
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:text-left">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1
              ref={titleRef}
              className="text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-500"
            >
              Discover Your Style, Elevate Your Life
            </h1>
            <p
              ref={subtitleRef}
              className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0"
            >
              Experience luxury shopping reimagined. Find exclusive collections curated just for you.
            </p>
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                type="button"
                className="px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors"
              >
                Shop Now
                <ShoppingCart className="w-5 h-5" />
              </button>
              <button 
                type="button"
                className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-indigo-50 transition-colors"
              >
                View Collections
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div
            ref={imageRef}
            className="relative h-64 lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="/api/placeholder/600/600"
              alt="Featured Collection"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
              <p className="text-white text-xl font-semibold">New Arrivals</p>
              <p className="text-white/80">Spring Collection 2024</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;