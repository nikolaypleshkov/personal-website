import React from 'react'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavItem, NavLinks} from './navbar-elements'
const name = 'Nikolay Pleshkov'
const Navbar = () => {
    return (
        <>
          <Nav>
              <NavbarContainer>
                  <NavLogo to="/">
                      {name}
                  </NavLogo>
                  <MobileIcon>
                      <FaBar />
                  </MobileIcon>
                  <NavMenu>
                      <NavItem>
                          <NavLinks to="about" >About</NavLinks>
                      </NavItem>
                  </NavMenu>
              </NavbarContainer>
          </Nav>
        </>
    );
};

export default Navbar;
