import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { Container } from "../components/Container";
import { TextContainer } from "../components/TextContainer";
import { PageContainer } from "../components/PageContainer";
import { Heading2, Heading3, Heading4 } from "../components/Typography";

const Sidebar = styled.aside`
  flex-grow: 0;
  padding-left: 3em;
`;

const Main = styled(TextContainer)`
  flex-shrink: 0;
`;

export const AboutPageTemplate = ({
  title,
  content,
  contentComponent,
  skillCategories,
  skills
}) => {
  const PageContent = contentComponent || Content;

  return (
    <PageContainer>
      <Container>
        <Main>
          <Heading2>{title}</Heading2>
          <PageContent className="content" content={content} />
        </Main>
        <Sidebar>
          <Heading3>Technical Skills</Heading3>
          {skillCategories.map(category => (
            <Fragment key={category}>
              <Heading4>{category}</Heading4>
              <ul>
                {skills[category].map(skill => (
                  <li key={skill.skill}>{skill.skill}</li>
                ))}
              </ul>
            </Fragment>
          ))}
        </Sidebar>
      </Container>
    </PageContainer>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  console.log(data);

  const groupedSkills = post.frontmatter.skills.reduce((sk, skill) => {
    if (!sk[skill.category]) {
      sk[skill.category] = [];
    }

    sk[skill.category].push(skill);

    return sk;
  }, {});

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        skillCategories={Object.keys(groupedSkills).sort()}
        skills={groupedSkills}
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
        skills {
          category
          skill
          score
        }
      }
    }
  }
`;
