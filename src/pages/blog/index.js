import React from 'react'
import styled from 'styled-components'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import { Heading1 } from '../../components/Typography';
import { CenteredTextContainer } from '../../components/TextContainer';

const PageContainer = styled.div`
  padding: 3em 0;
`

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <PageContainer>
          <CenteredTextContainer>
            <Heading1>Blog Archive</Heading1>
          </CenteredTextContainer>
          <BlogRoll />
        </PageContainer>
      </Layout>
    )
  }
}
