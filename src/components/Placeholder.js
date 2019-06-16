import React, { Component } from 'react';
import styled from 'styled-components';

import { colors, fontFamilySerif } from '../theme';

const H1 = styled.h1`
  color: ${colors.accent};
  font-size: 3em;
  font-family: ${fontFamilySerif};
`;

const P = styled.p`
  color: ${colors.accent};
  font-size: 1em;
  text-transform: uppercase;
`;

const StyledMain = styled.main`
  background: ${colors.lightNeutral};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  z-index: 1000;
`;

export const Placeholder = () => (
  <StyledMain>
    <div>
      <H1>Dan Cowell</H1>
      <P>Front End Engineer</P>
    </div>
  </StyledMain>
);
