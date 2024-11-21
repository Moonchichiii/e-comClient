import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Mail, Github } from 'lucide-react';
import { cn } from '@/lib/utils';


const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    company: [
      { to: "/about", label: "About Us" },
      { to: "/careers", label: "Careers" },
      { to: "/contact", label: "Contact" }
    ],
    shop: [
      { to: "/products", label: "All Products" },
      { to: "/featured", label: "Featured" },
      { to: "/new", label: "New Arrivals" }
    ],
    service: [
      { to: "/faq", label: "FAQ" },
      { to: "/shipping", label: "Shipping" },
      { to: "/returns", label: "Returns" }
    ],
    social: [
      { href: '#', icon: MessageSquare, label: 'Message' },
      { href: '#', icon: Mail, label: 'Mail' },
      { href: '#', icon: Github, label: 'Github' }
    ]
  } as const;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Stay Connected</h3>
            <p className="text-gray-300">
              Subscribe to our newsletter for updates and exclusive offers.
            </p>
            <div className="flex space-x-4">
              {links.social.map(({ href, icon: Icon, label }) => (
                
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