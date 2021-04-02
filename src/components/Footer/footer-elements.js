import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const FooterContainer = styled.footer`
  background-color: #0f1014;
`

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screenb and (max-wdith: 820px){
      padding-top: 32px;
  }
`

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-wdith: 820px){
      flex-direction: column;
  }
`

export const FooterLinksItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 250px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-wdith: 420px){
      margin: 0;
      padding: 10px;
      width: 100%;
  }
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
`

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  font-size: 2rem;
  margin-left: 10%;
`