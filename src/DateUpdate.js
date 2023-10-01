import React from "react";

import Forecast from "./Forecast";

export default function DateUpdate(props) {
  let date = new Date();

  let hours = date.getHours();

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[date.getDay()];

  function forecastDayUpdate() {
    let forecastDate = new Date(props.time * 1000);
    let forecastDay = forecastDate.getDay();
    let forecastDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return forecastDays[forecastDay];
  }

  return (
    <div className="DateUpdate">
      {day} {hours}:{minutes}
      <Forecast day={forecastDayUpdate()} />
    </div>
  );
}
