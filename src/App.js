import React from "react";
import { Switch, Route } from "react-router-dom";
import Form from "./pages/Form";
import Result from "./pages/Result";

import "./App.css";
const App = () => {
  return (
    <Switch>
      <Route path="/result">
        <Result />
      </Route>
      <Route exact path="/">
        <Form />
      </Route>
    </Switch>
  );
};

export default App;
