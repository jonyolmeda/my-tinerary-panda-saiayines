import React from 'react'
import './citycard.css'

export default function CityCard(props) {
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
        <a className='card-id' href={id}>Details</a>
      </div>
      
    </div>
  )
}