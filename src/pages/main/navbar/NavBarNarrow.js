import React, { useState } from "react";
import { Link } from "react-router-dom";

import DropDownMenu from "./DropDownMenu";

export default function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div className="navbar">
        <div>
          <nav className={click ? "navbarNarrowActive" : "navbarNarrow"}>
            <div className="verticalflexbox">
              <div className="flexbox">
                <div className="title">
                  <Link to="/blog" className="button">
                    Do it Myself
                  </Link>
                </div>
                <div className="item">
                  <a onClick={handleClick}>
                    <img
                      src={require("../../../assets/images/menu.png")}
                      alt="menu"
                      className="menu"
                    />
                  </a>
                </div>
              </div>
              {click && (
                <DropDownMenu click={click} handleClick={handleClick} />
              )}
            </div>
          </nav>
        </div>
    </div>
  );
}
