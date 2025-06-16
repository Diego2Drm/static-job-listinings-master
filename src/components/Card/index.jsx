import React, { useState } from "react";
import data from "../../data.json"
import { Article, CompanyDiv, CompanyP, ContainerCompanyDiv, FeaturesSpan, LogoImg, MoreInfoDiv, MoreInfoP, NewSpan, PositionDiv, PositionP, RoleDiv, RoleP } from "./styles";

const Card = () => {
  const [info, setInfo] = useState(data);

  return (
    <>
      {info.map(item => (
        <Article key={item.id}>
          <PositionDiv>
            <ContainerCompanyDiv>
              <LogoImg src={item.logo} alt={item.position} />
              <div>
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
              </div>
            </ContainerCompanyDiv>
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