import axios, { AxiosRequestConfig } from "axios";
import { WeatherData } from "../models/weatherData";
import { ServiceDataType } from "../types";
const config = () => {
  return {
    baseUrl: "https://api.openweathermap.org",
    apiKey: "f65f9ac44b09574be22f44d21ce49c58",
  };
};
//converting to promise based api
const getPosition = (
  options?: PositionOptions
): Promise<GeolocationPosition> => {
  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject, options)
  );
};
//fetch city name from geolocation coordinates
export const getCityName = async (): Promise<string> => {
  try {
    const location = await getPosition();

    const configs: AxiosRequestConfig = {
      params: {
        appid: config().apiKey,
        lat: location.coords.latitude,
        lon: location.coords.longitude,
        limit: 1,
      },
    };
    const response = await axios.get<any>(
      `${config().baseUrl}/geo/1.0/reverse`,
      configs
    );
    return response.data[0].name as string;
  } catch (error) {
    return axios.isAxiosError(error)
      ? error.message
      : "unknown error occured on fetching data";
  }
};
//fetch city weather from geolocation coordinates
export const fetchCityWeather = async <
  T extends ServiceDataType
>(): Promise<T> => {
  try {
    const location = await getPosition();
    const configs: AxiosRequestConfig = {
      params: {
        appid: config().apiKey,
        units: "metric",
        lat: location.coords.latitude,
        lon: location.coords.longitude,
        exclude: "minutely",
      },
    };
    const response = await axios.get<WeatherData>(
      `${config().baseUrl}/data/2.5/onecall`,
      configs
    );

    return response.data as T;
  } catch (error) {
    return axios.isAxiosError(error)
      ? (error.message as T)
      : ("unknown error occured on fetching data" as T);
  }
};
