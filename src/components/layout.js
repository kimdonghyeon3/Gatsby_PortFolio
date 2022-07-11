import { Link, useStaticQuery, graphql } from "gatsby";
import React from "react";

import Profile from "./profile.js"

import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  navContainer,
  mainContainer,
  mainProfile,
  contentContainer,
} from "./layout.module.css";

function Layout({ pageTitle, children }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <div className={container}>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      
      
      <main className={mainContainer}>

        <div className={mainProfile}>
          <Profile></Profile>
        </div>
        {/* <header className={siteTitle}>{data.site.siteMetadata.title}</header> */}
        <content className={contentContainer}>
          ji
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </content>

      <nav className={navContainer}>
        
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/">
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/about">
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </nav>


      </main>


    </div>
  );
}

export default Layout;