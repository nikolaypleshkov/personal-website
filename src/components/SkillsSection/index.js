import React from 'react'
import {Column1,
        TextWrapper, 
        TopLine, 
        Heading,
        Subtitle} from '../AboutSection/about-elements'

import {SkillsRow,SkillsContainer, SkillsWrapper} from './skills-elements'
function SkillsSection(id,lightBg,lightText,darkText,imgStart,topLine,heading1,description1,description2,description3,heading2,description4,description5,description6) {
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
                  </TextWrapper>
                </Column1>
                </SkillsRow>   
            </SkillsWrapper>
        </SkillsContainer>
    )
}

export default SkillsSection
