import React, { useState, useEffect, useRef } from 'react';

function HookTimer() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef(null);

  // Start the timer on initial render
  useEffect(() => {
    startTimer();
    return () => clearInterval(intervalRef.current);
  }, []);

  // Function to start the timer
  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
  };

  // Function to stop the timer
  const stopTimer = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div>
      <h1>Hook Timer - {timer}</h1>
      <button onClick={stopTimer}>Stop Timer</button>
      <button onClick={startTimer}>Resume Timer</button>
    </div>
  );
}

export default HookTimer;
