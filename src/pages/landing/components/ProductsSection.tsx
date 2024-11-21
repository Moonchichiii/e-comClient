export const ProductsSection = () => {
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
    );
  };
  