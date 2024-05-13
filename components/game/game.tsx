'use client';
import Button from '@/components/ui/button';
import InputtedLetters from './atoms/inputtedLetters';
import useGame from '@/hooks/useGame';
import Timer from './atoms/timer';
import Score from './atoms/score';
import Hive from './atoms/hive';
import GameButtons from './atoms/gameButtons';
import Answers from './atoms/answers';

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
    <div className='flex flex-col md:flex-row items-center justify-between w-10/12 '>
      <div className='basis-1/2 flex-col items-center justify-center py-10'>
        <Timer time={time} />
        <Score score={score} />
        <p>{isGameOver && 'game Over'}</p>
        <Button onClick={resetGame} size='sm' variant='danger' className='rounded-none'>
          reset game
        </Button>
        <div className='flex flex-col gap-3'>
          <InputtedLetters value={userAnswerInput} hiveCellArr={hiveCellArr} />
          <div>
            <Button onClick={() => setUserAnswerInput('')} size='md'>
              level down
            </Button>
            <h1 className='font-bold text-4xl'>LEVEL 1</h1>
            <Button onClick={() => setUserAnswerInput('')} size='md'>
              level up
            </Button>
            <Hive setUserAnswerInput={setUserAnswerInput} hiveCellArr={hiveCellArr} />
          </div>
          <GameButtons setUserAnswerInput={setUserAnswerInput} shuffleLetters={shuffleLetters} enterHandle={enterHandle} />
        </div>
      </div>

      <Answers answers={answers} correctAnswers={correctAnswers} className='basis-1/2' />
    </div>
  );
}
