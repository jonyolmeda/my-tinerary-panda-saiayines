import React from 'react'
import './hotelsc.css'
import {hotelsCasino} from '../../data/hotelsCasino'
import HotelCard from '../HotelCard/HotelCard'


export default function HotelsC() {
  return (
    <div className='container-hotels'>
        <div className='container-search-select'>
        <select className='select' name="select">
            <option value="value1" selected>Select</option>
            <option value="Ascending" >Ascending</option>
            <option value="Descending">Descending</option>
        </select>
         <input className='input-search' id='search' type="search" placeholder='Search Hotels...' />
         <a className='add-city' href="/newhotel">Add new hotel/casino</a>
         </div>
      <div className='container-cards'>
        {hotelsCasino.map((hotelData) => {
          return (<HotelCard img={hotelData.photo[0]} name={hotelData.name} id={hotelData.id}/>)
        })}
      </div> 
    </div>  
  )
}


         