import { WeatherData } from "../models/weatherData";

export interface UserFormData {
  title?: string;
  temperature?: "c" | "f";
  wind?: "on" | "off";
}
export type TemperatureUnit = "c" | "f";
export type WindValue = "on" | "off";
export type RadioGroup = "temperature" | "wind";
export type ServiceDataType = WeatherData | string;
