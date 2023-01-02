import React from "react";

export default function Img({ content, image }) {
  return (
    <div className="imgElementFlex">
      <img
        src={require("../../posts" + content["dir"] + "/pictures/" + image)}
        alt="blog"
        className="imgElement"
      />
    </div>
  );
}
