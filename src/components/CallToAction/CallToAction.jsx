import React from 'react'
import './CallToAction.css'

export default function CallToAction(props) {
    let {nameButton, Link} = props
  return (
    
      <div className="contenedor-boton-cta">
        <a href={Link} className="boton-cta">{nameButton}</a>
      </div>
  )
}

