import React, { useState } from "react";

import Weather from "./Weather";

export default function Api(props, city = "Pretoria") {
  let updateCity = props.city;
  const [weather, setWeather] = useState(" ");
  function displayWeather(response) {
    setWeather({
      setCity: response.data.city,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
    });
  }

  function apiCall() {
    let apiKey = "2c13e0a2b6fe347b0421bb02eef2o43t";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  return (
    <div className="Api">
      <Weather
        city={weather.setCity}
        temp={weather.temperature}
        humidity={weather.humidity}
        descr={weather.description}
      />
    </div>
  );
}
