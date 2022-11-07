import React from 'react'
import './hotelsc.css'
import hotelsCasino from '../../data/hotelsCasino'
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
         <a href="/newhotel"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="white" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></svg></a>
         </div>
      <div className='container-cards'>
        {hotelsCasino.map((hotelData) => {
          return (<HotelCard img={hotelData.photo[0]} name={hotelData.name} id={hotelData.id}/>)
        })}
      </div> 
    </div>  
  )
}


         