import React from 'react'
import {Column1,
        TextWrapper, 
        TopLine, 
        Heading,
        Subtitle} from '../AboutSection/about-elements'
import {SkillsContainer, SkillsWrapper} from './skills-elements'
function SkillsSection(id,lightBg,lightText,imgStart,topLine,heading1,description1,description2,description3,heading2,description4,description5,description6) {
    return (
        <SkillsContainer lightBg = {lightBg} id = {id}>
            <SkillsWrapper>
                <SkillsRow imgStart = {imgStart}>
                    <Column1>
                  <TextWrapper>
                      <TopLine>{topLine}</TopLine>
                      <Heading>{heading1}</Heading>
                      <Subtitle>{description1}</Subtitle>
                      <Subtitle>{description2}</Subtitle>
                      <Subtitle>{description3}</Subtitle>
                      <Heading>{heading2}</Heading>
                      <Subtitle> {description4}</Subtitle>
                      <Subtitle>{description5}</Subtitle>
                      <Subtitle>{description6}</Subtitle>
                  </TextWrapper>
                </Column1>
                </SkillsRow>
                
            </SkillsWrapper>
        </SkillsContainer>
    )
}

export default SkillsSection
