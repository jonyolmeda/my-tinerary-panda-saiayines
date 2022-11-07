import React from 'react'
import { useParams } from 'react-router-dom'
import {cities} from '../../data/cities';
import './citydetailsc.css'

export default function CityDetailsC() {
    let {cityid} = useParams( )
    
    let citySelected = cities.find(city => city.id === cityid)
    
  return (
    <>
 <div className='container-details'>
    <div className='container-card-details'>
      <div className='img-card'>
        <img src={citySelected.photo} alt={citySelected.name} />
      </div>
      <div className='card-name-details'>
        <p>{citySelected.name}</p>
      </div>
      <div className='card-population-details'>
        <p>Pupulation: {citySelected.population}</p>
      </div>
    </div>
</div>
    </>
  )
}
