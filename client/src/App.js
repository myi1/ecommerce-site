import React, { useEffect, lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GlobalStyle } from "./global.styles";
import Header from "./Components/Header/Header";
import Spinner from "./Components/Spinner/Spinner";
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

const Homepage = lazy(() => import("./pages/Homepage/Homepage"));
const ShopPage = lazy(() => import("./pages/ShopPage/ShopPage"));
const Checkout = lazy(() => import("./pages/Checkout/Checkout"));
const SignInAndUp = lazy(() => import("./pages/SignInAndUp/SignInAndUp"));

function App() {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div className='App'>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={Homepage} />

            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout/' component={Checkout} />
            <Route
              exact
              path='/signin'
              render={() =>
                currentUser ? <Redirect to='/' /> : <SignInAndUp />
              }
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
}

export default App;
