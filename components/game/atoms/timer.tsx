import React from 'react';

export default function Timer({ time }: { time: number }) {
  return (
    <div>
      <h2>Timer</h2>
      <p>
        min: {Math.floor(time / 60)} sec: {time % 60}
      </p>
      <p className='text-gray-400'>timer began when the first letter was clicked</p>
    </div>
  );
}
