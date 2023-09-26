import React, { useState } from "react";
import "./WeatherCondition.css";

export default function WeatherCondition() {
  return (
    <div className="WeatherCondition">
      <h1>Lisbon</h1>
      <ul>
        <li>Tuesday 13:19</li>
        <li>Clear</li>
      </ul>
      <div className="row">
        <div className="col">
          <div className="d-flex">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              className="me-2"
            ></img>
            <h2>27</h2>
            <span className="Units">°C</span>
          </div>
        </div>
        <div className="col">
          <ul>
            <li>Humidity: 60%</li>
            <li>Wind: 6km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
