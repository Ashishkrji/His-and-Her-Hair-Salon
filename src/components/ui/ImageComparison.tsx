import React, { useState } from 'react';
import { GripVertical } from 'lucide-react';

interface ImageComparisonProps {
  beforeImage: string;
  afterImage: string;
}

export function ImageComparison({ beforeImage, afterImage }: ImageComparisonProps) {
  const [position, setPosition] = useState(50);

  return (
    <div className="relative w-full aspect-[3/4] md:aspect-square overflow-hidden rounded-2xl select-none group">
      {/* Base Image (After - Right Side) */}
      <div className="absolute inset-0">
        <img src={afterImage} alt="After Makeup" className="w-full h-full object-cover" />
        <div className="absolute top-4 right-4 bg-black/60 text-white px-4 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md uppercase tracking-widest font-poppins shadow-lg">
          After
        </div>
      </div>
      
      {/* Overlaid Image (Before - Left Side) */}
      <div 
        className="absolute inset-0 border-r-[3px] border-white z-10"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img src={beforeImage} alt="Before Makeup" className="w-full h-full object-cover" />
        <div className="absolute top-4 left-4 bg-black/60 text-white px-4 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md uppercase tracking-widest font-poppins shadow-lg">
          Before
        </div>
      </div>
      
      {/* Slider Visual Handle */}
      <div 
        className="absolute top-0 bottom-0 pointer-events-none z-20 flex items-center justify-center -ml-4"
        style={{ left: `${position}%` }}
      >
        <div className="w-8 h-12 bg-white rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.3)] flex items-center justify-center overflow-hidden border border-gray-100 transition-transform group-hover:scale-105">
          <GripVertical className="w-5 h-5 text-gray-600" />
        </div>
      </div>
      
      {/* Interactive Range Input */}
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={position} 
        onChange={(e) => setPosition(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
      />
    </div>
  );
}
