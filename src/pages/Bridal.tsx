import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { Star, Sparkles, Heart } from 'lucide-react';

export default function Bridal() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-primary/5 py-20 mb-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <img src="https://images.unsplash.com/photo-1543168256-4154204eb8c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="background pattern" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl text-primary font-semibold mb-4"
          >
            Bridal Makeup Studio
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 font-poppins max-w-2xl mx-auto"
          >
            Your perfect day deserves perfect beauty. Walk down the aisle with absolute confidence.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-700 font-poppins leading-relaxed space-y-6"
          >
            <h2 className="font-playfair text-3xl md:text-4xl text-primary font-semibold mb-6 flex items-center gap-3">
              <Sparkles className="text-secondary" /> The Royal Bridal Experience
            </h2>
            <p>
              At His and Her Salon, we understand that bridal makeup is an intimate art. It's about capturing your essence and enhancing your absolute best features for the cameras and for the memories that will last a lifetime.
            </p>
            <p>
              Our signature bridal packages are tailored uniquely to each bride, integrating HD & Airbrush techniques to ensure flawless, long-lasting, and sweat-resistant makeup that looks spectacular both in person and on film.
            </p>
            <div className="pt-6 border-t border-gray-100 flex flex-wrap gap-4">
              <Button size="lg" onClick={() => window.location.href = '/book'}>
                Book Bridal Consultation
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <img src="https://images.unsplash.com/photo-1594950711105-02dd80f2dca5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Bridal Detail 1" className="w-full h-64 object-cover rounded-xl rounded-tr-[4rem]" />
            <img src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Bridal Detail 2" className="w-full h-64 object-cover rounded-xl rounded-bl-[4rem] mt-8" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
