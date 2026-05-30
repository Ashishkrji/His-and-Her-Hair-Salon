import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, Download } from 'lucide-react';

const courses = [
  {
    title: "Professional Makeup Artist Course",
    duration: "3 Months",
    image: "https://images.unsplash.com/photo-1512496115851-a1dafqs91325?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Skin Theory & Analysis", "Color Theory", "Day to Evening Makeup", "HD & Airbrush Basics", "Portfolio Creation"]
  },
  {
    title: "Hair Styling Master Course",
    duration: "3 Months",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Hair Science & Anatomy", "Precision Cutting Techniques", "Chemical Treatments", "Thermal Styling", "Client Consultation"]
  },
  {
    title: "Bridal Makeup Certification",
    duration: "2 Months",
    image: "https://images.unsplash.com/photo-1595285703901-209fe16fde50?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Traditional & Modern Looks", "Airbrush Perfection", "Saree & Dupatta Draping", "Jewelry Setting", "Bridal Consultation"]
  },
  {
    title: "Advanced Salon Management",
    duration: "1 Month",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Staff Management", "Inventory Control", "Customer Service Excellence", "Marketing & Branding", "Financial Basics"]
  }
];

export default function Academy() {
  const handleDownloadBrochure = (courseTitle: string) => {
    // Simulate PDF download
    const element = document.createElement("a");
    const file = new Blob([`Premium Brochure for ${courseTitle}\n\nFor more details, contact His and Her Hair Salon & Academy.`], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `${courseTitle.replace(/\s+/g, '_')}_Brochure.txt`;
    document.body.appendChild(element); // Required for FireFox
    element.click();
    document.body.removeChild(element);
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
            Beauty Academy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 font-poppins max-w-2xl mx-auto"
          >
            Build your career in beauty & fashion with industry-recognized certifications and hands-on practical training.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100"
            >
              <div className="w-full md:w-2/5 md:min-h-full h-48 md:h-auto overflow-hidden relative">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Duration: {course.duration}
                </div>
              </div>
              <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col">
                <h3 className="font-playfair text-2xl font-bold text-primary mb-4">{course.title}</h3>
                <ul className="space-y-3 mb-8 flex-1">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600 font-poppins">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                  <Button className="flex-1" onClick={() => window.location.href = '/contact'}>Enroll Now</Button>
                  <Button variant="outline" className="flex-1" onClick={() => handleDownloadBrochure(course.title)}>
                    <Download className="w-4 h-4 mr-2" /> Brochure
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
