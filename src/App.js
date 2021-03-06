import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Test from './pages/test/test.component';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/test" component={Test} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
