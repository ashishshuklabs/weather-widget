import React, { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { useDebounce } from "../../../hooks/useDebounce";
import { designVariables } from "../../../styles/globalVariables";
interface InputProps {
  label: string;
  placeholder: string;
  className?: string;
  onChange?: (value: string) => void;
}
export const Input = (props: InputProps) => {
  const [value, setValue] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const { debouncedValue } = useDebounce(value);
  useEffect(() => {
    if (props.onChange) {
      props.onChange(debouncedValue);
    }
  }, [debouncedValue]);
  return (
    <StyledInput className={props.className}>
      <label htmlFor="text-area" className="label">
        {props.label}
      </label>
      <input
        type="text"
        id="text-area"
        className="text-area"
        placeholder={props.placeholder}
        onChange={handleChange}
      />
    </StyledInput>
  );
};

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  .label {
    margin: 0.5rem 0;
    color: #000;
    line-height: 1;
    font-size: 1rem;
    text-transform: capitalize;
    text-align: start;
    display: inline-block;
  }
  .text-area {
    width: 100%;
    border: 1px solid ${designVariables.palette.grey100};
    border-radius: 4px;
    outline: none;
    line-height: 1.5;
    font-size: 1.5rem;
    &::placeholder {
      font-size: 1rem;
      color: ${designVariables.palette.dark200};
      padding-left: 0.5rem;
      text-transform: capitalize;
    }
  }
`;
