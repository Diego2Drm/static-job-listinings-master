import React, { useState } from "react";
import data from "../../data.json"
import { Article, PositionDiv, RoleDiv } from "./styles";
import styled from "styled-components";
import { Theme } from "../../GlobalStyle";

const LogoImg = styled.img`
width: 5rem;
position: absolute;
top: -5.5rem;
`
const CompanyDiv = styled.div`
display: flex;
align-items: center;
gap: 1rem;
margin: 1rem 0;
`
const CompanyP = styled.p`
color: ${Theme.colors.DesaturatedDarkCyan};
font-size: 1.7rem;
font-weight: bold;
margin-right: 1rem;
`
const Span = styled.span`
border-radius: 2rem;
color: #fff;
text-transform: uppercase;
padding: .5rem .7rem;
font-size: 1.4rem;
font-weight: 600;
text-align: center;
`
const NewSpan = styled(Span)`
background: ${Theme.colors.DesaturatedDarkCyan};
`
const FeaturesSpan = styled(Span)`
background: ${Theme.colors.VeryDarkGrayishCyan};
`
const PositionP = styled.p`
color: ${Theme.colors.VeryDarkGrayishCyan};
font-size: 1.7rem;
margin: 1.5rem 0;
font-weight: bold;
`
const MoreInfoDiv = styled.div`
display: flex;
margin: 1rem 0;
gap: 3rem;
`
const MoreInfoP = styled.p`
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
const RoleP = styled.p`
color: ${Theme.colors.DesaturatedDarkCyan};
background: ${Theme.colors.LightGrayishCyanBackground};
padding: 1rem;
font-weight: bold;
font-size: 1.6rem;
text-align: center;
border-radius: 1rem;
`

const Card = () => {
  const [info, setInfo] = useState(data);

  return (
    <>
      {info.map(item => (
        <Article key={item.id}>
          <PositionDiv>
            <LogoImg src={item.logo} alt={item.position} />
            <CompanyDiv>
              <CompanyP>{item.company}</CompanyP>
              {item.new && <NewSpan>New!</NewSpan>}{item.featured && <FeaturesSpan>featured</FeaturesSpan>}
            </CompanyDiv>
            <PositionP>{item.position}</PositionP>
            <MoreInfoDiv>
              <MoreInfoP>{item.postedAt}</MoreInfoP>
              <MoreInfoP>{item.contract}</MoreInfoP>
              <MoreInfoP>{item.location}</MoreInfoP>
            </MoreInfoDiv>
          </PositionDiv>
          <RoleDiv>
            <RoleP>{item.role}</RoleP>
            <RoleP>{item.level}</RoleP>
            {
              item.languages.map((lenguage, i) => 
              <RoleP key={i}>{lenguage}</RoleP>)
            }
            {
              item.tools?.map((tool, i) => 
              <RoleP key={i}>{tool}</RoleP>)
            }
          </RoleDiv>
        </Article>
      ))
      }

    </>
  )
};

export { Card }