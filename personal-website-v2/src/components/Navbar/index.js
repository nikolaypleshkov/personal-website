import React from 'react'
import {Nav,
        Container,
        Logo, 
        Burger, 
        Line1, 
        Line2, 
        Line3,
        NavMenu,
        NavItem,
        NavLinks} from './nav-elements'
const  Navbar = () => {
    return (
       <Nav>
           <Container>
               <Logo to="/">
                   Nikolay Pleshkov
               </Logo>
               <Burger>
                   <Line1></Line1>
                   <Line2></Line2>
                   <Line3></Line3>
               </Burger>
               <NavMenu>
                   <NavItem>
                       <NavLinks to="#about">About</NavLinks>
                   </NavItem>
                   <NavItem>
                       <NavLinks to="#about">Skills</NavLinks>
                   </NavItem>
                   <NavItem>
                       <NavLinks to="#about">Projects</NavLinks>
                   </NavItem>
                   <NavItem>
                       <NavLinks to="#about">Contact</NavLinks>
                   </NavItem>
               </NavMenu>
           </Container>
       </Nav>
    )
}

export default Navbar
