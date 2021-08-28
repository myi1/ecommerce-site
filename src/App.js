import React from "react";
import { Route } from "react-router-dom";
import "./App.scss";

import Homepage from "./pages/Homepage/Homepage";
import ShopPage from "./pages/ShopPage/ShopPage";

function App() {
  return (
    <div className='App'>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component={ShopPage} />
    </div>
  );
}

export default App;
