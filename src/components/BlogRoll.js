import { graphql, StaticQuery } from "gatsby";
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { TextContainer } from "./TextContainer";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import { StyledLink } from "./StyledLink";
import { Heading2 } from "./Typography";
import { grays } from "../theme";

const Post = styled.article`
  margin-bottom: 3em;

  :last-child {
    margin-bottom: 0;
  }
`;

const PostMeta = styled.p`
  color: ${grays.gray40};
  font-size: 0.8em;
  margin-top: 0;
  text-transform: uppercase;
`;

const PostHeading = styled(Heading2)`
  margin-bottom: 0.2em;
`;

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <TextContainer>
        {posts &&
          posts.map(({ node: post }) => (
            <Post key={post.id}>
              <header>
                {post.frontmatter.featuredimage ? (
                  <div className="featured-thumbnail">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.title}`
                      }}
                    />
                  </div>
                ) : null}
                <PostHeading>
                  <StyledLink
                    className="title has-text-primary is-size-4"
                    to={post.fields.slug}
                  >
                    {post.frontmatter.title}
                  </StyledLink>
                </PostHeading>
                <PostMeta>{post.frontmatter.date}</PostMeta>
              </header>
              <p>
                {post.excerpt}
                <br />
                <br />
                <StyledLink className="button" to={post.fields.slug}>
                  Keep Reading →
                </StyledLink>
              </p>
            </Post>
          ))}
      </TextContainer>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
