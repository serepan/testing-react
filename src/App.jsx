import React, { useState, useEffect } from 'react';
import * as data from './data/questionsList'
import QuestionsContainer from './components/QuestionsContainer'
import Timer from './components/Timer'
import './App.scss';


const Buttons = ({ setInitialState }) => {
  return (
    <div className="booksList">
      <button onClick={() => setInitialState('geo')} className="btn btn-primary">Тест по географии</button>
      <button onClick={() => setInitialState('bio')} className="btn btn-primary" >Тест по биологии</button>
    </div>
  )
}

const App = () => {
  const [seconds, setSeconds] = useState(120);
  // const [isActive, setIsActive] = useState(false);

  // const [geo, setGeo] = useState(false);
  // const [bio, setBio] = useState(false);

  const [initialState, setInitialState] = useState('');

  // const start = () => {
  //   setIsActive(!isActive);
  // }

  // const reset = () => {
  //   setSeconds(120);
  //   setIsActive(false);
  // }

  // useEffect(() => {
  //   let interval = null;
  //   if (isActive) {
  //     interval = setInterval(() => {
  //       setSeconds((seconds) => {
  //         if (seconds > 0) { return --seconds }
  //       });
  //     }, 1000);
  // } else if (!isActive && seconds !== 0) {
  //   clearInterval(interval);
  //   }
  //   return () => clearInterval(interval);
  // }, [isActive, seconds]);

  return (
    (initialState === "geo")
      ? <QuestionsContainer data={data.questionsList} setInitialState={setInitialState} />
      : (initialState === "bio")
        ? <QuestionsContainer data={data.questionsList2} setInitialState={setInitialState} />
        : <Buttons setInitialState={setInitialState} />
  )


  // <div className="container">
  //   <Timer
  //     seconds={seconds}
  //     isActive={isActive}
  //     reset={reset}
  //     start={start}
  //   />
  //   {isActive && seconds >= 0 && <QuestionsContainer data={questionsList} />}

  // </div>
}
export default App;

