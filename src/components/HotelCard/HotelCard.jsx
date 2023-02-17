import React from 'react'
import './hotelCard.css'
import { Link } from "react-router-dom";


export default function HotelCard(props) {
  let {img,name,id} = props
  return (
    <div class="card">
      <div className='img-card'>
        <img src={img} alt={name} />
        <div class="card-details">
        <p class="text-title-card">{name}</p>
      </div>
      </div>
        <Link className='card-button' to={`/detailHotel/${id}`}>Details</Link>
    </div>
  )
}




