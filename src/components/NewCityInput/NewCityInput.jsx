import {React,useState} from 'react'
import './newcityinput.css'
import axios from 'axios'
import { URL } from '../../api/url'

export default function NewCityInput() {
      const [name, setName] = useState('')
      const [continent, setContinent] = useState('')
      const [population, setPopulation] = useState('')
      const [photo, setPhoto] = useState('')
      const [userId, setUserId] = useState('')
      
      const saveData = (e) => {
        e.preventDefault();
        if (name === "" || continent === "" || population === "" || photo === "" || userId === "") {
        alert('Please, complete all the fields.')    
        } else{
          let city = {name, continent ,population , photo, userId}
          axios.post(`${URL}/cities`,city)
          .then(res => {
            console.log(res);
          })
        }
      }
   
    return (
      <div className='.container-newcity'>       
            <label >
              City name:
              <input className='inputin' type='text' id='nameInput' value={name} onChange={((e)=>(setName(e.target.value)))}/>
            </label>
            <label >
              Continent:
              <input className='inputin' type='text' id='lastNameInput' value={continent} onChange={((e)=>(setContinent(e.target.value)))}/>
            </label>
            <label >
              Population:
              <input className='inputin' type='number' id='populationInput' value={population} onChange={((e)=>(setPopulation(e.target.value)))}/>
            </label> 
            <label >
              Photo:
              <input className='inputin' type='text' id='photoInput' value={photo} onChange={((e)=>(setPhoto(e.target.value)))}/>
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