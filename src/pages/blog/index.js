import React from "react";
import styled from "styled-components";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";
import { Heading1 } from "../../components/Typography";
import { Container } from "../../components/Container";
import { TextContainer } from "../../components/TextContainer";
import { PageContainer } from "../../components/PageContainer";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Container>
          <PageContainer>
            <TextContainer>
              <Heading1>Blog Archive</Heading1>
            </TextContainer>
            <BlogRoll />
          </PageContainer>
        </Container>
      </Layout>
    );
  }
}
