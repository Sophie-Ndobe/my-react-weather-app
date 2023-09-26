import React, { useState } from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
  const [city, setCity] = useState(" ");

  function handleSubmit(event) {
    event.preventDefault();
    alert(city);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div className="SearchEngine">
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={updateCity}></input>
        <button className="btn btn-primary mb-1">Search</button>
        <button className="btn btn-success ms-2 mb-1">Current</button>
      </form>
    </div>
  );
}
