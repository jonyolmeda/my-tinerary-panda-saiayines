import React from 'react'
import { useParams } from 'react-router-dom'
import {cities, touristActivities} from '../../data/cities';
import './citydetailsc.css'

export default function CityDetailsC() {
    let {cityid} = useParams( )
    let citySelected = cities.find(city => city.id === cityid)
    let activitiesSelected = touristActivities.filter(activities => activities.citiId === cityid)
    
  return (
    <>
 <div className='container-details'>
    <div className='container-card-details'>
      <div className='img-card-details'>
        <img src={citySelected.photo} alt={citySelected.name} />
      </div>
      <div className='card-name-details'>
        <p>{citySelected.name}</p>
      </div>
      <div className='card-population-details'>
        <p>Pupulation: {citySelected.population}</p>
      </div>
    </div>

{activitiesSelected.map((events) => {
          return (<div className='container-details-events'>
          <div className='container-card-details-events'>
            <div className='img-card-details-events'>
              <img src={events.photo[0]} alt={events.name} />
            </div>
            <div className='card-name-details-events'>
              <p>{events.name}</p>
            </div>
            <div className='card-population-details-events'>
            <p>Description: {events.description}</p>
            <p>Price: USD {events.price}</p>

            </div>
          </div>
      </div>
      )
        })}</div>
    </>
  )
}
