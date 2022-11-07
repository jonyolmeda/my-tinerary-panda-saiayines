import {React,useState} from 'react'
import './newhotelinput.css'

export default function NewHotelC() {
      const [hotelName, setHotelName] = useState('')
      const [photo, setPhoto] = useState('')
      const [capacity, setCapacity] = useState('')
      const [idadmin, setIdadmin] = useState('')
      
      function saveData() {
        let userRegistered = JSON.parse(localStorage.getItem("New Hotel")) || []
        let   userValue = {
              hotelName: hotelName,
              photo:photo,
              capacity:capacity,
              idadmin:idadmin,

          }
          userRegistered.push(userValue)
          localStorage.setItem("New Hotel", JSON.stringify(userRegistered))
      }
  
   
    return (
      <div className='.container-newcity'>       
            <label >
              Hotel/Casino name:
              <input className='inputin' type='text' id='nameInput' value={hotelName} required onChange={((e)=>(setHotelName(e.target.value)))}/>
            </label>
            <label >
              Photo:
              <input className='inputin' type='text' id='photoInput' value={photo} required onChange={((e)=>(setPhoto(e.target.value)))}/>
            </label>
            <label >
              Capacity:
              <input className='inputin' type='number' id='capacityInput' value={capacity} required onChange={((e)=>(setCapacity(e.target.value)))}/>
            </label> 
            <label >
              Admin:
              <input className='inputin' type='text' id='adminInput' value={idadmin} required onChange={((e)=>(setIdadmin(e.target.value)))}/>
            </label>           
            <div className='container-submit'>
              <input onClick={saveData} className="submit" type='submit' />
            </div>
      </div>
    )
  }
