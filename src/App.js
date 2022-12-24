import React from "react";

import NavBarWide from "./pages/main/navbar/NavBarWide";
import NavBarNarrow from "./pages/main/navbar/NavBarNarrow";
import HomeWide from "./pages/main/home/HomeWide";
import HomeNarrow from "./pages/main/home/HomeNarrow";
import Hardware from "./pages/main/hardware/Hardware";
import Software from "./pages/main/software/Software";
import BottomBarWide from "./pages/main/bottombar/BottomBarWide";
import BottomBarNarrow from "./pages/main/bottombar/BottomBarNarrow";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export default function App() {
  const homeIsNarrow = useMediaQuery({ query: "(max-aspect-ratio: 4/5)" });
  const navBarIsNarrow = useMediaQuery({ query: "(max-width: 390px)" });


  return (
      <Router>
        <div className={homeIsNarrow ? "mainNarrow" : "mainWide"}>
        {!navBarIsNarrow && <NavBarWide />}
        {navBarIsNarrow && <NavBarNarrow />}
        <Switch>
          <Route exact path="/blog">
            {!homeIsNarrow && (<HomeWide />)}
            {homeIsNarrow && (<HomeNarrow />)}
          </Route>
          <Route exact path="/blog/hardware">
            <Hardware />
          </Route>
          <Route exact path="/blog/software">
            <Software />
          </Route>
        </Switch>
        </div>
        {!homeIsNarrow && <BottomBarWide />}
        {homeIsNarrow && <BottomBarNarrow />} 
      </Router>
   
  );
}
