import React from 'react'
import { useParams } from 'react-router-dom'
import './hoteldetailsc.css'
import {hotelsCasino , eventsHotelsCasino} from '../../data/hotelsCasino';

export default function HotelDetailsC() {
    let {hotelid} = useParams()
    let hotelSelected = hotelsCasino.find(hotel => hotel.id === hotelid)
    let eventosSelected = eventsHotelsCasino.filter(eventos => eventos.hotelId === hotelid)
    
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


{eventosSelected.map((events) => {
          return (<div className='container-details-events'>
          <div className='container-card-details-events'>
            <div className='img-card-details-events'>
              <img src={events.photo} alt={events.name} />
            </div>
            <div className='card-name-details-events'>
              <p>{events.name}</p>
            </div>
            <div className='card-population-details-events'>
            <p>Description: {events.description}</p>
            <p>Price: USD{events.price}</p>

            </div>
          </div>
      </div>
      )
        })}
        </div>
    </>
  )
}
