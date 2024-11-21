import { Star, TrendingUp, Package, Clock } from 'lucide-react';

export const FeaturesSection = () => {
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

  return (
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
  );
};
