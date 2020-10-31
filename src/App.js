import React from "react";
import { Switch, Route } from "react-router-dom";
import Form from "./pages/Form";
import Result from "./pages/Result";

import "./App.css";
import Home from "./pages/Home";
const App = () => {
  return (
    <Switch>
      <Route path="/result">
        <Result />
      </Route>
      <Route path="/info-form">
        <Form />
      </Route>

      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default App;
