import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Test from './pages/test/test.component';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
        <Route path="/test" component={Test} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
