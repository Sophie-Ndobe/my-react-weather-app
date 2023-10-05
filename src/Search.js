import React, { useState } from "react";
import Api from "./Api";
import Weather from "./Weather";

export default function Search() {
  const [city, setCity] = useState();
  function handleSubmit(event) {
    event.preventDefault();
    alert(`${city}`);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={updateCity} />
        <button className="btn btn-primary">Search</button>
        <button className="btn btn-success">Current</button>
      </form>
      <Weather city={city} />
      <Api city={city} />
    </div>
  );
}
