import React from "react";
import { IconRemove } from "./IconRemove";
import { ButtonClear, ButtonContent, ButtonRemove, ButtonsDiv, ButtonsSection, FilteredP } from "./styles";

const ButtonsFiltered = ({ filters, onReset, onRemove }) => {
  const generateTags = () => {
    const tags = [];

    Object.entries(filters).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach(v => tags.push({ key, value: v }));
      } else if (value) {
        tags.push({ key, value });
      }
    });

    return tags;
  };

  const tags = generateTags();

  return (
    <ButtonsSection>
      <ButtonsDiv>
        {
          tags.map((tag, i) => (
            <ButtonContent key={i}>
              <FilteredP >{tag.value}</FilteredP>
              <ButtonRemove onClick={() => onRemove(tag.key, tag.value)}><IconRemove /></ButtonRemove>
            </ButtonContent>
          ))
        }
      </ButtonsDiv>
      <div>
        <ButtonClear onClick={onReset}>Clear</ButtonClear>
      </div>
    </ButtonsSection>
  )
}

export { ButtonsFiltered };