import React from 'react'
import './citycard.css'
import { Link } from "react-router-dom";

export default function CityCard(props) {
    let {img,name,id} = props
  return (
    <div class="card">
      <div className='img-card'>
        <img src={img} alt={name} />
        <div class="card-details">
        <p class="text-title">{name}</p>
      </div>
      </div>
        <Link className='card-button' to={`/detailCity/${id}`}>Details</Link>
    </div>
  )
}