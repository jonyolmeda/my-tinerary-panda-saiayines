import React from 'react'
import './newhotelc.css'
import NewHotelInput from '../NewHotelInput/NewHotelInput'

export default function NewHotelC() {
  return (
    <div className='container-newhotel'>
       <div className='container-input'>
       <h4>Create new Hotel</h4>
        <form className='container-form' action="">
            <NewHotelInput/>        
        </form>  
                 
        </div>  
        
    </div>
   
  )
}