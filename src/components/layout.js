import { Link, useStaticQuery, graphql } from "gatsby";
import React from "react";
import Profile from "./profile.js"
import Nav from "./nav.js"

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
        
        <Nav></Nav>

      </nav>


      </main>


    </div>
  );
}

export default Layout;