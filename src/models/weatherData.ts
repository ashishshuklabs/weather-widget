export interface WeatherData {
  current: {
    dt: number;
    temp: number;
    wind_speed: number;
    wind_deg: number;
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
  };
}
//Round decimal values to integer
export const getRoundedValue = (value: number): string => {
  return value.toFixed(0);
};
//convert wind direction in to string.
export const getWindDirection = (angle: number) => {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  return directions[Math.round(angle / 45) % 8];
};
