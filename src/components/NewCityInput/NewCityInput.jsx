import {React,useState} from 'react'
import './newcityinput.css'

export default function NewCityC() {
      const [cityname, setCityName] = useState('')
      const [continent, setContinent] = useState('')
      const [population, setPopulation] = useState('')
      const [photo, setPhoto] = useState('')
      const [idadmin, setIdadmin] = useState('')
      
      function saveData() {
        let userRegistered = JSON.parse(localStorage.getItem("New city")) || []
        let   userValue = {
              cityname: cityname,
              continent:continent,
              population:population,
              photo:photo,
              idadmin:idadmin,

          }
          userRegistered.push(userValue)
          localStorage.setItem("New city", JSON.stringify(userRegistered))
      }
  
   
    return (
      <div className='.container-newcity'>       
            <label >
              City name:
              <input className='inputin' type='text' id='nameInput' value={cityname} required onChange={((e)=>(setCityName(e.target.value)))}/>
            </label>
            <label >
              Continent:
              <input className='inputin' type='text' id='lastNameInput' value={continent} required onChange={((e)=>(setContinent(e.target.value)))}/>
            </label>
            <label >
              Population:
              <input className='inputin' type='number' id='populationInput' value={population} required onChange={((e)=>(setPopulation(e.target.value)))}/>
            </label> 
            <label >
              Photo:
              <input className='inputin' type='text' id='photoInput' value={photo} required onChange={((e)=>(setPhoto(e.target.value)))}/>
            </label>
            <label >
              Admin:
              <input className='inputin' type='text' id='emailInput' value={idadmin} required onChange={((e)=>(setIdadmin(e.target.value)))}/>
            </label>           
            <div className='container-submit'>
              <input onClick={saveData} className="submit" type='submit' />
            </div>
      </div>
    )
  }