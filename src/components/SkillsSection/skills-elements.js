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

export const SkillsRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1ft);
  align-items: center;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px){
      grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
  }
`