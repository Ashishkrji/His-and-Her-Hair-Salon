import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

export function AccordionItem({ title, children, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border border-gray-100 rounded-lg bg-white overflow-hidden mb-4 hover:shadow-sm transition-shadow">
      <button 
        onClick={onToggle}
        className="flex w-full items-center justify-between p-5 text-left font-poppins text-primary font-semibold hover:bg-gray-50 transition-colors"
      >
        <span>{title}</span>
        <ChevronDown className={cn("w-5 h-5 text-secondary transition-transform duration-300 shrink-0 ml-4", isOpen && "rotate-180")} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-5 pt-0 text-gray-600 font-poppins leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
