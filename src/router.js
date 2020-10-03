import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./pages/App";
import Result from "./pages/Result";
export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route component={Result} path="/result" />
      </Switch>
    </Router>
  );
}
