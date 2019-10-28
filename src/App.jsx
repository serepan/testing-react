import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import * as data from './data/questionsList';
import QuestionsContainer from './components/QuestionsContainer';
import Result from './components/Result';
import Buttons from './components/Buttons';
import './App.scss';
;


const App = () => {
 
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
          path="/geography-test"
          render={(props) => (
            <QuestionsContainer
              {...props}
              data={data.questionsList}
              // isActive={isActive}
              // setIsActive={setIsActive}
            />
          )}
        />
        <Route
          path="/biology-test"
          render={(props) => (
            <QuestionsContainer
              {...props}
              data={data.questionsList2}
              // isActive={isActive}
              // setIsActive={setIsActive}
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

