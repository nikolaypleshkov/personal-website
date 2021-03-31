import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaReddit } from 'react-icons/fa'
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
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialMediaLogo to='/'>
                            Nikolay
                        </SocialMediaLogo>
                        <WebsiteRights>nikolaypleshkov © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' targer="_blank" aria-label="Facebook">
                                <FaFacebook />
                                </SocialIconLink>
                           
                            <SocialIconLink href='/' targer="_blank" aria-label="Facebook">
                                <FaInstagram />
                            </SocialIconLink>

                            <SocialIconLink href='/' targer="_blank" aria-label="Facebook">
                                <FaGithub />
                            </SocialIconLink>
                            
                            <SocialIconLink href='/' targer="_blank" aria-label="Facebook">
                                <FaReddit />
                            </SocialIconLink>

                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    ) 
}

export default Footer
