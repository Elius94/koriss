import React from "react";
import "./App.css";
import Home from "./onepirate/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Privacy from "./onepirate/Privacy";
import Contact from "./onepirate/Contact";
import Terms from "./onepirate/Terms";
import Checkbox from "@material-ui/core/Checkbox";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/contattami">
            <Contact />
          </Route>
          <Route path="/privacy">
            <Privacy />
          </Route>
          <Route path="/terms">
            <Terms />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
