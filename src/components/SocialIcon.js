import React from 'react';
import styled from 'styled-components';

const StyledSocialIcon = styled.img`
  width: 2em;
`

const StyledSocialLink = styled.a`
  display: inline-block;
`

export const SocialIcon = ({ alt, className = '', src, title, href }) => (
  <StyledSocialLink title={title} href={href} className={className}>
    <StyledSocialIcon
      src={src}
      alt={alt}
    />
  </StyledSocialLink>
);
