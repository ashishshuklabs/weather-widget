import React, { useEffect } from "react";
import styled from "styled-components";
import { designVariables } from "../../styles/globalVariables";
import { Card } from "../cards/Card";
import { Form } from "../form/Form";
import { UserFormData } from "../../types";
import {
  getRoundedValue,
  getWindDirection,
  WeatherData,
} from "../../models/weatherData";
import { useFetch } from "../../hooks/useFetch";
import { getCityName } from "../../services/fetchService";

export const Content = () => {
  const [formData, setFormData] = React.useState<UserFormData>({});
  const [city, setCity] = React.useState("No Data");
  //Fetch data on load
  const { data, error, loading } = useFetch();
  const handleFormData = (userData: UserFormData) => {
    setFormData(userData);
  };
  const cityData = async () => {
    const response = await getCityName();
    // console.log(response);
    setCity(response);
  };
  React.useEffect(() => {
    cityData();
  }, []);
  return (
    <StyledCards>
      {loading ? (
        <div>Loading please wait....</div>
      ) : error ? (
        <div>error</div>
      ) : (
        <Card
          title={formData.title ? formData.title : "some title"}
          city={city || "sydney"}
          degrees={data ? getRoundedValue(data.current.temp) : "No Data"}
          wind={
            data
              ? `${getWindDirection(data.current.wind_deg)} ${getRoundedValue(
                  data.current.wind_speed
                )}`
              : "No Data"
          }
          className="card"
          temperatureUnit={formData.temperature || "f"}
          showWind={formData.wind || "on"}
          weatherIcon={data ? data.current.weather[0].icon : ""}
        />
      )}
      <Form className="form" formData={handleFormData} />
    </StyledCards>
  );
};

const StyledCards = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto 1rem;
  max-height: 25rem;
  max-width: 50rem;
  height: 100%;
  width: 100%;
  position: relative;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border: 1px solid ${designVariables.palette.light500};
  background: ${designVariables.palette.light400};
  .card {
    order: 1;
    width: 100%;
    height: 65%;
    background: ${designVariables.palette.light100};
    box-shadow: 0 2px 1px 3px ${designVariables.palette.dark100};
  }
  .form {
    width: 100%;
    height: 65%;
    background: transparent;
  }
  &:before {
    content: "";
    position: absolute;
    top: -3%;
    left: 0;
    width: 100%;
    height: 5px;
    background: ${designVariables.palette.blue200};
  }
  &:after {
    content: "";
    position: absolute;
    top: 25%;
    left: 50%;
    height: 50%;
    width: 1px;
    background: ${designVariables.palette.light600};
  }
`;
