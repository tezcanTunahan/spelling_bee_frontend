import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import axios from 'axios';

const useGame = ({ lang }: { lang: string }) => {
  const [userAnswerInput, setUserAnswerInput] = useState<string>(''); // [1
  const [correctAnswers, setCorrectAnswers] = useState<string[]>([]); // [2
  const [hiveCellArr, setHiveCellArr] = useState<string[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isGameOver, setIsGameOver] = useState<boolean>(false); // [3
  const [time, setTime] = useState(10);
  const [isTimerBegan, setIsTimerBegan] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (time > 0 && isTimerBegan) {
        setTime(time - 1);
      } else if (time === 0) {
        setIsGameOver(true);
        const notify = () =>
          toast.error('Game Over!', {
            // icon: '🔥',
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          });
        notify();
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [time, isTimerBegan]);

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
      setIsTimerBegan(true);
      if (isGameOver) return;
      if (e.key === 'Backspace') {
        setUserAnswerInput((currentInput) => currentInput.slice(0, -1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        enterHandle();
      } else if (e.key === ' ') {
        e.preventDefault();
        shuffleLetters();
      } else if (e.key.length === 1) {
        if (userAnswerInput.length >= 20) return; // [2
        if (e.key.match(/^[a-zA-Z]$/)) {
          setUserAnswerInput((currentInput) => currentInput + e.key.toUpperCase());
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return function cleanup() {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [shuffleLetters]);

  const enterHandle = () => {
    if (correctAnswers.includes(userAnswerInput)) {
      {
        setUserAnswerInput('');
        const notify = () => toast.error('Already found');
        notify();
        return;
      }
    } else if (answers.includes(userAnswerInput)) {
      const notify = () => toast.success('Awsome');
      notify();
      setCorrectAnswers((currentCorrectAnswers) => [...currentCorrectAnswers, userAnswerInput]);
      setScore(score + userAnswerInput.length);
      setUserAnswerInput('');
      setTime(time + 15);
    }
  };

  const resetGame = () => {
    setIsGameOver(false);
    setIsTimerBegan(false);
    setTime(10);
    setScore(0);
    setUserAnswerInput('');
    setCorrectAnswers([]);
  };

  return {
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
    resetGame,
  };
};

export default useGame;
