'use client';
import Letter from './atoms/letter';
import Button from '@/components/ui/button';
import InputtedLetters from './atoms/inputtedLetters';
import { LuRefreshCw } from 'react-icons/lu';
import useGame from '@/hooks/useGame';
import Timer from './atoms/timer';
import Score from './atoms/score';
import Hive from './atoms/hive';
import GameButtons from './atoms/gameButtons';

export default function Game({ lang }: { lang: string }) {
  const {
    resetGame,
    isGameOver,
    score,
    time,
    userAnswerInput,
    setUserAnswerInput,
    correctAnswers,
    hiveCellArr,
    answers,
    shuffleLetters,
    enterHandle,
  } = useGame({
    lang,
  });

  return (
    <div className='flex flex-row items-center justify-between w-10/12 '>
      <div className='basis-1/2 flex-col items-center justify-center py-10 '>
        <Timer time={time} />
        <Score score={score} />
        <p>{isGameOver && 'game Over'}</p>
        <Button onClick={resetGame} size='sm' variant='danger' className='rounded-none'>
          reset game
        </Button>
        <InputtedLetters value={userAnswerInput} hiveCellArr={hiveCellArr} />
        <Hive setUserAnswerInput={setUserAnswerInput} hiveCellArr={hiveCellArr} />
        <GameButtons setUserAnswerInput={setUserAnswerInput} shuffleLetters={shuffleLetters} enterHandle={enterHandle} />
      </div>

      <div className='flex flex-row bg-red-200 basis-1/2'>
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
