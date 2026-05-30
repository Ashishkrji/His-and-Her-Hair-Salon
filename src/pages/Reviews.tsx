import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';

const reviewsData = [
  { name: "Pooja Sharma", rating: 5, text: "Got my bridal makeup done here. The team is extremely professional and polite. They made my special day even more wonderful!" },
  { name: "Simran Kaur", rating: 5, text: "Best salon in Ludhiana for Keratin treatment and haircut. Highly recommend His and Her Hair Salon!" },
  { name: "Neha Verma", rating: 4.5, text: "Joined the academy for the Professional Makeup Course. The trainers are excellent and they focus on practical knowledge!" },
  { name: "Ananya Gupta", rating: 5, text: "Excellent ambiance, courteous staff, and premium service." },
  { name: "Ritika Singh", rating: 5, text: "The HD makeup was flawless and reasonably priced as well. Loved the complete look." },
  { name: "Megha S.", rating: 4, text: "Great experience with my global hair color. Very knowledgeable staff." },
];

export default function Reviews() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-primary/5 py-20 mb-20 text-center">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl text-primary font-semibold mb-4"
          >
            Client Reviews
          </motion.h1>
          <div className="flex justify-center items-center gap-2 mb-4">
            <span className="font-playfair text-3xl text-gray-900">4.5</span>
            <div className="flex text-secondary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="fill-current w-6 h-6" />
              ))}
            </div>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 font-poppins max-w-2xl mx-auto"
          >
            Based on 39+ verified reviews on Google Maps
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsData.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="h-full flex flex-col pt-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(Math.floor(review.rating))].map((_, i) => (
                      <Star key={i} className="text-secondary fill-current w-5 h-5" />
                    ))}
                    {review.rating % 1 !== 0 && (
                      <Star className="text-secondary fill-current w-5 h-5 opacity-50" />
                    )}
                  </div>
                  <p className="font-poppins text-gray-600 text-sm leading-relaxed mb-6 flex-1 italic">
                    "{review.text}"
                  </p>
                  <div className="border-t border-gray-100 pt-4 mt-auto">
                    <h4 className="font-semibold text-primary font-poppins">{review.name}</h4>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
