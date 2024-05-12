import { cn } from '@/helpers/utils';
import React from 'react';

// create interface
interface TitleProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export default function Title({ className, children, type = 'h1' }: TitleProps) {
  const titleStyles = {
    h1: 'text-xl font-bold md:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl',
    h2: 'text-base font-bold md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl',
  };

  switch (type) {
    case 'h1':
      return <h1 className={cn(titleStyles[type], className)}>{children}</h1>;
    case 'h2':
      return <h2 className={cn(titleStyles[type], className)}>{children}</h2>;
    case 'h3':
      return <h3 className={className}>{children}</h3>;
    case 'h4':
      return <h4 className={className}>{children}</h4>;
    case 'h5':
      return <h5 className={className}>{children}</h5>;
    case 'h6':
      return <h6 className={className}>{children}</h6>;
    default:
      return <h1 className={className}>{children}</h1>;
  }
}
