import React, { useState, useEffect, useReducer } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import * as data from './data/questionsList';
import QuestionsContainer from './components/QuestionsContainer';
import Timer from './components/Timer';
import Result from './components/Result';
import Buttons from './components/Buttons';
import './App.scss';
;


const App = () => {
  const [seconds, setSeconds] = useState(120);
  // const [isActive, setIsActive] = useState(false);



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
    <BrowserRouter>
      <div className="App">

        <Route
          exact path="/"
          render={(props) => (
            <Buttons
              {...props}
            />
          )}

        />
        <Route
          path="/QuestionsContainer"
          render={(props) => (
            <QuestionsContainer
              {...props}
              data={data.questionsList}
            />
          )}
        />
        <Route
          path="/QuestionsContainer2"
          render={(props) => (
            <QuestionsContainer
              {...props}
              data={data.questionsList2}
            />
          )}
        />

        <Route
          path="/Result"
          render={(props) => (
            <Result
              {...props}
            />
          )}
        />

      </div>
    </BrowserRouter>

  )

  // (initialState === "geo")
  // ? <QuestionsContainer data={data.questionsList} setInitialState={setInitialState} />
  // : (initialState === "bio")
  //   ? <QuestionsContainer data={data.questionsList2} setInitialState={setInitialState} />
  //   : <Buttons setInitialState={setInitialState} />


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

