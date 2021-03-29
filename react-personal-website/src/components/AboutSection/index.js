import React from 'react'
import {Button} from '../Button'
import { ImgWrap, 
    AboutContainer,
    AboutWrapper,
    AboutRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    Img }
    from './about-elements'


function AboutSection() {
    return (
        <>
        <AboutContainer>
            <AboutWrapper>
                <AboutRow>
                    <Column1>
                     <TextWrapper>
                         <TopLine>TopLine</TopLine>
                         <Heading>Heading</Heading>
                         <Subtitle>Subtitle</Subtitle>
                         <BtnWrap>
                             <Button to='home' />
                         </BtnWrap>
                     </TextWrapper>
                    </Column1>
                    <Column2>
                     <ImgWrap>
                       <Img />
                     </ImgWrap>
                    </Column2>
                </AboutRow>
            </AboutWrapper>
        </AboutContainer>
        </>
    )
}

export default AboutSection
