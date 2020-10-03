import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./pages/App";
import Result from "./pages/Result";
export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/Buscador-De-Palavras-2.0" component={App} />
        <Route component={Result} path="/Buscador-De-Palavras-2.0/result" />
      </Switch>
    </Router>
  );
}
