'use client';
import React, { useEffect, useState } from 'react';
import Letter from './atoms/letter';
import Button from '@/components/ui/button';
import InputtedLetters from './atoms/inputtedLetters';
import axios from 'axios';
import Toast from '../toast';
import { LuRefreshCw } from 'react-icons/lu';

export default function Game({ lang }: { lang: string }) {
  const [answerInput, setAnswerInput] = useState<string>(''); // [1
  const [correctAnswers, setCorrectAnswers] = useState<string[]>([]); // [2
  const [hiveCellArr, setHiveCellArr] = useState<string[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/game/dictionary/${lang}/2`)
      .then((res) => {
        setHiveCellArr(res.data.data.hiveCellArr);
        setAnswers(res.data.data.answers);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const shuffleLetters = () => {
    const middleIndex = Math.floor(hiveCellArr.length / 2);
    const middleLetter = hiveCellArr[middleIndex];
    let remainingLetters = [...hiveCellArr.slice(0, middleIndex), ...hiveCellArr.slice(middleIndex + 1)];

    // Karıştırma işlemi
    remainingLetters.sort(() => Math.random() - 0.5);

    // Orta harfi yerine koy
    remainingLetters.splice(middleIndex, 0, middleLetter);

    setHiveCellArr(remainingLetters);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      console.log(e.key);

      if (e.key === 'Backspace') {
        setAnswerInput((currentInput) => currentInput.slice(0, -1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        enterHandle();
      } else if (e.key === ' ') {
        e.preventDefault();
        shuffleLetters();
      } else if (e.key.length === 1) {
        if (answerInput.length >= 20) return; // [2
        if (e.key.match(/^[a-zA-Z]$/)) {
          setAnswerInput((currentInput) => currentInput + e.key.toUpperCase());
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return function cleanup() {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [shuffleLetters]);

  const enterHandle = () => {
    if (correctAnswers.includes(answerInput)) return;
    if (answers.includes(answerInput)) {
      setCorrectAnswers((currentCorrectAnswers) => [...currentCorrectAnswers, answerInput]);
      setAnswerInput('');
    }
  };

  return (
    <div className='flex flex-row items-center justify-center'>
      <div>
        <InputtedLetters value={answerInput} hiveCellArr={hiveCellArr} />

        <div className='flex flex-col flex-wrap justify-center items-center '>
          <div className='flex'>
            <Letter onClick={() => setAnswerInput((currentInput) => currentInput + hiveCellArr[0])} className=''>
              {hiveCellArr[0]}
            </Letter>
            <Letter className=''>{hiveCellArr[1]}</Letter>
            <Letter className=''>{hiveCellArr[2]}</Letter>
          </div>
          <Letter className='bg-custom-yellow'>{hiveCellArr[3]}</Letter>
          <div className='flex'>
            <Letter className=''>{hiveCellArr[4]}</Letter>
            <Letter className=''>{hiveCellArr[5]}</Letter>
            <Letter className=''>{hiveCellArr[6]}</Letter>
          </div>
        </div>

        <div>
          <Button onClick={() => setAnswerInput('')}>Clear</Button>
          <Button className='' variant='rounded' onClick={shuffleLetters}>
            <LuRefreshCw />
          </Button>
          <Button onClick={enterHandle}>Enter</Button>
        </div>
      </div>
      <div className='flex flex-row'>
        <div className='flex flex-col'>
          <p>Correct Answers: {correctAnswers.length}</p>
          {correctAnswers.map((correctAnswer, index) => (
            <div key={index} className='flex justify-center items-center'>
              <p className='text-xl'>{correctAnswer}</p>
            </div>
          ))}
        </div>

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
