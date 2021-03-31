import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaReddit } from 'react-icons/fa'
import {FooterContainer,
        FooterWrap,
        FooterLinksContainer,
        FooterLinksWrapper,
        FooterLinksItems,
        SocialIconLink,
        SocialIcons} from './footer-elements'

function Footer() {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                         <FooterLinksItems>
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
                         </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    ) 
}

export default Footer
