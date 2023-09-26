import React from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
  return (
    <div className="SearchEngine">
      <form>
        <input type="search"></input>
        <button className="btn btn-primary mb-1">Search</button>
        <button className="btn btn-success ms-2 mb-1">Current</button>
      </form>
    </div>
  );
}
