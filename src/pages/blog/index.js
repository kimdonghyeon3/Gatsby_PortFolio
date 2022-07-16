import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../../components/layout";
import "./index.css"

const BlogPage = ({ data }) => {
  return (
    <div>
    <title>Project</title>
    <Layout pageTitle="My Blog Posts">
      <div className="projectContainer">
        <div className="projectTitle">Project</div>
        {data.allMdx.nodes.map((node) => (
          <article key={node.id} className="projectItem">
            <div  className="projectItemTitleBox">
              <Link to={`/blog/${node.slug}`} className="projectItemTitle">{node.frontmatter.title}</Link>
            </div>
            <div className="projectDate">{node.frontmatter.date}</div>
          </article>
        ))}
      </div>
    </Layout>
    </div>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "YYYY")
          title
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage;