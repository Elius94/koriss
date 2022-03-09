import React from "react";
import "./App.css";
import Home from "./onepirate/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Privacy from "./onepirate/Privacy";
import Contact from "./onepirate/Contact";
import Terms from "./onepirate/Terms";
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <React.Fragment>
      <ParallaxProvider>
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
      </ParallaxProvider>
    </React.Fragment>
  );
}

export default App;
