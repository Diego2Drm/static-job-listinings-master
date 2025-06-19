import React, { useState } from "react";
// import data from "../../data.json"
import { Article, CompanyDiv, CompanyP, ContainerCompanyDiv, FeaturesSpan, LogoImg, MoreInfoDiv, MoreInfoP, NewSpan, PositionDiv, PositionP, RoleDiv, RoleP } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { filterFrontEnd, originalState } from "../../features/filter/filterSlice";
import { ButtonsFiltered } from "./ButtonsFiltered";

const Card = () => {
  const info = useSelector(state => state.filter);
  const dispacth = useDispatch();
  const [role, setRole] = useState("")

  const frontendFiltered = (value) => {
    dispacth(filterFrontEnd(value))
    setRole(value)
  }
  const handleState = () => {
    dispacth(originalState())
    setRole("")
  }

  return (
    <>
      {
        role &&
        <ButtonsFiltered role={role} onReset={handleState} />
      }
      {info.map(item => (
        <Article key={item.id} $hasData={role}>
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
            <RoleP onClick={() => frontendFiltered(item.role)}>{item.role}</RoleP>
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