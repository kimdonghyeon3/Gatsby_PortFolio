
import React from "react";
import Layout from "../../components/layout";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import "./{mdx.slug}.css"

const BlogPost = ({data}) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <div className="postContainer">
        <Link to="/blog" className="postClose"> X </Link>
        <div className="postTitle">{data.mdx.frontmatter.title}</div>

        <div className="postContentBox">
          <div className="postContentImg">
              <img src={data.mdx.frontmatter.description}/>
              이미지 넣는 자리
          </div>
          <div className="postContentDes">
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </div>
        </div>

      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "YYYY")
      }
      body
    }
  }
`;

export default BlogPost;