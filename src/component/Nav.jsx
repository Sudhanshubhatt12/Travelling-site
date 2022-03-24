import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import {
  FaFacebook,
  FaInstagram,
  FaGoogle,
  FaBars,
  FaRegWindowClose,
} from "react-icons/fa";

const Nav = () => {
  const [isMobile, setisMobile] = useState(false);
  return (
    <>
      <div className="main-nav">
        <div className="navbar">
          <ul
            className={isMobile ? "nav-links-mobile" : "nav-links"}
            onClick={() => setisMobile(false)}
          >
            <Link to="/" className="navlink">
              <li> Home</li>
            </Link>

            <Link to="/About" className="navlink">
              <li> About </li>
            </Link>

            <Link to="/Projects" className="navlink">
              <li> Projects</li>
            </Link>

            <Link to="/ContactUs" className="navlink">
              <li> Contact Us </li>
            </Link>
            <Link to="/Gallery" className="navlink">
              <li> Gallery </li>
            </Link>
          </ul>
          <button
            className="mobile-menu"
            onClick={() => setisMobile(!isMobile)}
          >
            {isMobile ? <FaRegWindowClose /> : <FaBars />}
          </button>
        </div>
        <div className="social">
          <ul>
            <li>
              <span className="iconss">
                <a href="http://www.facebook.com/profile.php?id=100072418380485">
                  {<FaFacebook />}
                </a>
              </span>
            </li>
            <li>
              <span className="iconss">
                {" "}
                <a href="https://www.instagram.com/sudhanshu_bhatt12/">
                  {<FaInstagram />}
                </a>
              </span>
            </li>
            <li>
              <span className="iconss">
                {" "}
                <a href="https://mailto:sudhanshubhatt161@gmail.com">
                  {<FaGoogle />}
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
