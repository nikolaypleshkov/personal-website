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


function AboutSection({id,lightBg,lightText,imgStart,topLine,headline,darkText,description,buttonLabel,img,alt,primary,dark,dark2,description2,headline2,hobby1,hobby2,hobby3,hobby4}) {
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
                         <Subtitle darkText={darkText}>{description2}</Subtitle>
                         <Heading lightText={lightText}>{headline2}</Heading>
                         <Subtitle darkText={darkText}>{hobby1}</Subtitle>
                         <Subtitle darkText={darkText}>{hobby2}</Subtitle>
                         <Subtitle darkText={darkText}>{hobby3}</Subtitle>
                         <Subtitle darkText={darkText}>{hobby4}</Subtitle>
                         <BtnWrap>
                             <Button to='home' smooth={true} duration={500} spy={true} exacr="true" offset={-80} primary={primary ? 1 : 0} dark={dark ? 1 : 0} dark2={dark2 ? 1 : 0}>{buttonLabel}</Button>
                         </BtnWrap>
                     </TextWrapper>
                    </Column1>
                    <Column2>
                     <ImgWrap>
                       <Img src={img} alt={alt} />
                     </ImgWrap>
                    </Column2>
                </AboutRow>
            </AboutWrapper>
        </AboutContainer>
        </>
    )
}

export default AboutSection
