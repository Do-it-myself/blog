import React from "react";

import ListItem from "../ListItem";

let postJSON = require("../../posts/Posts.json");

export default function PostTemp({ content, homeIsNarrow, next, children }) {
  console.log(next);
  return (
    <div className={homeIsNarrow ? "posttempNarrow" : "posttempWide"}>
      <div className="postflex">
        <div className="postbox">
          <div className="posttitle">{content["title"]}</div>
          <div className="postsummary">{content["summary"]}</div>
          <div className="postdate">{content["date"]}</div>
          <div className="imageflex">
            <img
              src={require("../../posts" + content["dir"] + "/main.jpg")}
              alt="main"
              className="image"
            />
          </div>
          <div className="children">{children} </div>
        </div>
        <div className="readmore">Read more</div>
        <ListItem key={postJSON[next[0]]["id"]} content={postJSON[next[0]]} />
        <ListItem key={postJSON[next[1]]["id"]} content={postJSON[next[1]]} />
      </div>
    </div>
  );
}
