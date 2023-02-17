import React from 'react'
import './citycard.css'
import { Link } from "react-router-dom";

export default function CityCard(props) {
    let {img,name,id} = props
  return (
    <div className="card">
      <div className='img-card'>
        <img src={img} alt={name} />
        <div className="card-details">
        <p className="text-title-card">{name}</p>
      </div>
      </div>
        <Link className='card-button' to={`/detailCity/${id}`}>Details</Link>
    </div>
  )
}