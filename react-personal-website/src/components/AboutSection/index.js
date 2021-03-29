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


function AboutSection({id,lightBg,lightText,imgStart,topLine,headline,darkText,description,buttonLabel,img, primary,dark,dark2}) {
    return (
        <>
        <AboutContainer lightBg={lightBg} id={id}>
            <AboutWrapper>
                <AboutRow imgStart={imgStart}>
                    <Column1>
                     <TextWrapper>
                         <TopLine>{topLine}</TopLine>
                         <Heading lightText={lightText}>{headline}</Heading>
                         <Subtitle darkText={darkText}>{description}</Subtitle>
                         <BtnWrap>
                             <Button to='home' smooth={true} duration={500} spy={true} exacr="true" offset={-80} primary={primary ? 1 : 0} dark={dark ? 1 : 0} dark2={dark2 ? 1 : 0}>{buttonLabel}</Button>
                         </BtnWrap>
                     </TextWrapper>
                    </Column1>
                    <Column2>
                     <ImgWrap>
                       <Img src={img} />
                     </ImgWrap>
                    </Column2>
                </AboutRow>
            </AboutWrapper>
        </AboutContainer>
        </>
    )
}

export default AboutSection
