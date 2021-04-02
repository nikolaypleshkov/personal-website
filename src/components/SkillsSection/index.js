import React from 'react'
import {Column1,
        TextWrapper, 
        TopLine, 
        Heading,
        Subtitle,
        Column2,
        ImgWrap,
        Img,
        BtnWrap} from '../AboutSection/about-elements'

import {SkillsRow,SkillsContainer, SkillsWrapper} from './skills-elements'
import {Button} from '../Button'
function SkillsSection({id,lightBg,lightText,darkText,imgStart,topLine,heading1,description1,description2,description3,heading2,description4,description5,description6,primary,dark,dark2,buttonLabel,img,alt,heading3,description7,description8}) {
    return (
        <SkillsContainer lightBg = {lightBg} id = {id}>
            <SkillsWrapper>
                <SkillsRow imgStart = {imgStart}>
                    <Column1>
                  <TextWrapper>
                      <TopLine>{topLine}</TopLine>
                      <Heading lightText = {lightText}>{heading1}</Heading>
                      <Subtitle darkText = {darkText}>{description1}</Subtitle>
                      <Subtitle darkText = {darkText}>{description2}</Subtitle>
                      <Subtitle darkText = {darkText}>{description3}</Subtitle>
                      <Heading lightText = {lightText}>{heading2}</Heading>
                      <Subtitle darkText = {darkText}> {description4}</Subtitle>
                      <Subtitle darkText = {darkText}>{description5}</Subtitle>
                      <Subtitle darkText = {darkText}>{description6}</Subtitle>
                      <Heading lightText = {lightText}>{heading3}</Heading>
                      <Subtitle darkText = {darkText}> {description7}</Subtitle>
                      <Subtitle darkText = {darkText}> {description8}</Subtitle>
                      <BtnWrap>
                             <Button to='projects' smooth={true} duration={500} spy={true} exacr="true" offset={-80} primary={primary ? 1 : 0} dark={dark ? 1 : 0} dark2={dark2 ? 1 : 0}>{buttonLabel}</Button>
                         </BtnWrap>
                  </TextWrapper>
                </Column1>
                <Column2>
                     <ImgWrap>
                       <Img src={img} alt={alt} />
                     </ImgWrap>
                    </Column2>
                </SkillsRow>   
            </SkillsWrapper>
        </SkillsContainer>
    )
}

export default SkillsSection
