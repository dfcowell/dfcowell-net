import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import { colors } from '../theme';

export const StyledLink = styled(Link)`
  color: ${colors.accent};
  text-decoration: none;

  :hover {
    color: ${colors.lightAccent};
  }
`