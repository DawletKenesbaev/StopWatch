import React from 'react'
import { useState,useEffect } from 'react';
import './App.css'
function App() {
  const [time, setTime] = useState({ minutes: 0, seconds: 0, milisec: 0 });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          let {  minutes, seconds,milisec } = prevTime;
          
          milisec++;

          if (milisec >= 60) {
            milisec = 0;
            seconds++;

            if (seconds >= 60) {
              seconds = 0;
              minutes++;
            }
          }

          return { milisec, minutes, seconds };
        });
      }, 100/6);
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
    setTime({ milisec: 0, minutes: 0, seconds: 0 });
    setIsRunning(false);
  };

  return (
    <div className='container box'>
      <div class="card1">
        <div>
          <h4>Online StopWatch</h4>
        </div>
        <div className='card1__body'>
          <div className='card__item'>
            <h4>{time.minutes.toString().padStart(2, "0")}</h4>
            <h5>minute</h5>
          </div>
          <div className='card__item'>
            <h4>{time.seconds.toString().padStart(2, "0")}</h4>
            <h5>second</h5>
          </div><div className='card__item'>
            <h4>{time.milisec.toString().padStart(2, "0")}</h4>
            <h5>milsec</h5>
          </div>
        </div>
        
      </div>
      <div class="card2">
        <button type="button" onClick={start} class="btn btn-success">Start</button>
        <button type="button" onClick={stop} class="btn btn-danger">Stop</button>
        <button type="button"  class="btn btn-secondary">Interval</button>
        <button type="button" onClick={reset} class="btn btn-warning">Clear</button>
      </div>
    </div>
  )
}

export default App