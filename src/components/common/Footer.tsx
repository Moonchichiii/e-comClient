import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FooterLinks {
  company: Array<{ to: string; label: string }>;
  shop: Array<{ to: string; label: string }>;
  service: Array<{ to: string; label: string }>;
  social: Array<{ href: string; icon: React.ComponentType; label: string }>;
}

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  const links: FooterLinks = {
    company: [
      { to: "/about", label: "About Us" },
      { to: "/careers", label: "Careers" },
      { to: "/contact", label: "Contact" },
    ],
    shop: [
      { to: "/products", label: "All Products" },
      { to: "/featured", label: "Featured" },
      { to: "/new", label: "New Arrivals" },
    ],
    service: [
      { to: "/faq", label: "FAQ" },
      { to: "/shipping", label: "Shipping" },
      { to: "/returns", label: "Returns" },
    ],
    social: [
      { href: '#', icon: Twitter, label: 'X' },
      { href: '#', icon: Instagram, label: 'Instagram' },
    ],
  } as const;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4 text-center sm:text-left">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Company</h3>
            {links.company.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Shop</h3>
            {links.shop.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Customer Service</h3>
            {links.service.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Social */}
          <div className="space-y-4 col-span-2 sm:col-span-1">
            <h3 className="text-lg font-bold">Stay Connected</h3>
            <p className="text-gray-300">
              Follow us on social media for updates
            </p>
            <div className="flex justify-center sm:justify-start space-x-4">
              {links.social.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
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
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-center">
            &copy; {currentYear} LuxeCommerce. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
