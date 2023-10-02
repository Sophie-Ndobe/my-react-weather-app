import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  //let date = new Date(props.time * 1000);
  //let day = date.getDay();
  //let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  function displayForecast(response) {
    console.log(response);
    setForecast(response);
    setLoaded(true);
  }

  function forecastApiCall() {
    let apiKey = "2c13e0a2b6fe347b0421bb02eef2o43t";
    let forecastApiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;
    axios.get(forecastApiUrl).then(displayForecast);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col">
            <p>Mon</p>
            <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" />
            <p>10°</p>
          </div>
        </div>
      </div>
    );
  }
}
