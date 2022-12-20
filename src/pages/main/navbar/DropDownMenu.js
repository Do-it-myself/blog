import React from "react";

import { Link } from "react-router-dom";

export default function DropDownMenu({ click, handleClick }) {
  return (
    <div className ="dropDownMenu">
        <Link to="/blog/hardware" className="menuItem" onClick={handleClick}>
          Hardware{" "}
        </Link>
        <Link to="/blog/software" className="menuItem" onClick={handleClick} style={{marginBottom: "5px"}}>
          Software{" "}
        </Link>
    </div>
  );
}
