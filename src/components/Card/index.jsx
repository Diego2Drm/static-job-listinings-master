import React, { useState } from "react";
// import data from "../../data.json"
import { Article, CompanyDiv, CompanyP, ContainerCompanyDiv, FeaturesSpan, LogoImg, MoreInfoDiv, MoreInfoP, NewSpan, PositionDiv, PositionP, RoleDiv, RoleP } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { applyFilters, removeFilter } from "../../features/filter/filterSlice";
import { ButtonsFiltered } from "./ButtonsFiltered";

const Card = () => {
  const { data, filtered } = useSelector(state => state.filter);
  const info = filtered.length > 0 ? filtered : data;
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({
    role: "",
    level: "",
    languages: [],
    tools: [],
  })

  const handleFilterClick = (type, value) => {
    const newFilters = { ...filters };

    if (type === "languages" || type === "tools") {
      newFilters[type] = newFilters[type].includes(value)
        ? newFilters[type].filter(item => item !== value)
        : [...newFilters[type], value];
    } else {
      newFilters[type] = newFilters[type] === value ? "" : value;
    }

    setFilters(newFilters);
    dispatch(applyFilters(newFilters));
  }

  // const roleFiltered = (value) => {
  //   dispatch(filterRole(value))
  //   setRole(value)
  // }

  const handleRemoveTag = (type, value) => {
    const updated = { ...filters };

    if (Array.isArray(updated[type])) {
      updated[type] = updated[type].filter(v => v !== value);
    } else {
      updated[type] = "";
    }

    setFilters(updated);
    dispatch(applyFilters(updated));
  };

  const handleReset = () => {
    const cleared = { role: "", level: "", languages: [], tools: [] };
    setFilters(cleared);
    dispatch(removeFilter());
  };
  // const handleState = () => {
  //   dispatch(removeFilter())
  //   setFilters({
  //     role: "",
  //     level: "",
  //     languages: [],
  //     tools: [],
  //   })
  // }

  const hasActiveFilters = Object.values(filters).some(value => {
    if (Array.isArray(value)) return value.length > 0;
    return Boolean(value);
  });

  return (
    <>
      {
        hasActiveFilters &&
        <ButtonsFiltered filters={filters} onReset={handleReset} onRemove={handleRemoveTag} />
      }
      {info.map(item => (
        <Article key={item.id} $hasData={hasActiveFilters}>
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
            <RoleP onClick={() => handleFilterClick("role", item.role)}>{item.role}</RoleP>
            <RoleP onClick={() => handleFilterClick("level", item.level)}>{item.level}</RoleP>
            {item.languages.map((language, i) => (
              <RoleP key={i} onClick={() => handleFilterClick("languages", language)}>
                {language}
              </RoleP>
            ))}
            {item.tools?.map((tool, i) => (
              <RoleP key={i} onClick={() => handleFilterClick("tools", tool)}>
                {tool}
              </RoleP>
            ))}
          </RoleDiv>
        </Article>
      ))
      }

    </>
  )
};

export { Card }