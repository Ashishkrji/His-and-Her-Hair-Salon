import React from 'react';
import { motion } from 'motion/react';

// Custom WhatsApp SVG Icon
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
    <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.115.549 4.175 1.593 5.996L.38 22.421l4.521-1.185A11.968 11.968 0 0012.031 24c6.646 0 12.031-5.385 12.031-12.031S18.677 0 12.031 0zm0 21.984a9.92 9.92 0 01-5.067-1.385l-.364-.216-3.36.88.896-3.276-.236-.376a9.92 9.92 0 01-1.428-5.184c0-5.513 4.487-10 10-10 5.513 0 10 4.487 10 10s-4.487 10-10 10zM17.53 14.492c-.302-.15-1.785-.882-2.062-.982-.276-.1-.477-.15-.678.15s-.78 1.054-.98 1.255c-.201.201-.402.226-.703.076-2.031-1.026-3.418-2.607-3.953-3.525-.115-.195-.013-.306.136-.456.136-.135.302-.352.452-.527.15-.176.201-.302.302-.502.1-.2.05-.376-.025-.527-.076-.15-.678-1.632-.93-2.235-.245-.59-.493-.51-.678-.52h-.578c-.2 0-.527.075-.803.376-.276.301-1.054 1.029-1.054 2.51s1.079 2.91 1.23 3.11c.15.2 2.115 3.228 5.12 4.499.715.301 1.272.482 1.706.617.717.226 1.37.193 1.884.117.575-.084 1.785-.729 2.036-1.433.251-.704.251-1.306.176-1.433-.075-.126-.276-.201-.578-.352z" />
  </svg>
);

export function WhatsAppFAB() {
  return (
    <div className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-[100] flex items-center justify-center">
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></span>
      <motion.a
        href="https://wa.me/917973117980"
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-[#1ebd5c] hover:shadow-2xl transition-all group cursor-pointer border-2 border-white/20"
      >
        <WhatsAppIcon />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-gray-900 text-white text-sm font-poppins font-medium px-4 py-2 rounded-lg shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 translate-x-2 group-hover:translate-x-0 whitespace-nowrap hidden md:block">
          Chat with an Expert
          {/* Arrow */}
          <span className="absolute top-1/2 -mt-1.5 -right-1.5 border-l-[6px] border-l-gray-900 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent"></span>
        </span>
      </motion.a>
    </div>
  );
}
