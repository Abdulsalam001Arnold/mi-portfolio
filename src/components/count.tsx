
'use client'

import React, { useEffect, useState } from 'react';

type NumberCountProps = {
  inView: boolean,
  targetNumber: number,
  duration: number,
}

const NumberCounter = ({ inView ,targetNumber, duration } : NumberCountProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) {
      setCount(0);
      return;
    }

    let start = 0;
    const incrementTime = 1000 / 60;
    const step = (targetNumber / (duration / incrementTime));

    const counter = setInterval(() => {
      start += step;
      if (start >= targetNumber) {
        clearInterval(counter);
        setCount(targetNumber);
      } else {
        setCount(Math.ceil(start));
      }
    }, incrementTime);

    return () => {
      clearInterval(counter)
    };
  }, [inView, targetNumber, duration]);

  return (
    <div className='font-semibold text-6xl'>
      {count}
    </div>
  );
};

export default React.memo(NumberCounter);


