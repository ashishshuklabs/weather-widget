import React, { useEffect } from "react";
import styled from "styled-components";
import {
  RadioGroup,
  TemperatureUnit,
  UserFormData,
  WindValue,
} from "../../types";
import { Input } from "./input/Input";
import { Radio } from "./radio/Radio";
interface FormProps {
  className?: string;
  formData: (userData: UserFormData) => void;
}

export const Form = (props: FormProps) => {
  const [formData, setFormData] = React.useState<UserFormData>({});
  const handleInput = (value: string) => {
    setFormData({ ...formData, title: value });
  };
  const handleRadio = (value: string, radioGroup: RadioGroup) => {
    if (radioGroup === "temperature") {
      setFormData({ ...formData, temperature: value as TemperatureUnit });
      return;
    }
    setFormData({ ...formData, wind: value as WindValue });
  };
  useEffect(() => {
    if (props.formData) {
      props.formData(formData);
    }
  }, [formData]);
  return (
    <StyledForm className={props.className}>
      <Input
        className="input"
        label="title"
        placeholder="title of widget"
        onChange={handleInput}
      />
      <Radio
        className="temperature"
        title="temperature"
        labels={["c", "f"]}
        type="temperature"
        onSelected={handleRadio}
      />
      <Radio
        className="wind"
        title="wind"
        labels={["on", "off"]}
        onSelected={handleRadio}
      />
    </StyledForm>
  );
};

const StyledForm = styled.form`
  background: transparent;
  max-width: 18rem;
  margin: auto 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  .input {
    width: 100%;
  }
  .temperature {
    width: 100%;
  }
  .wind {
    width: 100%;
  }
`;
