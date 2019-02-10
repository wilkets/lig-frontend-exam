import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import DummyPage from "./DummyPage";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/dummy" component={DummyPage} />
      <Route component={DummyPage} />
    </Switch>
  </BrowserRouter>
);

export default Router;
