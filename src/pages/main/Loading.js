import React from "react";
import { useMediaQuery } from "react-responsive";

export default function Loading() {
  const homeIsNarrow = useMediaQuery({ query: "(max-aspect-ratio: 4/5)" });

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
