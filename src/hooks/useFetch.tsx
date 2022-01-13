import React, { useEffect, useState } from "react";
import { fetchCityWeather } from "../services/fetchService";
import { WeatherData } from "../models/weatherData";
import { ServiceDataType } from "../types";
//Can make this generic to pass any api call, but keeping it simple for now.

export const useFetch = () => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const fetchWeather = async () => {
    const data = await fetchCityWeather<ServiceDataType>();
    if (typeof data === "string") {
      setError(data);
      setData(null);
    } else {
      setData(data);
      setError(null);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchWeather();
  }, []);
  return { data, error, loading, setData, setError, setLoading };
};
