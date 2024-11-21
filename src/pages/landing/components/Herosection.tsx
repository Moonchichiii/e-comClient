import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

const HeroSection = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRefs = {
    title: useRef<HTMLHeadingElement>(null),
    subtitle: useRef<HTMLParagraphElement>(null),
    cta: useRef<HTMLDivElement>(null),
    image: useRef<HTMLDivElement>(null)
  };

  useEffect(() => {
    gsap.set([contentRefs.title.current, contentRefs.subtitle.current, contentRefs.cta.current], {
      opacity: 0,
      y: 50
    });
    gsap.set(contentRefs.image.current, { opacity: 0, scale: 0.95 });
  
    const tl = gsap.timeline({ defaults: { ease: "expo.out" }});
  
    tl.to([contentRefs.title.current, contentRefs.subtitle.current, contentRefs.cta.current], {
      opacity: 1,
      y: 0,
      duration: 1.2,
      stagger: 0.1
    })
    .to(contentRefs.image.current, {
      opacity: 1,
      scale: 1,
      duration: 1.4,
    }, "-=0.8");
  
    return () => tl.kill();
  }, []);
  
  // Updated return JSX for better responsiveness
  return (
    <main ref={heroRef} className="min-h-[100dvh] bg-gradient-to-br from-gray-50 via-white to-indigo-50/30 relative overflow-hidden pt-20">
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 lg:py-20">
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <h1
              ref={contentRefs.title}
              className="font-abys text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-800 to-violet-700"
            >
              Discover Your Style, Elevate Your Life
            </h1>
            <p
              ref={contentRefs.subtitle}
              className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0"
            >
              Experience luxury shopping reimagined. Find exclusive collections curated just for you.
            </p>
            <div ref={contentRefs.cta} className="space-x-4 flex justify-center lg:justify-start">
              <Button
                onClick={() => navigate('/products')}
                className="px-8 py-6 bg-indigo-600 hover:bg-indigo-700 transition-all duration-300"
              >
                Explore Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate('/signup')}
                className="px-8 py-6 hover:bg-indigo-50 transition-all duration-300"
              >
                Join Now
              </Button>
            </div>
          </div>
          <div
            ref={contentRefs.image}
            className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
          >
            <img
              src="/api/placeholder/600/600"
              alt="Featured Collection"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
              <div className="absolute bottom-8 left-8">
                <p className="text-white text-2xl font-semibold">New Arrivals</p>
                <p className="text-white/80 text-lg">Spring Collection 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;