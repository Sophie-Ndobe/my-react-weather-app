import React from "react";
import "./Forecast.css";

export default function Forecast(props) {
  return <div className="row">{props.day}</div>;
}
