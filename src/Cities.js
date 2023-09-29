import React from "react";
import "./Cities.css";

export default function Cities() {
  return (
    <div className="Cities">
      <div className="row mt-3 mb-3">
        <div className="col-2">
          <a href="/">Pretoria</a>
        </div>
        <div className="col-2">
          <a href="/">Harare</a>
        </div>
        <div className="col-2">
          <a href="/">London</a>
        </div>
        <div className="col-1">
          <a href="/">Houston</a>
        </div>
      </div>
    </div>
  );
}
