import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import StoriesPage from './pages/Stories';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/stories' component={StoriesPage} />
      </Switch>
    </Router>
  );
}

export default App;
