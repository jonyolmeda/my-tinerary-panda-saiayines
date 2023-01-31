import React from 'react'
import './CallToAction.css'
import { Link as NavLink } from "react-router-dom";

export default function CallToAction(props) {
    let {nameButton, Link} = props
  return (
    <div className="contenedor-boton-cta">
       <NavLink className='navlink-call' to={Link}>
          <a href="-" className="btn-donate">{nameButton}</a>
       </NavLink>
       </div>
  )
}
