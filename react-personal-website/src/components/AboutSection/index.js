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
        <AboutContainer lightBg={lightBg} id={id}>
            <AboutWrapper>
                <AboutRow imgStart={imgStart}>
                    <Column1>
                     <TextWrapper>
                         <TopLine>{topLine}</TopLine>
                         <Heading lightText={lightText}>{headling}</Heading>
                         <Subtitle darkText={darkText}>{description}</Subtitle>
                         <BtnWrap>
                             <Button to='home' >{buttonLabel}</Button>
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
