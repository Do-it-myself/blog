import React from "react";

export default function Img({ image }) {
  return (
    <div className="imgElementFlex">
      <img
        src={require("../../posts" + image)}
        alt="blog"
        className="imgElement"
      />
    </div>
  );
}
