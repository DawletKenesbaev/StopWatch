import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          let { hours, minutes, seconds } = prevTime;

          seconds++;

          if (seconds >= 60) {
            seconds = 0;
            minutes++;

            if (minutes >= 60) {
              minutes = 0;
              hours++;
            }
          }

          return { hours, minutes, seconds };
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const start = () => {
    setIsRunning(true);
  };

  const stop = () => {
    setIsRunning(false);
  };

  const reset = () => {
    setTime({ hours: 0, minutes: 0, seconds: 0 });
    setIsRunning(false);
  };

  return (
    <div>
      
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Stopwatch;
