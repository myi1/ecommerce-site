import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./Components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import ShopPage from "./pages/ShopPage/ShopPage";
import SignInAndUp from "./pages/SignInAndUp/SignInAndUp";
import { auth } from "./firebase/firebase.utils";

export default class App extends Component {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='App'>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndUp} />
        </Switch>
      </div>
    );
  }
}
