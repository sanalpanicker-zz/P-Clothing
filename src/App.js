import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './component/header/header.component';
import SignInSignUp from './pages/sing-in_and_sing-up/sing-in_and_sing-up.component';
import './App.css';

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
