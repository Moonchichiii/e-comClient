import { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      // Show consent after a short delay
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setShowConsent(false);
    // Here you would initialize your analytics and other cookie-dependent services
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem('cookieConsent', 'necessary');
    setShowConsent(false);
    // Here you would only initialize essential cookies
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 inset-x-0 z-50 p-4"
        >
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                {/* Cookie Icon */}
                <div className="shrink-0">
                  <motion.div
                    animate={{
                      rotate: [0, -10, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                    className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center"
                  >
                    <Cookie className="w-6 h-6 text-indigo-600" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    We value your privacy
                  </h3>
                  <p className="text-gray-600">
                    We use cookies to enhance your browsing experience, serve personalized content, 
                    and analyze our traffic. These include essential cookies for site functionality 
                    and Google Analytics for site improvement. By clicking "Accept All", you consent 
                    to our use of cookies.
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
                  <Button
                    variant="ghost"
                    className="text-gray-500 hover:text-gray-700"
                    onClick={handleAcceptNecessary}
                  >
                    Necessary Only
                  </Button>
                  <Button
                    className="bg-indigo-600 text-white hover:bg-indigo-700"
                    onClick={handleAcceptAll}
                  >
                    Accept All
                  </Button>
                </div>

                {/* Close button */}
                <button
                  onClick={() => setShowConsent(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;