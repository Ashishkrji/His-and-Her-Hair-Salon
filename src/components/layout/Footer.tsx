import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '../ui/Button';

export function Footer() {
  return (
    <footer className="bg-[#1A1516] text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div>
            <h3 className="font-playfair text-2xl mb-6 tracking-wide text-secondary">HIS AND HER</h3>
            <p className="text-gray-400 font-poppins text-sm mb-6 leading-relaxed">
              Premium Salon, Bridal Studio & Professional Beauty Academy in Ludhiana. Where beauty meets perfection, setting new standards in luxury grooming and makeup.
            </p>
            <div className="flex gap-4">
              <a href="http://www.instagram.com/hisandherhairsalon" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-xl mb-6 border-b border-white/10 pb-4 inline-block">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {['Home', 'About Us', 'Services', 'Gallery', 'Testimonials'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-secondary transition-colors text-sm font-poppins flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Academy */}
          <div>
            <h4 className="font-playfair text-xl mb-6 border-b border-white/10 pb-4 inline-block">Our Expertise</h4>
            <ul className="flex flex-col gap-3">
              {['Bridal Makeup', 'Hair Styling', 'Skin Treatments', 'Academy Courses', 'Nail Art'].map((item) => (
                <li key={item}>
                  <Link to={`/services`} className="text-gray-400 hover:text-secondary transition-colors text-sm font-poppins flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-playfair text-xl mb-6 border-b border-white/10 pb-4 inline-block">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3 text-gray-400 text-sm font-poppins items-start">
                <MapPin size={18} className="text-secondary shrink-0 mt-0.5" />
                <span>4185, Dhandra Rd, Phase II, LIG, Urban Estate Dugri, Ludhiana, Punjab 141001</span>
              </li>
              <li className="flex gap-3 text-gray-400 text-sm font-poppins">
                <Phone size={18} className="text-secondary shrink-0" />
                <a href="tel:07973117980" className="hover:text-white transition-colors">07973117980</a>
              </li>
              <li className="flex gap-3 text-gray-400 text-sm font-poppins">
                <Clock size={18} className="text-secondary shrink-0" />
                <span>Mon - Sun: 10:00 AM – 8:00 PM</span>
              </li>
            </ul>
            <div className="mt-8">
              <Button size="sm" variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white" onClick={() => window.location.href = '/book'}>
                Book Appointment
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm font-poppins">
            &copy; {new Date().getFullYear()} His and Her Hair Salon & Academy. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy" className="text-gray-500 hover:text-white text-sm font-poppins">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-500 hover:text-white text-sm font-poppins">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
