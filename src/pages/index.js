import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <>
      <title>IndexPage</title>
      <Layout pageTitle="Home Page">
        <p>Welcome!! InfoDon Tech Blog ~</p>
        <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://picsum.photos/500/300"
      />
      </Layout>
    </>

  );
}

export default IndexPage;