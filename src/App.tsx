import React from "react";
import "./App.css";
import Home from "./onepirate/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./onepirate/Contact";
import { ParallaxProvider } from 'react-scroll-parallax';
import Articles from "./onepirate/Articles";
import NotFound404 from "./onepirate/404";

function App() {

  return (
    <React.Fragment>
      <ParallaxProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/contattami" element={<Contact />} />
            <Route path="/articoli/*" element={<Articles />} />
            <Route path="/index.html" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </BrowserRouter>
      </ParallaxProvider>
    </React.Fragment>
  );
}

export default App;
