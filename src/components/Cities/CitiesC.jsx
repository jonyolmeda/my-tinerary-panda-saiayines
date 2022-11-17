import {React, useState, useEffect} from 'react'
import './citiesc.css'
import CityCard from '../CityCard/CityCard'
import axios from 'axios'
import { URL } from '../../api/url'


export default function Cities() {
  let [checkboxContinent, setCheckboxContinent] = useState([])
  let [cities, setCities] = useState([])
  let [checked, setChecked] = useState([])
  let [searched, setSearched] = useState('')

  useEffect(() => {
    axios.get(`${URL}/cities`)
        .then(res => setCheckboxContinent(res.data.response))
        .catch(err => console.log(err.message))
}, [])

    useEffect(() => {
        let checkQuery = checked.slice()
        if(checked.length > 0){
            checkQuery = checked.join(',')
        }
        axios.get(`${URL}/cities?name=${searched}&continent=${checkQuery}`)
            .then(res => setCities(res.data.response))
            .catch(err => console.log(err.message))
    }, [searched, checked])

  let checkManager = (e) => {
    let auxChecked = [...checked]
    if(e.target.checked){
        auxChecked.push(e.target.value)
    }else{
        auxChecked = auxChecked.filter(element => element !== e.target.value)
    }
    setChecked(auxChecked)
}
let inputManager = (e) => {
  setSearched(e.target.value)
  
}
console.log(searched)

  return (
    
    <div className='container-cities'>
      <div className='container-input-cards'>
        <div className='container-plus'>
          <input onChange={inputManager} className='input-cards' id='search' type="search" placeholder='Search city...' />
          <a className='add-city' href="/newcity">Add new city</a>         
        </div>
      <div className='checkbox-cards'>
      {
         Array.from(new Set(checkboxContinent.map(city => city.continent))).map(e => {
             return (
            <label className='check-label' key={e}>
                <input onClick={checkManager} type='checkbox' value={e} /> {e}
            </label>
      )
          })
      }
      </div>    
      </div>
      <div className='container-cards'>
      {
      cities.length > 0 ?
      cities.map(item=> <CityCard name={item.name} id={item._id} img={item.photo[0]}/>) :
      <h3>The cities hasn't been found</h3>
                }
      </div> 
    </div>      
)}