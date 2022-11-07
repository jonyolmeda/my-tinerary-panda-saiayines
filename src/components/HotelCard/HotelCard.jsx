import React from 'react'
import './hotelCard.css'
import { Link } from "react-router-dom";

export default function HotelCard(props) {
  let {img,name,id} = props
  return (
    <div className='container-card'>
    <div className='img-card'>
      <img src={img} alt={name} />
    </div>
    <div className='card-name'>
      <p>{name}</p>
    </div>
    <div className='container-card-id'>
    <Link className='card-id' to={`/hoteldetail/${id}`}>Details</Link>
    </div>
    
  </div>
  )
}




