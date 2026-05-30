import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';

export default function Contact() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-primary/5 py-20 mb-20 text-center">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl text-primary font-semibold mb-4"
          >
            Contact & Location 
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 font-poppins max-w-2xl mx-auto"
          >
            Visit our luxury studio or get in touch for appointments and academy inquiries.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 item-start">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h2 className="font-playfair text-3xl text-primary font-semibold mb-8">Get In Touch</h2>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold font-poppins text-gray-900 mb-1">Our Studio</h4>
                    <p className="text-gray-600 font-poppins text-sm leading-relaxed">
                      4185, Dhandra Rd, Phase II, LIG, Urban Estate Dugri,<br/> Ludhiana, Punjab 141001
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold font-poppins text-gray-900 mb-1">Call Us</h4>
                    <p className="text-gray-600 font-poppins text-sm leading-relaxed">
                      07973117980
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold font-poppins text-gray-900 mb-1">Working Hours</h4>
                    <p className="text-gray-600 font-poppins text-sm leading-relaxed">
                      Monday - Sunday: 10:00 AM – 8:00 PM
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[500px] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100"
          >
            {/* Embedded Google Map using standard iframe */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13709.61081510488!2d75.8427771!3d30.86016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a82f3c7b7447b%3A0x6cd3f0d23508d5!2sLudhiana%2C%20Punjab%20141001!5e0!3m2!1sen!2sin!4v1715421520148!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Salon Location Map"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
