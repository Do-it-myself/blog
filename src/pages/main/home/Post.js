import React from "react";

import { Link } from "react-router-dom";

export default function Post({ content }) {
  return (
    <div className="postMargin">
      <Link to={content["dir"]} className="button">
        <div className="post">
          <div className="postTitle">{content["title"]}</div>
          <img
            src={require("../../posts" + content["dir"] + "/main.jpg")}
            alt="main"
            className="postImage"
          />
        </div>
      </Link>
    </div>
  );
}
