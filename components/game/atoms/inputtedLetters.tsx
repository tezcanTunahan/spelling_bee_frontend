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
      <span className='text-3xl'>
        {valueArr.map((letter, index) => {
          return (
            <span
              key={index}
              className={cn('font-bold text-gray-300', {
                'text-custom-yellow': letter === hiveCellArr[middleIndexOfHiveCellArr],
                'text-black': hiveCellArr.includes(letter) && letter !== hiveCellArr[middleIndexOfHiveCellArr],
              })}>
              {letter}
            </span>
          );
        })}
      </span>
      <span className='animate-blink w-[3px] h-10 bg-custom-yellow'></span>
      {valueArr.length === 0 && <span className='text-3xl font-normal text-gray-400'>Type or click</span>}
    </div>
  );
}
