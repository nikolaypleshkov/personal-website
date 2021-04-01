import styled from 'styled-components'

export const SkillsContainer = styled.div`
  color: #fff;
  background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#0f1014')};

  @media screen and (max-width: 768px){
      padding: 100px 0;
  }
`

export const SkillsWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  marign-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`