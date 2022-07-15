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
            <Link className="navLinkText" to="/">
              <AiOutlineHome size="30" color="white"/>Home
            </Link>
          </li>
          <li className="navLinkItem">
            <Link className="navLinkText" to="/about">
              <BsPerson size="30" color="white"/>About
            </Link>
          </li>
          <li className="navLinkItem">
            <Link className="navLinkText" to="/blog">
              <AiOutlineFundProjectionScreen size="30" color="white"/>Blog
            </Link>
          </li>
        </ul>

    </div>
  );
}

export default Nav;