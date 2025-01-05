import React, { useEffect, useState } from 'react';

function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount((prevCount) => prevCount + 1); // Use function form to access the latest state
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
    };
  },[]); // Empty dependency array ensures the interval is set up only once

  return <div>{count}</div>;
}

export default IntervalHookCounter;
