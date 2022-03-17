import React from "react";
import "./App.css";
import Home from "./onepirate/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./onepirate/Contact";
import { ParallaxProvider } from 'react-scroll-parallax';
import Articles from "./onepirate/Articles";
import NotFound404 from "./onepirate/404";

function App() {

  return (
    <React.Fragment>
      <ParallaxProvider>
        <Router>
          <Switch>
            <Route path="/contattami">
              <Contact />
            </Route>
            <Route path="/articoli">
              <Articles />
            </Route>
            <Route path="/index.html">
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route component={NotFound404} />
          </Switch>
        </Router>
      </ParallaxProvider>
    </React.Fragment>
  );
}

export default App;
