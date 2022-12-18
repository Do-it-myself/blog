import React from "react";

import NavBar from "./pages/main/NavBar";
import Home from "./pages/main/Home";
import Hardware from "./pages/main/Hardware";
import Software from "./pages/main/Software";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export default function App() {
  const isSmall = useMediaQuery({query: "(max-width: 575px)"})
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isMobile = isSmall && isPortrait;
  const isDesktop = !isMobile;

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/blog">
          <Home />
        </Route>
        <Route exact path="/blog/hardware">
          <Hardware />
        </Route>
        <Route exact path="/blog/software">
          <Software />
        </Route>
      </Switch>
      
      <div>
        {isDesktop && <p>Desktop view</p>}
        {isMobile && <p>Mobile view</p>}
      </div>
    </Router>
  );
}
