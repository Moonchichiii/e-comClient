// src/components/layout/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook as FacebookIcon, 
  Twitter as TwitterIcon, 
  Instagram as InstagramIcon, 
  Youtube as YoutubeIcon 
} from 'lucide-react';
import { cn } from '@/lib/utils';  // This is fine to use

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      href: '#', 
      icon: FacebookIcon, 
      label: 'Facebook'
    },
    { 
      href: '#', 
      icon: TwitterIcon, 
      label: 'Twitter'
    },
    { 
      href: '#', 
      icon: InstagramIcon, 
      label: 'Instagram'
    },
    { 
      href: '#', 
      icon: YoutubeIcon, 
      label: 'Youtube'
    }
  ] as const;

  const linkStyles = "block text-gray-300 hover:text-white transition-colors";

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Company</h3>
            <Link to="/about" className={linkStyles}>
              About Us
            </Link>
            <Link to="/careers" className={linkStyles}>
              Careers
            </Link>
            <Link to="/contact" className={linkStyles}>
              Contact
            </Link>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Shop</h3>
            <Link to="/products" className={linkStyles}>
              All Products
            </Link>
            <Link to="/featured" className={linkStyles}>
              Featured
            </Link>
            <Link to="/new" className={linkStyles}>
              New Arrivals
            </Link>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Customer Service</h3>
            <Link to="/faq" className={linkStyles}>
              FAQ
            </Link>
            <Link to="/shipping" className={linkStyles}>
              Shipping
            </Link>
            <Link to="/returns" className={linkStyles}>
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
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a 
                  key={label}
                  href={href} 
                  className={cn(
                    "text-gray-300 hover:text-white",
                    "transition-colors duration-200"
                  )}
                  onClick={(e) => e.preventDefault()}
                  aria-label={label}
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
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