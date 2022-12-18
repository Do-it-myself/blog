import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useMediaQuery } from "react-responsive";

import DropDownMenu from "./DropDownMenu";

export default function NavBar() {
  const isNarrow = useMediaQuery({ query: "(max-width: 390px)" });
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="navbar">
      {!isNarrow && (
        <nav className="navbarWide">
          <div className="flexbox">
            <div className="title">
              <Link to="/blog" className="button">
                Do it Myself
              </Link>
            </div>
            <div className="item">
              <Link to="/blog/hardware" className="button">
                Hardware{" "}
              </Link>
              <Link to="/blog/software" className="button">
                Software{" "}
              </Link>
            </div>
          </div>
        </nav>
      )}
      {isNarrow && (
        <div>
          <nav className="navbarNarrow">
            <div className="flexbox">
              <div className="title">
                <Link to="/blog" className="button">
                  Do it Myself
                </Link>
              </div>
              <div className="item">
                <a onClick={handleClick}>
                <img
                  src={require("../../assets/images/menu.png")}
                  alt="menu"
                  className="menu"
                />
                </a>
              </div>
            </div>
          </nav>
          <DropDownMenu click={click} handleClick={handleClick}/>
        </div>
      )}
    </div>
  );
}
