import React from "react";
import Layout from "../components/layout";
import "./index.css"

const IndexPage = () => {
  return (
    <>
      <title>IndexPage</title>
      <Layout pageTitle="Home Page">
        <div className="indexContainer">
          <div className="indexMain">KimDongHyeon</div>
          <div className="indexSub">Welcome to my protfolio</div>
        </div>
      </Layout>
    </>

  );
}

export default IndexPage;