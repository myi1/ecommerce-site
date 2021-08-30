import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import "./App.scss";
import Header from "./Components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import ShopPage from "./pages/ShopPage/ShopPage";
import SignInAndUp from "./pages/SignInAndUp/SignInAndUp";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
