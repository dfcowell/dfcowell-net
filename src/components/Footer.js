import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import github from "../img/social/github.svg";
import { colors, layoutWidth } from "../theme";
import { SocialIcon } from "./SocialIcon";

const StyledFooter = styled.footer`
  background: ${colors.darkNeutral};
  padding: 3em 0;
`;

const FooterContainer = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: ${layoutWidth};
  padding: 0 2em;
`;

const FooterSocialIcon = styled(SocialIcon)`
  margin-right: 0.5em;
`;

const Biography = styled.section`
  flex-grow: 1;
`;

const LinkContainer = styled.nav`
  box-sizing: border-box;
  padding: 0 2em 0 0;
  width: 25%;
`;

const Footer = class extends React.Component {
  render() {
    return (
      <StyledFooter className="footer has-background-black has-text-white-ter">
        <FooterContainer className="content has-text-centered">
          <Biography>
            <div>
              <FooterSocialIcon
                title="Dan on Facebook"
                href="https://facebook.com/dfcowell"
                src={facebook}
                alt="Facebook Icon"
              />
              <FooterSocialIcon
                title="Dan on Instagram"
                href="https://instagram.com/dfcowell"
                src={instagram}
                alt="Instagram Icon"
              />
              <FooterSocialIcon
                title="Dan on Twitter"
                href="https://twitter.com/dfcowell"
                src={twitter}
                alt="Twitter Icon"
              />
              <FooterSocialIcon
                title="Dan on Github"
                href="https://github.com/dfcowell"
                src={github}
                alt="Github Icon"
              />
            </div>
          </Biography>
          <LinkContainer className="menu">
            <ul className="menu-list">
              <li>
                <Link to="/" className="navbar-item">
                  Home
                </Link>
              </li>
              <li>
                <Link className="navbar-item" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="navbar-item" to="/products">
                  Products
                </Link>
              </li>
            </ul>
          </LinkContainer>
          <LinkContainer>
            <ul className="menu-list">
              <li>
                <Link className="navbar-item" to="/blog">
                  Latest Stories
                </Link>
              </li>
              <li>
                <Link className="navbar-item" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </LinkContainer>
        </FooterContainer>
      </StyledFooter>
    );
  }
};

export default Footer;
