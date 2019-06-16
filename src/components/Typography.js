import React from 'react'
import styled from 'styled-components'

import { fontFamilySerif } from '../theme';

export const Heading1 = styled.h1`
  font-size: 2.2em;
  line-height: 1.3em;
  font-family: ${fontFamilySerif};
  font-weight: 500;

  :first-child {
    margin-top: 0;
  }
`

export const Heading2 = styled.h2`
  font-size: 1.8em;
  line-height: 1.3em;
  font-family: ${fontFamilySerif};
  font-weight: 500;

  :first-child {
    margin-top: 0;
  }
`
