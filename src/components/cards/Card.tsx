import React from "react";
import styled from "styled-components";
import i01d from "../../assets/icon/01d.png";
import i02d from "../../assets/icon/02d.png";
import i03d from "../../assets/icon/03d.png";
import i04d from "../../assets/icon/04d.png";
import i09d from "../../assets/icon/09d.png";
import i10d from "../../assets/icon/10d.png";
import i11d from "../../assets/icon/11d.png";
import i13d from "../../assets/icon/13d.png";
import i50d from "../../assets/icon/50d.png";
import i01n from "../../assets/icon/01n.png";
import i02n from "../../assets/icon/02n.png";
import i03n from "../../assets/icon/03n.png";
import i04n from "../../assets/icon/04n.png";
import i09n from "../../assets/icon/09n.png";
import i10n from "../../assets/icon/10n.png";
import i11n from "../../assets/icon/11n.png";
import i13n from "../../assets/icon/13n.png";
import i50n from "../../assets/icon/50n.png";
import { TemperatureUnit, WindValue } from "../../types";
//load all images and return based on value recieved. These are the ones I could find so far in open weather.
const getImage = (imageName: string) => {
  switch (imageName) {
    case "01d":
      return i01d;
    case "02d":
      return i02d;
    case "03d":
      return i03d;
    case "04d":
      return i04d;
    case "09d":
      return i09d;
    case "10d":
      return i10d;
    case "11d":
      return i11d;
    case "13d":
      return i13d;
    case "50d":
      return i50d;
    case "01n":
      return i01n;
    case "02n":
      return i02n;
    case "03n":
      return i03n;
    case "04n":
      return i04n;
    case "09n":
      return i09n;
    case "10n":
      return i10n;
    case "11n":
      return i11n;
    case "13n":
      return i13n;
    case "50n":
      return i50n;
    default:
      return i01d;
  }
};
interface CardProps {
  className?: string;
  title: string;
  city: string;
  degrees: string;
  temperatureUnit?: TemperatureUnit;
  wind: string;
  showWind?: WindValue;
  weatherIcon: string;
}
export const Card = (props: CardProps) => {
  return (
    <StyledCard unit={props.temperatureUnit} className={props.className}>
      <h3 className="title">{props.title}</h3>
      <div className="weather-container">
        <div className="weather-icon">
          <img
            src={`${getImage(props.weatherIcon)}`}
            alt="weather icon"
            className="icon"
          />
        </div>
        <div className="stats-container">
          <h4 className="city">{props.city}</h4>
          <div className="degrees">
            {props.degrees}
            {props.temperatureUnit && (
              <span className="unit">{props.temperatureUnit}</span>
            )}
          </div>
          {props.showWind && props.showWind === "on" && (
            <div className="wind-container">
              <h5 className="title">wind</h5>
              <p className="wind">{`${props.wind}km/h`}</p>
            </div>
          )}
        </div>
      </div>
    </StyledCard>
  );
};

const StyledCard = styled.article<{ unit?: TemperatureUnit }>`
  background: transparent;
  flex-direction: column;
  max-width: 18rem;
  margin: auto 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 5px;
  overflow: hidden;
  .title {
    text-transform: uppercase;
  }
  .weather-container {
    display: flex;
    justify-content: space-between;
    .weather-icon {
      width: 6.5rem;
    }
    .stats-container {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      .city {
        font-size: 1rem;
        font-weight: 300;
      }
      .degrees {
        font-size: 2rem;
        font-weight: 700;
        position: relative;
        &::after {
          content: "\xB0";
          position: absolute;
          top: 0;
          left: 50%;
        }
        .unit {
          padding-left: 1rem;
          text-transform: uppercase;
        }
      }
      .wind-container {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        .title {
          text-transform: capitalize;
          font-weight: 700;
          margin-right: 0.5rem;
        }
        .wind {
          font-size: 0.95rem;
        }
      }
    }
  }
  @media (max-width: 570px) {
    .title {
      font-size: 1.25rem;
    }
    .weather-container {
      .weather-icon {
        width: 5.5rem;
      }
      .stats-container {
        .city {
          font-size: 0.8rem;
        }
        .degrees {
          font-size: 1.5rem;
        }
        .wind-container {
          .title {
            font-size: 0.75rem;
          }
          .wind {
            font-size: 0.75rem;
          }
        }
      }
    }
  }
`;
