import { cn } from '@/helpers/utils';
import React from 'react';

interface InputtedLettersProps {
  value: string;
  hiveCellArr: string[];
}

export default function InputtedLetters({ value, hiveCellArr }: InputtedLettersProps) {
  const valueArr = value.split('');
  const middleIndexOfHiveCellArr = Math.floor(hiveCellArr.length / 2);

  return (
    <div className='flex items-center justify-center'>
      <span className='text-4xl'>
        {valueArr.map((letter, index) => {
          return (
            <span
              key={index}
              className={cn('text-4xl font-bold text-gray-300', {
                'text-custom-yellow': letter === hiveCellArr[middleIndexOfHiveCellArr],
                'text-black': hiveCellArr.includes(letter) && letter !== hiveCellArr[middleIndexOfHiveCellArr],
              })}>
              {letter}
            </span>
          );
        })}
      </span>
      <span className='animate-blink w-1 h-10 bg-custom-yellow'></span>
    </div>
  );
}
