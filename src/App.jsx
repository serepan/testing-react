import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import * as data from './data/questionsList';
import QuestionsContainer from './components/QuestionsContainer';
import Buttons from './components/Buttons';
import './Scss/App.scss';

const App = () => {

  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <div className="row">
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
                />
              )}
            />
            <Route
              path="/biology-test"
              render={(props) => (
                <QuestionsContainer
                  {...props}
                  data={data.questionsList2}
                />
              )}
            />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}
export default App;

