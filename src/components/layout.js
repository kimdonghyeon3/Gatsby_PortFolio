import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import Profile from "./profile.js"
import Nav from "./nav.js"
import {
  container,
  heading,
  navContainer,
  mainContainer,
  mainProfile,
  contentContainer,
  contentContainerSub,
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
        <div className={contentContainer}>
          <div className={contentContainerSub}>
          {children}
          </div>
        </div>

      <nav className={navContainer}>
        <Nav></Nav>
      </nav>

      </main>
    </div>
  );
}

export default Layout;