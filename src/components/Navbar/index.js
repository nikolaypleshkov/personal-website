import React, {useState,useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import { animateScroll } from 'react-scroll'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavItem, NavLinks, NavMenu} from './navbar-elements'
import {animateScroll as scroll} from 'react-scroll'

const name = 'Nikolay Pleshkov'

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState (false)

    const changeNav = () =>{
        if(window.scrollY >= 80){
            setScrollNav(true)
        }
        else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll' , changeNav)
      
    },[]);

    const toggleHome = () =>{
        scroll.scrollToTop();
    }

    return (
        <>
          <Nav scrollNav={scrollNav}>
              <NavbarContainer>
                  <NavLogo to="/" onClick={toggleHome}>
                      {name}
                  </NavLogo>
                  <MobileIcon onClick={toggle}>
                      <FaBars />
                  </MobileIcon>
                  <NavMenu>
                      <NavItem>
                          <NavLinks to="about"smooth={true} duration={500} spy={true} exact='true' offset={0} >About</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="skills"smooth={true} duration={500} spy={true} exact='true' offset={0} >Skills</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="projects"smooth={true} duration={500} spy={true} exact='true' offset={0} >Projects</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="contact" smooth={true} duration={500} spy={true} exact='true' offset={0} >Contact</NavLinks>
                      </NavItem>
                  </NavMenu>
              </NavbarContainer>
          </Nav>
        </>
    );
};

export default Navbar;
