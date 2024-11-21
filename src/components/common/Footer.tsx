// components/layout/Footer.tsx
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Company</h3>
            <Link to="/about" className="block text-gray-300 hover:text-white">
              About Us
            </Link>
            <Link to="/careers" className="block text-gray-300 hover:text-white">
              Careers
            </Link>
            <Link to="/contact" className="block text-gray-300 hover:text-white">
              Contact
            </Link>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Shop</h3>
            <Link to="/products" className="block text-gray-300 hover:text-white">
              All Products
            </Link>
            <Link to="/featured" className="block text-gray-300 hover:text-white">
              Featured
            </Link>
            <Link to="/new" className="block text-gray-300 hover:text-white">
              New Arrivals
            </Link>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Customer Service</h3>
            <Link to="/faq" className="block text-gray-300 hover:text-white">
              FAQ
            </Link>
            <Link to="/shipping" className="block text-gray-300 hover:text-white">
              Shipping
            </Link>
            <Link to="/returns" className="block text-gray-300 hover:text-white">
              Returns
            </Link>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Stay Connected</h3>
            <p className="text-gray-300">
              Subscribe to our newsletter for updates and exclusive offers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;