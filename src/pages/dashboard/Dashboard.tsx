import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Search } from 'lucide-react'; 

const brands = ["Brand1", "Brand2", "Brand3"]; 

const DashboardPage: React.FC = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(".brand-scroll", {
      xPercent: -100,
      repeat: -1,
      duration: 20,
      ease: "none"
    });

    if (searchRef.current) {
      gsap.from(searchRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.8,
        ease: "expo.out"
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container py-6">
          <div ref={searchRef} className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search products, brands, and more..."
              className="w-full h-12 pl-12 pr-4 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>
      </header>

      <div ref={brandsRef} className="py-12 bg-white overflow-hidden">
        <div className="brand-scroll flex gap-8 whitespace-nowrap">
          {/* Duplicate for seamless loop */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-8">
              {brands.map((brand, index) => (
                <span key={index} className="text-2xl font-bold text-gray-300">
                  {brand}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Rest of dashboard content */}
    </div>
  );
};

export default DashboardPage;