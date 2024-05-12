import { cn } from '@/helpers/utils';
import React from 'react';

interface LetterProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Letter({ children, className, onClick }: LetterProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'w-24 h-20 text-center flex items-center justify-center bg-custom-grey text-black clip-hexagon text-3xl font-bold cursor-pointer',
        className
      )}>
      {children}
    </div>
  );
}
