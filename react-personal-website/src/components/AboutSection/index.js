import React from 'react'

function AboutSection() {
    return (
        <>
        <AboutContainer id={id}>
            <AboutWrapper>
                <AboutRow>
                    <Column1>
                     <TextWrapper>
                         <TopLine>TopLine</TopLine>
                         <Heading>Heading</Heading>
                         <Subtitle>Subtitle</Subtitle>
                         <BtnWrap>
                             <Button to='home'>Button</Button>
                         </BtnWrap>
                     </TextWrapper>
                    </Column1>
                </AboutRow>
            </AboutWrapper>
        </AboutContainer>
        </>
    )
}

export default AboutSection
