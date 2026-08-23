import React, { useState } from 'react';
import logoImage from '../assets/logo.jpg';
import { BookOpen, Sparkles } from 'lucide-react';

interface LogoProps {
  className?: string;
  imgClassName?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  alt?: string;
  showRing?: boolean;
}

const sizeMap = {
  xs: 'w-6 h-6',
  sm: 'w-9 h-9',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
  xl: 'w-20 h-20 sm:w-24 sm:h-24',
  '2xl': 'w-28 h-28 sm:w-32 sm:h-32',
};

export const Logo: React.FC<LogoProps> = ({
  className = '',
  imgClassName = '',
  size = 'md',
  alt = 'AAliya Book Publication Logo',
  showRing = true,
}) => {
  const [src, setSrc] = useState<string>(logoImage);
  const [failed, setFailed] = useState(false);

  const handleError = () => {
    if (src === logoImage) {
      // Try fallback to root public path
      setSrc('/logo.jpg');
    } else {
      // If both fail, gracefully show the branded vector seal
      setFailed(true);
    }
  };

  const containerSize = sizeMap[size] || sizeMap.md;

  if (failed) {
    return (
      <div
        className={`relative ${containerSize} rounded-full flex items-center justify-center bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold shadow-md ${
          showRing ? 'p-0.5 ring-2 ring-amber-400/50 ring-offset-1 ring-offset-slate-900' : ''
        } ${className}`}
      >
        <div className="w-full h-full rounded-full bg-slate-900 flex flex-col items-center justify-center p-1 text-center border border-amber-400/40">
          <BookOpen className="w-1/2 h-1/2 text-amber-400 mb-0.5" />
          <span className="text-[8px] font-extrabold tracking-tighter text-amber-300 leading-none">
            AALIYA
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative ${containerSize} rounded-full shrink-0 overflow-hidden ${
        showRing
          ? 'p-0.5 bg-gradient-to-tr from-amber-400 via-amber-300 to-amber-500 shadow-md shadow-amber-500/20'
          : ''
      } ${className}`}
    >
      <img
        src={src}
        alt={alt}
        onError={handleError}
        className={`w-full h-full object-cover rounded-full bg-white select-none ${imgClassName}`}
        loading="eager"
      />
    </div>
  );
};
