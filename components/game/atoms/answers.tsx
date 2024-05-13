import Button from '@/components/ui/button';
import { cn } from '@/helpers/utils';
import React from 'react';

interface AnswersProps {
  answers: string[];
  correctAnswers: string[];
  className?: string;
}

export default function Answers({ answers, correctAnswers, className }: AnswersProps) {
  const [showAnswers, setShowAnswers] = React.useState(false);

  if (showAnswers) {
    return (
      <div className={cn('min-h-96', className)}>
        <Button
          onClick={() => {
            setShowAnswers(false);
          }}
          variant='primary'
          size='md'
          className='rounded-none'>
          Check Answers
        </Button>
        <div className={cn('flex flex-row  border-2 border-gray-200  p-10')}>
          <div className='flex flex-col'></div>

          <div>
            <p>Answers:</p>
            {answers.map((answer, index) => (
              <div key={index} className='flex justify-center items-center'>
                <p className='text-xl'>{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn('min-h-96', className)}>
      <Button
        onClick={() => {
          setShowAnswers(true);
        }}
        variant='primary'
        size='md'
        className='rounded-none'>
        Check Answers
      </Button>
      <div className={cn('flex flex-row  border-2 border-gray-200  p-10')}>
        <div className='flex flex-col'>
          <p>
            You have found {correctAnswers.length} {correctAnswers.length > 1 ? 'words' : 'word'}
          </p>
          <div className='flex flex-col space-y-2'>
            {correctAnswers.map((correctAnswer, index) => (
              <p className='text-xl border-b-gray-200 border-b-2 w-52' key={index}>
                {correctAnswer}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
