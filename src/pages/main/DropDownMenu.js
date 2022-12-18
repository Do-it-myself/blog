import React from "react";

import { Link } from "react-router-dom";

export default function DropDownMenu({ click, handleClick }) {
  return (
    <div className = {click ? "dropDownMenuActive" : "dropDownMenu"}>
        <Link to="/blog/hardware" className="menuItem" onClick={handleClick}>
          Hardware{" "}
        </Link>
        <Link to="/blog/software" className="menuItem" onClick={handleClick}>
          Software{" "}
        </Link>
    </div>
  );
}
