import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card, CardContent, CardImage } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Scissors, Sparkles, Droplet, Star, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const serviceCategories = [
  {
    title: "Hair Services",
    icon: <Scissors className="w-8 h-8 text-secondary mb-4" />,
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    items: [
      { name: "Signature Hair Cut", price: "₹999+" },
      { name: "Hair Styling", price: "₹799+" },
      { name: "Global Hair Coloring", price: "₹3499+" },
      { name: "Hair Spa", price: "₹1499+" },
      { name: "Keratin Treatment", price: "₹4999+" },
      { name: "Rebonding", price: "₹5999+" },
      { name: "Hair Botox", price: "₹6999+" }
    ]
  },
  {
    title: "Beauty & Skin",
    icon: <Droplet className="w-8 h-8 text-secondary mb-4" />,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    items: [
      { name: "Advanced Facial", price: "₹1999+" },
      { name: "Skin Polishing", price: "₹2499+" },
      { name: "Cleanup", price: "₹999+" },
      { name: "Threading & Waxing", price: "₹299+" },
      { name: "Bleach", price: "₹499+" },
      { name: "Skin Rejuvenation", price: "₹2999+" }
    ]
  },
  {
    title: "Bridal Makeup",
    icon: <Sparkles className="w-8 h-8 text-secondary mb-4" />,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    items: [
      { name: "HD Bridal Makeup", price: "₹14999" },
      { name: "Airbrush Makeup", price: "₹19999" },
      { name: "Engagement Look", price: "₹9999" },
      { name: "Party Makeup", price: "₹4999" },
      { name: "Reception Styling", price: "₹11999" },
      { name: "Pre-Bridal Packages", price: "₹7999+" }
    ]
  },
  {
    title: "Groom & Men's Styling",
    icon: <Star className="w-8 h-8 text-secondary mb-4" />,
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    items: [
      { name: "Men's Precision Cut", price: "₹499" },
      { name: "Beard Styling", price: "₹299" },
      { name: "Groom HD Makeup", price: "₹4999" },
      { name: "Groom Packages", price: "₹7999" },
      { name: "Hair Spa & Scalp Detox", price: "₹999" }
    ]
  }
];

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

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
                  
                  <div className="w-full flex-1 mb-6">
                    <button 
                      onClick={() => toggleExpand(index)}
                      className="w-full flex items-center justify-between py-2 border-b-2 border-gray-100 text-sm font-semibold text-gray-800 hover:text-secondary group-hover:border-secondary transition-colors"
                    >
                      <span>View Price List</span>
                      <ChevronDown className={cn("w-4 h-4 transition-transform", expandedIndex === index ? "rotate-180" : "")} />
                    </button>
                    
                    <AnimatePresence>
                      {expandedIndex === index && (
                        <motion.ul 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="w-full text-left overflow-hidden mt-4 space-y-2"
                        >
                          {category.items.map((item, idx) => (
                            <li key={idx} className="text-sm font-poppins text-gray-600 border-b border-gray-50 pb-2 flex items-center justify-between">
                              <span>{item.name}</span>
                              <span className="font-semibold text-primary">{item.price}</span>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>

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
