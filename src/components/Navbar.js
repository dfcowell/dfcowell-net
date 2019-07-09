import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';

import github from '../img/social/github.svg'
import { fontFamilySerif, colors, grays, fontFamilySans, layoutWidth } from '../theme';
import { SocialIcon } from './SocialIcon';

const StyledSiteNameLink = styled(Link)`
  color: ${grays.black};
  font-family: ${fontFamilySerif};
  font-size: 1.5em;
  margin-right: 1em;
  text-decoration: none;
`

const StyledNav = styled.nav`
  background: ${colors.neutral};
`

const StyledLinkContainer = styled.div`
  display: inline-flex;
`

const StyledMenuContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: space-between;
  height: 4em;
`

const StyledNavLink = styled(Link)`
  color: ${grays.gray20};
  text-decoration: none;
  font-family: ${fontFamilySans};
  margin: 0.75em;

  :hover {
    color: ${grays.gray40};
  }
`

const StyledNavContainer = styled.div`
  align-items: center;
  display: flex;
  margin: 0 auto;
  max-width: ${layoutWidth};
  padding: 0 2em;
`

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <StyledNav
        className="navbar"
        role="navigation"
        aria-label="main-navigation"
      >
        <StyledNavContainer>
          <StyledSiteNameLink to="/" title="Logo">Dan Cowell</StyledSiteNameLink>
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${this.state.navBarActiveClass}`}
            data-target="navMenu"
            onClick={() => this.toggleHamburger()}
          >
            <span />
            <span />
            <span />
          </div>
          <StyledMenuContainer
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <StyledLinkContainer className="navbar-start has-text-centered">
              <StyledNavLink className="navbar-item" to="/about">
                About
              </StyledNavLink>
              { /* <StyledNavLink className="navbar-item" to="/projects">
                Projects
    </StyledNavLink> */ }
              <StyledNavLink className="navbar-item" to="/blog">
                Blog
              </StyledNavLink>
              <StyledNavLink className="navbar-item" to="/contact">
                Contact
              </StyledNavLink>
            </StyledLinkContainer>
            <StyledLinkContainer>
              <SocialIcon title="Dan on Github" href="https://github.com/dfcowell" src={github} alt="Github Icon" />
            </StyledLinkContainer>
          </StyledMenuContainer>
        </StyledNavContainer>
      </StyledNav>
    )
  }
}

export default Navbar
