import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';

export default function About() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Header */}
      <section className="bg-primary/5 py-20 mb-20 text-center">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl text-primary font-semibold mb-4"
          >
            About Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 font-poppins max-w-2xl mx-auto"
          >
            Discover the passion, expertise, and luxury behind Ludhiana's most prestigious salon and beauty academy.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Salon Interior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <h3 className="font-playfair text-xl text-primary font-bold mb-2">Since 2015</h3>
                  <p className="text-sm font-poppins text-gray-700">Transforming visions of beauty into reality with over a decade of excellence.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-3xl md:text-4xl text-primary font-semibold mb-6">Our Journey Towards Perfection</h2>
            <div className="space-y-6 text-gray-600 font-poppins leading-relaxed">
              <p>
                Founded in the heart of Ludhiana, His and Her Hair Salon & Academy began with a singular vision: to create a sanctuary where luxury meets expertise. We have grown from a boutique salon into a premier destination for comprehensive beauty services and professional education.
              </p>
              <p>
                Our philosophy is simple—we believe every client deserves undivided attention, premium products, and techniques tailored to their unique features. Whether you're here for an everyday transformation or your most special day, our expertly trained professionals ensure absolute perfection.
              </p>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {[
                  "Premium International Products",
                  "Certified Master Stylists",
                  "Strict Hygiene Standards",
                  "Bridal Makeup Specialists",
                  "Award-Winning Beauty Academy",
                  "Personalized Consultations"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary shrink-0"></span>
                    <span className="text-sm text-gray-800 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-10">
              <Button size="lg" onClick={() => window.location.href = '/book'}>
                Experience Our Magic
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
