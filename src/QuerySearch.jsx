import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import styled from "@emotion/styled";

import CardComponent from "./CardComponent";
import FoldingCube from "./FoldingCube";
import ErrorMsg from "./ErrorMsg";

const openWeatherAPI = import.meta.env.VITE_OPENWEATHER_API_KEY;

const WeatherCardOrder = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  margin: 2rem;

  @media (min-width: 587px) {
    justify-content: space-around;
  }
`;

const WeatherSearch = styled.h2`
  margin-left: 1rem;
`;

const StyleForm = styled.div`
  margin-top: 1rem;
  margin-left: 1rem;
`;

export default function generateWeatherData() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q");
  const [inputQuery, setInputQuery] = useState(query || "");
  const useFarenheight = "&units=imperial";
  const { isLoading, error, data } = useQuery({
    queryKey: ["searchingWeatherCoords", query],
    queryFn: async () => {
      //   throw new Error("Testing...");
      // If no query has been sent, log to the console. Return empty object.
      if (!query) {
        console.log(
          "Data: No data exists, since no query has been sent. Try sending a query!"
        );
        return {};
      }
      const geoRes = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${query}&appid=${openWeatherAPI}`
      );
      const geoData = await geoRes.json();
      const currentForecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${geoData[0]["lat"]}&lon=${geoData[0]["lon"]}&appid=${openWeatherAPI}${useFarenheight}`
      );
      const FiveDayThreeHour = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${geoData[0]["lat"]}&lon=${geoData[0]["lon"]}&appid=${openWeatherAPI}${useFarenheight}`
      );
      const SixteenDayForecast = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${geoData[0]["lat"]}&lon=${geoData[0]["lon"]}&cnt=16&appid=${openWeatherAPI}${useFarenheight}`
      );
      const SixteenDayForecastData = await SixteenDayForecast.json();
      const FiveDayThreeHourData = await FiveDayThreeHour.json();
      const currentForecastResData = await currentForecastRes.json();

      const countCards = [
        SixteenDayForecastData["list"],
        FiveDayThreeHourData["list"],
      ];

      const objData = [
        "FiveDayThreeHourData",
        "SixteenDayForecastData",
        "currentForecastResData",
      ];

      return {
        currentForecastResData,
        FiveDayThreeHourData,
        SixteenDayForecastData,
        countCards,
        objData,
      };
    },
  });

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSearchParams({ q: inputQuery });
        }}
      >
        <StyleForm>
          <input
            value={inputQuery}
            placeholder="Beaverton, OR, US"
            onChange={(e) => setInputQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </StyleForm>
      </form>
      <WeatherSearch>Search query: {query}</WeatherSearch>
      {error && (
        <ErrorMsg
          children={
            "Error: Could not fetch results, please try again. Make sure to search 'City, State, Country Code'. An example of this would be: Beaverton, OR, US"
          }
        />
      )}
      {isLoading && <FoldingCube />}
      <WeatherCardOrder>
        <CardComponent
          data={data}
          objName={data && data.objData}
          totalCards={data && data.countCards}
        />
      </WeatherCardOrder>
    </>
  );
}
