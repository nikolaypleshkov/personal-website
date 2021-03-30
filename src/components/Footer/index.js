import React from 'react'
import {FooterContainer,
        FooterWrap,
        FooterLinksContainer,
        FooterLinksWrapper,
        FooterLinksItems,
        FooterLinkTitle,
        FooterLink} from './footer-elements'

function Footer() {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                         <FooterLinksItems>
                             <FooterLinkTitle>Nikolay Pleshkov</FooterLinkTitle>
                                 <FooterLink to="about">About Me</FooterLink>
                                 <FooterLink to="skills">Skills</FooterLink>
                                 <FooterLink to="projects">My Projects</FooterLink>
                                 <FooterLink to="contact">Contact</FooterLink>
                         </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                         <FooterLinksItems>
                             <FooterLinkTitle>Social Media</FooterLinkTitle>
                                 <FooterLink to="/about">Facebook</FooterLink>
                                 <FooterLink to="/skills">Instagram</FooterLink>
                                 <FooterLink to="/projects">Github</FooterLink>
                                 <FooterLink to="/contact">Discord</FooterLink>
                         </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    ) 
}

export default Footer
