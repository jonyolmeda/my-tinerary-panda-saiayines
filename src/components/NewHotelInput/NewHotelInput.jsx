import {React,useState} from 'react'
import './newhotelinput.css'
import axios from 'axios'
import { URL } from '../../api/url'

export default function NewHotelInput() {
      const [name, setName] = useState('')
      const [photo, setPhoto] = useState('')
      const [capacity, setCapacity] = useState('')
      const [cityId, setCityId] = useState('')
      const [userId, setUserId] = useState('')
      
      const saveData = (e) => {
        e.preventDefault();
        if (name === "" || photo === "" || capacity === "" || cityId === "" || userId === "") {
        alert('Please, complete all the fields.')    
        } else{
          let hotel = {name, photo ,capacity , cityId, userId}
          axios.post(`${URL}/hotels/create`,hotel)

          .then(res => {
            console.log(res);
          })
        }
      }
   
    return (
      <div className='.container-newcity'>       
            <label >
              Hotel name:
              <input className='inputin' type='text' id='nameInput' value={name} onChange={((e)=>(setName(e.target.value)))}/>
            </label>
            <label >
              Photo:
              <input className='inputin' type='text' id='lastNameInput' value={photo} onChange={((e)=>(setPhoto(e.target.value)))}/>
            </label>
            <label >
              Capacity:
              <input className='inputin' type='number' id='populationInput' value={capacity} onChange={((e)=>(setCapacity(e.target.value)))}/>
            </label> 
            <label >
              City Id:
              <input className='inputin' type='text' id='photoInput' value={cityId} onChange={((e)=>(setCityId(e.target.value)))}/>
            </label>
            <label >
              Admin:
              <input className='inputin' type='text' id='emailInput' value={userId} onChange={((e)=>(setUserId(e.target.value)))}/>
            </label>           
            <div className='container-submit'>
              <input onClick={saveData} className="submit" type='submit' />
            </div>
      </div>
    )
  }
