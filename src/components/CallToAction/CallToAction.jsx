import React from 'react'
import './CallToAction.css'
import { Link as NavLink } from "react-router-dom";

export default function CallToAction(props) {
    let {nameButton, Link} = props
  return (
    <div className="contenedor-boton-cta">
       <NavLink className='navlink-call' to={Link}>
          <a href="-" className="boton-cta">{nameButton}</a>
       </NavLink>
       </div>
  )
}

{/* <div className="contenedor-boton-cta">
        <a href={Link} className="boton-cta">{nameButton}</a>
      </div> */}
