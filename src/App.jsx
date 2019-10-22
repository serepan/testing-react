import React, { useState, useEffect } from 'react';
import { questionsList } from './data/questionsList'
import QuestionsContainer from './components/QuestionsContainer'
import Timer from './components/Timer'
import './App.scss';

const App = () => {
  const [seconds, setSeconds] = useState(12);
  const [isActive, setIsActive] = useState(false);

  const start = () => {
    setIsActive(!isActive);
  }

  const reset = () => {
    setSeconds(12);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => {
          if (seconds > 0)
          {return --seconds}});
      }, 1000);
    // } else if (!isActive && seconds !== 0) {
    //   clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="container">
      <Timer
        seconds={seconds}
        isActive={isActive}
        reset={reset}
        start={start}
      />
      {isActive && seconds >=0 && <QuestionsContainer data={questionsList} />}
      {/* <QuestionsContainer data={questionsList} /> */}
    </div>
  )
}
export default App;

