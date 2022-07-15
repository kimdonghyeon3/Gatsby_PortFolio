import React from "react";
import "./nav.css"
import {AiOutlineHome, AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'
import { Link } from "gatsby";


// AiOutlineHome
//BsPerson
function Nav() {
  return (
    <div className="nav_container">
         <ul className="navLinks">
          <li className="navLinkItem">
            <div className="hoverText">Home</div>
            <Link className="navLinkText" to="/">
              <AiOutlineHome size="42" color="#3ec0de"/>
            </Link>
          </li>
          <li className="navLinkItem">
            <div className="hoverText">About Me</div>
            <Link className="navLinkText" to="/about">
              <BsPerson size="42" color="#3ec0de"/>
            </Link>
          </li>
          <li className="navLinkItem">
            <div className="hoverText">Project</div>
            <Link className="navLinkText" to="/blog">
              <AiOutlineFundProjectionScreen size="42" color="#3ec0de"/>
            </Link>
          </li>
        </ul>

    </div>
  );
}

export default Nav;