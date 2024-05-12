import React from 'react';
import Button from '@/components/ui/button';
import { LuRefreshCw } from 'react-icons/lu';

interface ButtonsProps {
  setUserAnswerInput: React.Dispatch<React.SetStateAction<string>>;
  shuffleLetters: () => void;
  enterHandle: () => void;
}

export default function GameButtons({ setUserAnswerInput, shuffleLetters, enterHandle }: ButtonsProps) {
  return (
    <div className='flex items-center justify-center gap-5'>
      <Button onClick={() => setUserAnswerInput('')} size='md'>
        Clear
      </Button>
      <Button className='' variant='rounded' size='rounded' onClick={shuffleLetters}>
        <LuRefreshCw />
      </Button>
      <Button onClick={enterHandle} size='md'>
        Enter
      </Button>
    </div>
  );
}
