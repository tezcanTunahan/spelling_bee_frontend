import React from 'react';
import { cn } from '@/helpers/utils';

type ButtonProps = {
  children: string | React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'rounded';
  size?: 'sm' | 'md' | 'lg' | 'rounded';
  className?: string;
  ref?: any;
  rest?: any;
};

const buttonStyles = {
  primary: 'border border-2  text-black',
  rounded: 'border border-2 rounded-full text-black',
};

const buttonSizes = {
  sm: 'px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm',
  md: 'px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base',
  lg: 'px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg',
  rounded: ' p-4 text-base sm:text-lg',
};

export default function Button({ children, onClick, className, variant = 'primary', size = 'md', ref, rest }: ButtonProps) {
  return (
    <button
      ref={ref}
      onClick={onClick}
      className={cn('rounded-md focus:outline-none active:bg-custom-grey', buttonStyles[variant], buttonSizes[size], className)}
      {...rest}>
      {children}
    </button>
  );
}
