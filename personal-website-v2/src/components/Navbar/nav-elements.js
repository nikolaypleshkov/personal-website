import styled from 'styled-components'
import {Link as LinkRouter} from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'

export const Nav = styled.div`
  background: ${({scrollNav}) => (scrollNav ? '#0f1014' : 'transparent')};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.8s all ease;

  @media screen and (max-width: 960px){
      transition: 0.8s all ease;
  }
`
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index : 1;
  width: 100%; 
  padding: 0 24px;
  max-width: 1100px;
`
export const Logo = styled(LinkRouter)`
  color:#fff !important;
  justify-self: flex-start ;
  cursor:pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none !important;
 `

 export const Burger = styled.div`
   display:none;
   cursor: pointer;

   @media screen and (max-width: 768px){
      display:block ;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
      color: #fff;
  }
 `

 export const Line1 = styled.div`
    width: 35px;
    height: 1.5px;
    background-color: rgb(226,226,226);
    margin: 5px;
    transition: all 0.3s ease;
 `
 export const Line2 = styled.div`
 width: 35px;
 height: 1.5px;
 background-color: rgb(226,226,226);
 margin: 5px;
 transition: all 0.3s ease;
`
 export const Line3 = styled.div`
    width: 35px;
    height: 1.5px;
    background-color: rgb(226,226,226);
    margin: 5px;
    transition: all 0.3s ease;
 `

 export const NavMenu = styled.ul`
   display: flex;
   align-items: center;
   list-style: none;
   text-align: center;
   margin-right: -22px;

   @media screen and (max-width: 768px){
      display:none !important;
  }
 `

 export const NavItem = styled.li`
  height: 80px ; 
  margin-top: 20px;
 `
 export const NavLinks = styled(LinkScroll)`
   color: #fff !important;
   display: flex !important;
   align-items: center;
   text-decoration: none !important;
   padding: 0 1rem;
   height: 100%;
   cursor: pointer;
    &.active{
     border-bottom: 3.5px solid #F50057;
    }
 `