import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { TextContainer } from "../components/TextContainer";
import { PageContainer } from "../components/PageContainer";
import { layoutWidth } from "../theme";
import { Heading2 } from "../components/Typography";

const AboutPageContainer = styled(PageContainer)`
  max-width: ${layoutWidth};
  margin: 0 auto;
`;

const AboutTextContainer = styled(TextContainer)`
  padding-left: 0;
`;

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <AboutPageContainer>
      <AboutTextContainer>
        <Heading2>{title}</Heading2>
        <PageContent className="content" content={content} />
      </AboutTextContainer>
    </AboutPageContainer>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
