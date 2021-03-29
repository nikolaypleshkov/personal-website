import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavItem, NavLinks, NavMenu} from './navbar-elements'
const name = 'Nikolay Pleshkov'

const Navbar = ({ toggle }) => {
    return (
        <>
          <Nav>
              <NavbarContainer>
                  <NavLogo to="/">
                      {name}
                  </NavLogo>
                  <MobileIcon onClick={toggle}>
                      <FaBars />
                  </MobileIcon>
                  <NavMenu>
                      <NavItem>
                          <NavLinks to="about" >About</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="projects" >Projects</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="skills" >Skills</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="contact" >Contact</NavLinks>
                      </NavItem>
                  </NavMenu>
              </NavbarContainer>
          </Nav>
        </>
    );
};

export default Navbar;
