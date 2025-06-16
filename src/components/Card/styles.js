import styled from "styled-components";
import { Theme } from "../../GlobalStyle"

export const Article = styled.article`
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
`
export const PositionDiv = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 1rem;
  border-bottom: 1px solid #b0b0b0;
`
export const RoleDiv = styled.div`
padding-top: 2rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`