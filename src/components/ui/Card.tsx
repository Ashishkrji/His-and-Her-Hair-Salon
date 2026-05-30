import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function Card({ className, hover = true, children, ...props }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5 } : {}}
      className={cn(
        "bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function CardImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.img 
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export function CardContent({ className, children }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6", className)}>{children}</div>;
}
