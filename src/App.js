import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/InformationForm";
import Result from "./pages/Result";
import MarriageForm from "./pages/MarriageForm";

import "./App.css";
const App = () => {
  return (
    <Switch>
      <Route path="/result">
        <Result />
      </Route>
      <Route path="/info-form">
        <Form />
      </Route>
      <Route path="/marriage-form">
        <MarriageForm />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default App;
