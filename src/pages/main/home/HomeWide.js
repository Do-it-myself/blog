import React from "react";

import Post from "./Post";

export default function Home() {
  return (
    <div>
      <div className="homeWide">
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
        <div className="thingsDid">
          <div className="horizontalFlexBox">
            <div className="title">Some of the things I did</div>
          </div>
          <div className="horizontalFlexBox">
            <div className="post">
              <Post />
              <Post />
              <Post />
              <Post />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
