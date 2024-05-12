import React from 'react';
import Letter from './letter';

interface HiveProps {
  setUserAnswerInput: React.Dispatch<React.SetStateAction<string>>;
  hiveCellArr: string[];
}

export default function Hive({ setUserAnswerInput, hiveCellArr }: HiveProps) {
  return (
    <div className='flex flex-col flex-wrap justify-center items-center '>
      <div className='flex'>
        <Letter onClick={() => setUserAnswerInput((currentInput) => currentInput + hiveCellArr[0])} className='relative top-11 left-4'>
          {hiveCellArr[0]}
        </Letter>
        <Letter onClick={() => setUserAnswerInput((currentInput) => currentInput + hiveCellArr[1])} className=''>
          {hiveCellArr[1]}
        </Letter>
        <Letter onClick={() => setUserAnswerInput((currentInput) => currentInput + hiveCellArr[2])} className='relative top-11 right-4'>
          {hiveCellArr[2]}
        </Letter>
      </div>
      <Letter onClick={() => setUserAnswerInput((currentInput) => currentInput + hiveCellArr[3])} className='bg-custom-yellow my-2'>
        {hiveCellArr[3]}
      </Letter>
      <div className='flex'>
        <Letter onClick={() => setUserAnswerInput((currentInput) => currentInput + hiveCellArr[4])} className='relative bottom-11 left-4'>
          {hiveCellArr[4]}
        </Letter>
        <Letter onClick={() => setUserAnswerInput((currentInput) => currentInput + hiveCellArr[5])} className=''>
          {hiveCellArr[5]}
        </Letter>
        <Letter onClick={() => setUserAnswerInput((currentInput) => currentInput + hiveCellArr[6])} className='relative bottom-11 right-4'>
          {hiveCellArr[6]}
        </Letter>
      </div>
    </div>
  );
}
