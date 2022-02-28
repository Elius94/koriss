import React from "react";
import "./App.css";
import Home from "./onepirate/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Privacy from "./onepirate/Privacy";
import Contact from "./onepirate/Contact";
import Terms from "./onepirate/Terms";
import { ParallaxProvider } from 'react-scroll-parallax';
//import Seo, { SeoProps } from "./onepirate/modules/Seo";

/*const _seo: SeoProps = {
  title: "Martina Muzzi &middot; Psicologa",
  description: "Psicologa specializzata in psicologia della famiglia e dei genitori, con particolare attenzione per la fase perinatale e per la fase postnatale.",
  keywords: "psicologa bologna, massaggi infantili bologna, psicologa, psicologia, psicologia della famiglia, psicologia dei genitori, psicologia perinatale, sostegno genitoriale, psicologia bologna, consulenza psicologica",
  author: "Martina Muzzi",
  openGraph: {
    url: "https://www.martinamuzzipsicologa.it",
    title: "Martina Muzzi · Psicologa di famiglia e genitori",
    description: "Psicologa a Bologna specializzata in psicologia della famiglia e dei genitori, con particolare attenzione per la fase perinatale e per la fase postnatale.",
    image: "https://www.martinamuzzipsicologa.it/DSC_0655.JPG",
    site_name: "Martina Muzzi · Psicologa",
    type: "website",
    locale: "it_IT",
  },
  twitter: {
    image: "https://www.martinamuzzipsicologa.it/DSC_0655.JPG",
    url: "https://www.martinamuzzipsicologa.it",
    card: "summary_large_image",
    title: "Martina Muzzi · Psicologa di famiglia e genitori",
    description: "Psicologa a Bologna specializzata in psicologia della famiglia e dei genitori, con particolare attenzione per la fase perinatale e per la fase postnatale.",
  },
  favicon: undefined,
  manifest: undefined
};*/

function App() {
  return (
    <React.Fragment>
      {/*<Seo
        title={_seo.title}
        description={_seo.description}
        keywords={_seo.keywords}
        author={_seo.author}
        openGraph={_seo.openGraph}
        twitter={_seo.twitter}
        favicon={_seo.favicon}
        manifest={_seo.manifest}
      />*/}
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
