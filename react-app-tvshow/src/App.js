import './App.css';
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import ShowPage from './pages/search/ShowPage'

function App({text}) {
  
  return (
    <div className="container">
      <Router>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/search/:text"> 
              <ShowPage/>
            </Route>
          </Switch>
      </Router>
    </div>
  );
  
}

export default App;
