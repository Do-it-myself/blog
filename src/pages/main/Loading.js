import React from "react";

export default function Loading({ homeIsNarrow }) {

  return (
    <div className="loading">
      <div className={homeIsNarrow ? "loadingNarrow" : "loadingWide"}>
        <img
          src={require("../../assets/images/loading.gif")}
          alt="loading"
          className="image"
        />
      </div>
    </div>
  );
}
