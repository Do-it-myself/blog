import React from "react";

import { Link } from "react-router-dom";

export default function ListItem({ content }) {
  return (
    <div className="itemMargin">
      <Link to={"/blog" + content["dir"]} className="button">
        <div className="listItem">
          <div className="padding">
            <div className="itemFlex">
              <img
                src={require("../posts" + content["dir"] + "/main.jpg")}
                alt="main"
                className="itemImage"
              />
            </div>
            <div className="content">
              <div className="titleSummary">
                <div className="titleItem">{content["title"]}</div>
                <div className="summary">{content["summary"]}</div>
              </div>
              <div className="date">{content["date"]}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
