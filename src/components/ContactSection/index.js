import React from 'react'
import { Column1, TextWrapper, TopLine } from '../AboutSection/about-elements'
import {ContactContainer, ContactWrapper, ContactRow} from './contact-elements'

function Contact() {
    return (
        <ContactContainer>
            <ContactWrapper>
                <ContactRow>
                    <Column1>
                      <TextWrapper>
                          <TopLine>Contact Me</TopLine>
                                   
                      </TextWrapper>
                    </Column1>
                </ContactRow>
            </ContactWrapper>
        </ContactContainer>
    )
}

export default Contact
