import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { Button } from '../ui/Button';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Bridal', path: '/bridal' },
  { name: 'Academy', path: '/academy' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          isScrolled 
            ? "bg-white/90 backdrop-blur-md shadow-sm py-3" 
            : "bg-gradient-to-b from-black/50 to-transparent py-5"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex flex-col items-center z-50">
              <span className={cn(
                "font-playfair text-xl md:text-2xl font-bold tracking-wider",
                isScrolled ? "text-primary" : "text-white"
              )}>
                HIS AND HER
              </span>
              <span className={cn(
                "font-cormorant text-xs md:text-sm tracking-[0.2em] uppercase",
                isScrolled ? "text-secondary" : "text-white/80"
              )}>
                Salon & Academy
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              <ul className="flex items-center gap-6">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className={cn(
                        "text-sm font-poppins font-medium transition-colors hover:text-secondary",
                        isScrolled ? "text-dark" : "text-white/90",
                        location.pathname === link.path && "text-secondary font-semibold"
                      )}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:07973117980" className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors hover:text-secondary",
                isScrolled ? "text-primary" : "text-white"
              )}>
                <Phone size={16} />
                <span>Call Now</span>
              </a>
              <Button size="sm" onClick={() => window.location.href = '/book'}>
                <Calendar size={16} className="mr-2" />
                Book Now
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className={cn(
                "lg:hidden p-2 z-50",
                isScrolled ? "text-dark" : "text-white"
              )}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} className="text-dark" /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-white z-40 lg:hidden flex flex-col pt-24 px-6 pb-6"
          >
            <nav className="flex-1 overflow-y-auto">
              <ul className="flex flex-col gap-6">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className={cn(
                        "text-2xl font-playfair transition-colors",
                        location.pathname === link.path ? "text-secondary font-semibold" : "text-primary"
                      )}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-8 flex flex-col gap-4 border-t border-gray-100 pt-6">
              <Button className="w-full" size="lg" onClick={() => window.location.href = '/book'}>
                Book Appointment
              </Button>
              <Button variant="outline" className="w-full" size="lg" onClick={() => window.location.href = 'tel:07973117980'}>
                <Phone size={18} className="mr-2" />
                07973117980
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
