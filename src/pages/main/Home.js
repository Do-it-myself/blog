import React from "react";

import { useMediaQuery } from "react-responsive";

export default function Home() {
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });

  return (
    <div>
      {!isPortrait && (
        <div className="homeWide">
          <div className="topbox">
            <div className="flexbox">
              <div className="intro">
                <div className="line1">Hi, welcome to</div>
                <div className="line2">Do it Myself</div>
                <div className="line3">I’m Chloe, an engineer who enjoys creating software and hardware projects</div>
              </div>
              <div className="logoRow">
                <div className="logoCol">
                  <img src={require('../../assets/images/robot.png')} alt="robot" className="image"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isPortrait && (
        <div>
          <div>Home</div>
        </div>
      )}
    </div>
  );
}
