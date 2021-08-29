import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./Components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import ShopPage from "./pages/ShopPage/ShopPage";
import SignInAndUp from "./pages/SignInAndUp/SignInAndUp";

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndUp} />
      </Switch>
    </div>
  );
}

export default App;
