import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export function SectionHeader({ title, subtitle, align = 'center', className }: SectionHeaderProps) {
  const alignment = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto"
  };

  return (
    <div className={cn("mb-12 max-w-3xl", alignment[align], className)}>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-secondary font-cormorant font-semibold tracking-widest uppercase text-sm md:text-base mb-3"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-playfair text-3xl md:text-4xl lg:text-5xl text-primary font-medium"
      >
        {title}
      </motion.h2>
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className={cn(
          "h-1 w-24 bg-gradient-to-r from-primary to-secondary mt-6 rounded-full",
          align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''
        )}
      />
    </div>
  );
}
