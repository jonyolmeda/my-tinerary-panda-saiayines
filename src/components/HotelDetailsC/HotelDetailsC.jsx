import React from 'react'
import { useParams } from 'react-router-dom'
import {hotelsCasino} from '../../data/hotelsCasino';
import './hoteldetailsc.css'

export default function HotelDetailsC() {
    let {hotelid} = useParams()
    let hotelSelected = hotelsCasino.find(hotel => hotel.id === hotelid)
    
  return (
    <>
 <div className='container-details'>
    <div className='container-card-details'>
      <div className='img-card-details'>
        <img src={hotelSelected.photo[0]} alt={hotelSelected.name} />
      </div>
      <div className='card-name-details'>
        <p>{hotelSelected.name}</p>
      </div>
      <div className='card-population-details'>
        <p>Capacity: {hotelSelected.capacity}</p>
      </div>
    </div>
</div>
    </>
  )
}
