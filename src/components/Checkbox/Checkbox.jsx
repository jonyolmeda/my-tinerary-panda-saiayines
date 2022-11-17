import React from "react";
import "./checkbox.css";
import {cities} from "../../data/cities";

export default function Checkbox() {
  function capturacheck(e) {
    let filtroDeCheck = cities.filter(evento => evento.continent.includes(e.target.value))
    filtroDeCheck.concat(filtroDeCheck)
    console.log(filtroDeCheck);
  }
  let continentes = Array.from(new Set(cities.map((e) => e.continent))).sort();
  return continentes.map((e) => {
    return (
      <label className="inputcheckbox" htmlFor="">{e}
        <input onChange={e=> capturacheck(e)} type="checkbox" value={e}/>     
      </label>
    );
  });
}


