import React from "react";
import { IconRemove } from "./IconRemove";
import { ButtonClear, ButtonContent, ButtonRemove, ButtonsDiv, ButtonsSection, FilteredP } from "./styles";

const ButtonsFiltered = (props) => {
  const { role, onReset } = props;

  return (
    <ButtonsSection>
      <ButtonsDiv>
        <ButtonContent>
          <FilteredP >{role}</FilteredP>
          <ButtonRemove onClick={onReset}><IconRemove /></ButtonRemove>
        </ButtonContent>
      </ButtonsDiv>
      <div>
        <ButtonClear>Clear</ButtonClear>
      </div>
    </ButtonsSection>
  )
}

export { ButtonsFiltered };