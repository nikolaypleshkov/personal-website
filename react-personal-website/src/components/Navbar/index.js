import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavItem, NavLinks, NavMenu} from './navbar-elements'
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
                      <FaBars />
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
