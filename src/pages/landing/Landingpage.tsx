import React from 'react';
import { Star, TrendingUp, Package, Clock } from 'lucide-react';

const LandingPage = () => {
  const features = [
    {
      icon: <Star className="w-6 h-6 text-indigo-600" />,
      title: "Premium Quality",
      description: "Hand-picked products meeting our highest standards"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-indigo-600" />,
      title: "Latest Trends",
      description: "Stay ahead with our curated collections"
    },
    {
      icon: <Package className="w-6 h-6 text-indigo-600" />,
      title: "Free Shipping",
      description: "On orders above $50 worldwide"
    },
    {
      icon: <Clock className="w-6 h-6 text-indigo-600" />,
      title: "24/7 Support",
      description: "Expert assistance whenever you need"
    }
  ];

  const products = [
    {
      name: "Premium Watch",
      price: "$299",
      image: "/api/placeholder/300/400"
    },
    {
      name: "Designer Bag",
      price: "$199",
      image: "/api/placeholder/300/400"
    },
    {
      name: "Luxury Sunglasses",
      price: "$149",
      image: "/api/placeholder/300/400"
    },
    {
      name: "Classic Shoes",
      price: "$249",
      image: "/api/placeholder/300/400"
    }
  ];

  return (
    <div className="bg-white">
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
            <p className="mt-4 text-lg text-gray-600">Experience shopping like never before</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
            <p className="mt-4 text-lg text-gray-600">Discover our most popular items</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <h3 className="text-white text-xl font-semibold">{product.name}</h3>
                    <p className="text-white/90">{product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-lg text-indigo-100 mb-8">Subscribe to our newsletter for exclusive offers and updates</p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;