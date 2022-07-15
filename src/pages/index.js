import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import "./index.css"

const IndexPage = () => {
  return (
    <>
      <title>IndexPage</title>
      <Layout pageTitle="Home Page">
        <div className="indexContainer">
          <div className="indexMain">KimDongHyeon</div>
          <div classNmae="indexSub">Welcome to my protfolio</div>
        </div>
      </Layout>
    </>

  );
}

export default IndexPage;