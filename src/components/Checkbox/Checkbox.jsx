import React from "react";
import "./checkbox.css";
import cities from "../../data/cities";

export default function Checkbox() {
  let continentes = Array.from(new Set(cities.map((e) => e.continent))).sort();
  return continentes.map((e,i) => {
    return (
      <label className="inputcheckbox" htmlFor="">{e}
        <input type="checkbox" value={i}/>     
      </label>
    );
  });
}
