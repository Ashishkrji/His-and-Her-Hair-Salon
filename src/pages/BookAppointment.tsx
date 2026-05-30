import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';

export default function BookAppointment() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate Email Dispatch via Console
    const formData = new FormData(e.target as HTMLFormElement);
    const clientName = formData.get('name') || 'Client';
    const clientEmail = formData.get('email') || 'Not Provided';
    const clientPhone = formData.get('phone');
    const service = formData.get('service');
    const date = formData.get('date');
    const time = formData.get('time');

    console.log(`
=========================================
[EMAIL NOTIFICATION DISPATCHED]
To: ${clientEmail}
Cc: appointments@hisandherhairsalon.com
Subject: Appointment Request Received - His and Her Hair Salon

Dear ${clientName},

Thank you for requesting an appointment for ${service} on ${date} at ${time || 'any available time'}.
Your request is currently under review by our front desk. Our team will contact you shortly at ${clientPhone} to confirm the exact time and artist availability.

We look forward to serving you!

Best regards,
His and Her Hair Salon & Academy
4185, Dhandra Rd, Phase II, Ludhiana
=========================================
    `);

    // Mock API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="pt-24 pb-20">
      <section className="bg-primary/5 py-12 mb-12 text-center">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-playfair text-4xl md:text-5xl text-primary font-semibold mb-4"
          >
            Book Appointment
          </motion.h1>
          <p className="text-gray-600 font-poppins max-w-2xl mx-auto">
            Reserve your premium salon experience or consultation today.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-10"
        >
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="font-playfair justify-center text-3xl text-primary font-semibold mb-4">Request Received</h3>
              <p className="text-gray-600 font-poppins mb-8">
                Thank you! We will get back to you shortly to confirm your exact time.
              </p>
              <Button onClick={() => window.location.href = '/'}>Return Home</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700 font-poppins">Full Name *</label>
                  <input name="name" required type="text" id="name" className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors outline-none font-poppins" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700 font-poppins">Phone Number *</label>
                  <input name="phone" required type="tel" id="phone" className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors outline-none font-poppins" placeholder="07973117980" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700 font-poppins">Email Address</label>
                  <input name="email" type="email" id="email" className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors outline-none font-poppins" placeholder="johndoe@example.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-gray-700 font-poppins">Service Required *</label>
                  <select name="service" required id="service" className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors outline-none font-poppins bg-white">
                    <option value="">Select a service</option>
                    <option value="Hair Services">Hair Services</option>
                    <option value="Bridal Makeup">Bridal Makeup</option>
                    <option value="Beauty & Skin">Beauty & Skin</option>
                    <option value="Academy Details">Academy Details</option>
                    <option value="Other">Other Inquiry</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="date" className="text-sm font-medium text-gray-700 font-poppins">Preferred Date *</label>
                  <input name="date" required type="date" id="date" className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors outline-none font-poppins text-gray-700" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="time" className="text-sm font-medium text-gray-700 font-poppins">Preferred Time</label>
                  <select name="time" id="time" className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors outline-none font-poppins bg-white text-gray-700">
                    <option value="">Any time</option>
                    <option value="morning">Morning (10 AM - 1 PM)</option>
                    <option value="afternoon">Afternoon (1 PM - 4 PM)</option>
                    <option value="evening">Evening (4 PM - 8 PM)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700 font-poppins">Message (Optional)</label>
                <textarea id="message" rows={4} className="w-full p-4 rounded-lg border border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors outline-none font-poppins resize-none" placeholder="Let us know if you have any special requirements..."></textarea>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Button type="submit" size="lg" className="flex-1" isLoading={isSubmitting}>
                  Confirm Request
                </Button>
                <Button type="button" variant="whatsapp" size="lg" className="flex-1" onClick={() => window.open('https://wa.me/917973117980', '_blank')}>
                  Book via WhatsApp
                </Button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
