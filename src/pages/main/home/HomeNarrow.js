import React from "react";

export default function Home() {
  return (
    <div>
      <div className="homeNarrow">
        <div className="topbox">
          <div className="flexbox">
            <div className="intro">
              <div className="line1">Hi, welcome to</div>
              <div className="line2">Do it Myself</div>
              <div className="line3">
                I’m Chloe, an engineer who enjoys creating software and hardware
                projects
              </div>
            </div>
            <div className="logoRow">
              <div className="logoCol">
                <img
                  src={require("../../../assets/images/robot.png")}
                  alt="robot"
                  className="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
