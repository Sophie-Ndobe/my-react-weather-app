import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";
import WeatherCondition from "./WeatherCondition";
import Cities from "./Cities";

export default function SearchEngine() {
  const [city, setCity] = useState(" ");
  const [weather, setWeather] = useState(" ");

  function displayWeather(response) {
    console.log(response);
    setWeather({
      city: response.data.city,
      temperature: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "2c13e0a2b6fe347b0421bb02eef2o43t";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div className="SearchEngine">
      <Cities />
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={updateCity}></input>
        <button className="btn btn-primary mb-1">Search</button>
        <button className="btn btn-success ms-2 mb-1">Current</button>
      </form>
      <WeatherCondition
        temp={weather.temperature}
        humidity={weather.humidity}
        wind={weather.wind}
        description={weather.description}
        city={weather.city}
      />
    </div>
  );
}
