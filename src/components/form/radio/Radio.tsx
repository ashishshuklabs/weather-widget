import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { designVariables } from "../../../styles/globalVariables";
import { RadioGroup } from "../../../types";
interface RadioProps {
  title: string;
  labels: string[];
  className?: string;
  type?: "temperature" | "string";
  onSelected?: (selected: string, radioGroup: RadioGroup) => void;
}
export const Radio = (props: RadioProps) => {
  const handleSelected = (e: ChangeEvent<HTMLInputElement>, value: string) => {
    if (props.onSelected) {
      if (props.title === "temperature" || props.title === "wind")
        props.onSelected(value, props.title);
    }
  };
  const RadioOptions = (): React.ReactNode => {
    const options = props.labels.map<React.ReactNode>((l) => (
      <StyledRadio key={l}>
        <label
          className={`label-text ${
            props.type && props.type === "temperature" ? "temperature" : ""
          }`}
          htmlFor={`radio-${l}`}
        >
          {l}
        </label>
        <input
          className="radio-icon"
          id={`radio-${l}`}
          type="radio"
          name={props.title}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleSelected(e, l)}
        />
      </StyledRadio>
    ));
    return <RadioOptionWrapper>{options}</RadioOptionWrapper>;
  };
  return (
    <StyledContainer className={props.className}>
      <h5 className="title">{props.title}</h5>
      {RadioOptions()}
    </StyledContainer>
  );
};
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  &:not(:last-child) {
    margin: 1rem auto;
  }
  .title {
    font-weight: 300;
  }
`;
const RadioOptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;
const StyledRadio = styled.div`
  display: flex;
  align-items: center;
  .label-text {
    font-size: 1rem;
    order: 1;
    text-transform: capitalize;
    position: relative;
    padding-left: 0.5rem;
    &.temperature {
      &::after {
        position: absolute;
        content: "\xB0";
        left: 0;
        top: 0;
      }
    }
  }
  .radio-icon {
    margin-right: 1rem;
    position: relative;
    cursor: pointer;

    &::before {
      content: "";
      top: 0;
      left: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 100%;
      background: white;
      opacity: 0;
    }
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 100%;
      width: 100%;
      height: 100%;
      border: 4px solid ${designVariables.palette.blue200};
      opacity: 0;
    }
    &:checked::after,
    &:checked::before {
      opacity: 1;
    }
  }
`;
