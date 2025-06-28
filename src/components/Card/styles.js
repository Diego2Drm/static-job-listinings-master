import styled from "styled-components";
import { Theme } from "../../GlobalStyle"

export const Article = styled.article`
/* border: 2px solid ${({ $hasData }) => ($hasData ? "red" : "transparent")}; */
margin-top: ${({ $hasData }) => ($hasData ? "5.5rem" : "0rem")};
background: #fff;
display: flex;
flex-direction: column;
margin-bottom: 5rem;
box-shadow: 0 0 1rem ${Theme.colors.DesaturatedDarkCyan};
border-radius: 1rem;
padding: 3rem 2rem;
&:nth-child(1), &:nth-child(2){
border-left: .5rem solid ${Theme.colors.DesaturatedDarkCyan};
}
@media (min-width: 768px){
  width: 80%;
  margin: 0 auto 5rem;
  flex-direction: row;
  align-items: center;
}
`
export const PositionDiv = styled.div`
width: 100%;
position: relative;
padding-bottom: 1rem;
border-bottom: 1px solid #b0b0b0;
@media (min-width: 768px){
border-bottom: none;
}
`
export const RoleDiv = styled.div`
padding-top: 2rem;
width: 100%;
display: flex;
flex-wrap: wrap;
gap: 2rem;
@media (min-width: 768px) {
  justify-content: end;
  padding-right: 3rem;
}
`

// Card
export const ContainerCompanyDiv = styled.div`
@media (min-width: 768px){
  display: flex;
  align-items: center;
  gap: 3rem;
}
`
export const LogoImg = styled.img`
width: 5rem;
position: absolute;
top: -5.5rem;
@media (min-width: 768px){
  position: static;
  width: initial;
}
`
export const CompanyDiv = styled.div`
display: flex;
align-items: center;
gap: 1rem;
margin: 1rem 0;
`
export const CompanyP = styled.p`
color: ${Theme.colors.DesaturatedDarkCyan};
font-size: 1.7rem;
font-weight: bold;
margin-right: 1rem;
`
export const Span = styled.span`
border-radius: 2rem;
color: #fff;
text-transform: uppercase;
padding: .5rem .7rem;
font-size: 1.4rem;
font-weight: 600;
text-align: center;
`
export const NewSpan = styled(Span)`
background: ${Theme.colors.DesaturatedDarkCyan};
`
export const FeaturesSpan = styled(Span)`
background: ${Theme.colors.VeryDarkGrayishCyan};
`
export const PositionP = styled.p`
color: ${Theme.colors.VeryDarkGrayishCyan};
font-size: 1.7rem;
margin: 1.5rem 0;
font-weight: bold;
cursor: pointer;
transition: all 500ms ease-in-out;
&:hover{
  color: ${Theme.colors.DesaturatedDarkCyan};
}
`
export const MoreInfoDiv = styled.div`
display: flex;
margin: 1rem 0;
gap: 3rem;
`
export const MoreInfoP = styled.p`
color: #a1a1a1;
font-size: 1.5rem;
font-weight: 700;
&:nth-child(2){
  position: relative;
  &::before{
    content: "";
    width: .4rem;
    height: .4rem;
    background: #a1a1a1;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: -1rem;
    transform: translate(-50%, -50%);
  }
}
&:nth-child(3){
  position: relative;
  &::before{
    content: "";
    width: .4rem;
    height: .4rem;
    background: #a1a1a1;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: -1rem;
    transform: translate(-50%, -50%);
  }
}
`
export const RoleP = styled.p`
color: ${Theme.colors.DesaturatedDarkCyan};
background: ${Theme.colors.LightGrayishCyanBackground};
padding: 1rem;
font-weight: bold;
font-size: 1.6rem;
text-align: center;
border-radius: 1rem;
cursor: pointer;
transition: all 500ms ease-in-out;
&:hover{
  background: ${Theme.colors.DesaturatedDarkCyan};
  color: #fff;
}
`

// Buttons Filtered

export const ButtonsSection = styled.section`
background: #fff;
border-radius: 1rem;
box-shadow: 0 0 1rem ${Theme.colors.DesaturatedDarkCyan};
width: 90%;
position: absolute;
top: -4rem;
left: 50%;
transform: translateX(-50%);
padding: 2rem;
display: flex;
justify-content: space-between;
align-items: center;
@media (min-width: 768px){
  width: 78%;
}
`
export const ButtonsDiv = styled.div`
display: flex; 
gap: 1rem; 
flex-wrap: wrap;
`
export const ButtonContent = styled.div`
display: flex; 
align-items: center;
gap: 1rem; 
background: ${Theme.colors.LightGrayishCyanFilterTablets};
/* padding: .7rem; */
border-radius: .5rem;
overflow: hidden;
`
export const FilteredP = styled.p`
color: ${Theme.colors.DesaturatedDarkCyan};
font-size: 1.5rem;
font-weight: bold;
padding: .7rem;
`
export const ButtonRemove = styled.button`
width: 100%;
height: 100%;
background: ${Theme.colors.DesaturatedDarkCyan};
border: none;
padding: .7rem;
cursor: pointer;
transition: all 500ms ease-in-out;
&:hover{
  background: ${Theme.colors.VeryDarkGrayishCyan};
}
`
export const ButtonClear = styled.button`
border: none;
color: ${Theme.colors.DarkGrayishCyan};
font-weight: bold;
background: none;
cursor: pointer;
transition: border 500ms ease-in-out;
&:hover{
  color: ${Theme.colors.DesaturatedDarkCyan};
  border-bottom: 1px solid ${Theme.colors.DesaturatedDarkCyan};
}
`