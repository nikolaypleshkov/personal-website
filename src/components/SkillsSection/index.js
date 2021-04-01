import React from 'react'
import {Column1,
        TextWrapper, 
        TopLine, 
        Heading,
        Subtitle} from '../AboutSection/about-elements'
import {SkillsContainer, SkillsWrapper} from './skills-elements'
function SkillsSection() {
    return (
        <SkillsContainer>
            <SkillsWrapper>
                <Column1>
                  <TextWrapper>
                      <TopLine>Skills</TopLine>
                      <Heading>Programing Languages</Heading>
                      <Subtitle> - Language 1</Subtitle>
                      <Subtitle> - Language 2</Subtitle>
                      <Subtitle> - Language 3</Subtitle>
                      <Heading>Web development</Heading>
                      <Subtitle> HTLM/CSS</Subtitle>
                      <Subtitle>JavaScript (React + Next.js)</Subtitle>
                      <Subtitle>Bootstrap, Foundation, MDBoostrap</Subtitle>
                  </TextWrapper>
                </Column1>
            </SkillsWrapper>
        </SkillsContainer>
    )
}

export default SkillsSection