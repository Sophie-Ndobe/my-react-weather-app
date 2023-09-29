import React from "react";
import "./WeatherCondition.css";

export default function WeatherCondition(props) {
  return (
    <div className="WeatherCondition">
      <h1>{props.city}Lisbon</h1>
      <ul>
        <li>Tuesday 13:19</li>
        <li>{props.description}Clear</li>
      </ul>
      <div className="row">
        <div className="col">
          <div className="d-flex">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              className="me-2"
            ></img>
            <h2>{props.temp}27</h2>
            <span className="Units">°C</span>
          </div>
        </div>
        <div className="col">
          <ul>
            <li>Humidity: {props.humidity} 60%</li>
            <li>Wind: {props.wind} 6km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
