import React from 'react'
import { Column1, Column2, Img, ImgWrap, TextWrapper, TopLine } from '../AboutSection/about-elements'
import {ContactContainer, ContactWrapper, ContactRow} from './contact-elements'

function Contact({id,lightBg,lightText,imgStart,topLine,darkText,img,alt,}) {
    return (
        <ContactContainer lightBg={lightBg} id={id}>
            <ContactWrapper>
                <ContactRow imgStart={imgStart}>
                    <Column1>
                      <TextWrapper>
                          <TopLine>{topLine}</TopLine>
                                   
                      </TextWrapper>
                    </Column1>
                    <Column2>
                     <ImgWrap>
                     <Img src={img} alt={img} />
                     </ImgWrap>
                    </Column2>
                </ContactRow>
            </ContactWrapper>
        </ContactContainer>
    )
}

export default Contact
