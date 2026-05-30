import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Star, CheckCircle, ArrowRight, Sparkles, Scissors, Instagram, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardImage, CardContent } from '@/components/ui/Card';

function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Luxury Salon Interior" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-2 mb-6 text-secondary font-cormorant font-semibold tracking-[0.2em] uppercase text-sm">
            <span className="w-8 h-px bg-secondary"></span>
            Welcome to Luxury
          </div>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Where Beauty <br/> Meets Perfection
          </h1>
          <p className="font-poppins text-lg text-gray-200 mb-10 max-w-xl leading-relaxed">
            Premium Salon, Bridal Studio & Professional Beauty Academy in Ludhiana. Experience world-class styling and transformation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={() => window.location.href = '/book'}>
              Book Appointment
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black" onClick={() => window.location.href = '/academy'}>
              Explore Courses
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-4">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User 1" className="w-12 h-12 rounded-full border-2 border-primary object-cover" />
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User 2" className="w-12 h-12 rounded-full border-2 border-primary object-cover" />
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User 3" className="w-12 h-12 rounded-full border-2 border-primary object-cover" />
              <div className="w-12 h-12 rounded-full border-2 border-primary bg-primary flex items-center justify-center text-xs font-bold font-poppins">
                +1k
              </div>
            </div>
            <div>
              <div className="flex gap-1 text-secondary mb-1">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} className="fill-current" />)}
              </div>
              <p className="text-xs font-poppins text-gray-300">4.5 Rating on Google</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialProof() {
  const stats = [
    { label: "Verified Reviews", value: "39+", suffix: "" },
    { label: "Happy Clients", value: "1000", suffix: "+" },
    { label: "Students Trained", value: "100", suffix: "+" },
    { label: "Google Rating", value: "4.5", suffix: "★" },
  ];
  return (
    <div className="bg-primary py-12 text-white relative z-20 shadow-2xl -mt-8 mx-4 md:mx-auto md:w-11/12 lg:w-4/5 rounded-2xl overflow-hidden">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="text-center p-4 border-r border-white/10 last:border-0 relative">
            <p className="text-3xl md:text-4xl font-playfair font-bold text-secondary mb-2">
              {stat.value}{stat.suffix}
            </p>
            <p className="text-xs md:text-sm font-poppins font-medium uppercase tracking-wider text-gray-300">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AboutPreview() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="About His and Her Salon" className="rounded-2xl shadow-xl w-full" />
              <div className="absolute -bottom-10 -right-10 bg-white p-4 rounded-xl shadow-2xl hidden md:block">
                <img src="https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Salon Artist" className="rounded-lg w-48 h-auto" />
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <SectionHeader title="The Art of Elegance" subtitle="Our Story" align="left" />
            <p className="text-gray-600 font-poppins mb-6 leading-relaxed">
              For over a decade, His and Her Hair Salon & Academy has redefined luxury beauty in Ludhiana. We are more than a salon; we are a destination for total transformation, confidence, and artistry.
            </p>
            <p className="text-gray-600 font-poppins mb-8 leading-relaxed">
              Whether you desire a fresh cut, flawless bridal makeup, or are aspiring to become an industry professional, our certified experts deliver an unparalleled experience.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-primary font-poppins font-medium hover:text-secondary hover:gap-3 transition-all">
              Discover Our Journey <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const points = [
    "Certified Professionals", "Bridal Experts", "Premium Products", 
    "Modern Techniques", "Personalized Consultation", "Placement Support"
  ];
  return (
    <section className="py-24 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <SectionHeader title="Experience The Difference" subtitle="Why Choose Us" align="left" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {points.map((pt, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-secondary w-6 h-6 shrink-0" />
                  <span className="font-poppins text-gray-800 font-medium">{pt}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative h-[400px]">
            <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Why Choose Us" className="w-full h-full object-cover rounded-2xl shadow-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <SocialProof />
      <AboutPreview />
      
      {/* Bridal Quick CTA */}
      <section className="bg-primary text-white py-20 text-center px-4">
        <Sparkles className="w-12 h-12 text-secondary mx-auto mb-6" />
        <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-6">Your Perfect Bridal Look Awaits</h2>
        <p className="font-poppins text-gray-200 max-w-2xl mx-auto mb-8">
          Exclusive bridal makeup packages tailored to highlight your natural radiance. Secure your date with Ludhiana's most trusted bridal experts.
        </p>
        <Button variant="secondary" size="lg" onClick={() => window.location.href='/bridal'}>
          Explore Bridal Packages
        </Button>
      </section>

      <WhyChooseUs />

      {/* Instagram Feed Preview */}
      <section className="py-24 text-center">
        <SectionHeader title="Follow Our Latest Transformations" subtitle="Instagram" />
        <div className="container mx-auto px-4 mt-12 mb-12 flex justify-center">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl w-full">
            {[1, 2, 3, 4].map((i) => (
              <a key={i} href="http://www.instagram.com/hisandherhairsalon" target="_blank" rel="noreferrer" className="block relative group overflow-hidden rounded-xl aspect-square">
                <img src={`https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&sig=${i}`} alt="Insta Post" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram className="text-white w-8 h-8" />
                </div>
              </a>
            ))}
           </div>
        </div>
        <Button variant="outline" onClick={() => window.open('http://www.instagram.com/hisandherhairsalon')}>
          <Instagram className="w-4 h-4 mr-2" /> Follow @hisandherhairsalon
        </Button>
      </section>

    </div>
  );
}
