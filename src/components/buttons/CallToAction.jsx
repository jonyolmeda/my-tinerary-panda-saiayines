import React from 'react'
import { Link } from 'react-router-dom'
import './CallToAction.css'

export default function CallToAction(props) {
    let {nameButton, Link} = props
  return (
    
      <div className="contenedor-boton-cta">
        <a href={Link} className="boton-cta">{nameButton}</a>
      </div>
      
  )
}