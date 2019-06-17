import React from 'react';
import styled from 'styled-components';

import { kebabCase } from "lodash";
import { Heading4 } from './Typography';
import { StyledLink } from './StyledLink';

const TagList = styled.ul`
  display: block;
  margin: 0.5em 0;
  padding: 0;
`

const Tag = styled.li`
  display: inline-block;
  padding: 0;
  
  :after {
    content: ',';
    margin-right: 0.3em;
  }

  :last-child {
    :after {
      content: '';
    }
  }
`

export const Tags = ({tags}) => (
  <div style={{ marginTop: `4rem` }}>
    <Heading4>Tags</Heading4>
    <TagList>
      {tags.map(tag => (
        <Tag key={tag + `tag`}>
          <StyledLink to={`/tags/${kebabCase(tag)}/`}>{tag}</StyledLink>
        </Tag>
      ))}
    </TagList>
  </div>
);
