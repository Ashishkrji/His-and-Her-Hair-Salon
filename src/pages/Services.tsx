import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card, CardContent, CardImage } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Scissors, Sparkles, Droplet, Star } from 'lucide-react';

const serviceCategories = [
  {
    title: "Hair Services",
    icon: <Scissors className="w-8 h-8 text-secondary mb-4" />,
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    items: ["Signature Hair Cut", "Hair Styling", "Global Hair Coloring", "Hair Spa", "Keratin Treatment", "Rebonding", "Hair Botox"]
  },
  {
    title: "Beauty & Skin",
    icon: <Droplet className="w-8 h-8 text-secondary mb-4" />,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    items: ["Advanced Facial Treatments", "Skin Polishing", "Cleanup", "Threading & Waxing", "Bleach", "Skin Rejuvenation"]
  },
  {
    title: "Bridal Makeup",
    icon: <Sparkles className="w-8 h-8 text-secondary mb-4" />,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    items: ["HD Bridal Makeup", "Airbrush Makeup", "Engagement Look", "Party Makeup", "Reception Styling", "Pre-Bridal Packages"]
  },
  {
    title: "Groom & Men's Styling",
    icon: <Star className="w-8 h-8 text-secondary mb-4" />,
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    items: ["Men's Precision Cut", "Beard Styling", "Groom HD Makeup", "Groom Packages", "Hair Spa & Scalp Detox"]
  }
];

export default function Services() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-primary/5 py-20 mb-20 text-center">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl text-primary font-semibold mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 font-poppins max-w-2xl mx-auto"
          >
            Indulge in a world class experience carefully crafted to enhance your natural beauty.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col group">
                <CardImage src={category.image} alt={category.title} className="h-48" />
                <CardContent className="flex-1 flex flex-col items-center text-center">
                  {category.icon}
                  <h3 className="font-playfair text-xl font-semibold text-primary mb-4">{category.title}</h3>
                  <ul className="space-y-2 mb-6 flex-1 w-full text-left">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="text-sm font-poppins text-gray-600 border-b border-gray-100 pb-2 last:border-0 flex items-center justify-between">
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full mt-auto group-hover:bg-primary group-hover:text-white" onClick={() => window.location.href = '/book'}>
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
