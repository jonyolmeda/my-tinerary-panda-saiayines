import {React, useState, useEffect} from 'react'
import './citiesc.css'
import CityCard from '../CityCard/CityCard'
import Checkbox from '../Checkbox/Checkbox.jsx'
import axios from 'axios'
import { URL } from '../../api/url'



export default function Cities() {

  
  let filteredBySearch = []


    const [search, setSearch] = useState('')
    if (search !== '') {
        console.log(search)
    }



    
  let [city, setCity] = useState([])
  useEffect(() =>{
    axios.get(`${URL}/cities?name=${search}`)
    .then(res => {
       
      let resData = (res.data.response);
      setCity(resData)})
  },[])
  filteredBySearch = city.sort((a, b) => a.name.localeCompare(b.name))
  
  
  
  
  
  
  
  
  
  
  return (
    <div className='container-cities'>
      <div className='container-input-cards'>
        <div className='container-plus'>
          <input onChange={e => {
                                let search = e.target.value
                                setSearch(search)
                                filteredBySearch = city.filter(iteracion => iteracion.name.toLowerCase().includes(search.toLowerCase()))
                                console.log(filteredBySearch)}} className='input-cards' id='search' type="search" placeholder='Search city...' />
          <a className='add-city' href="/newcity">Add new city</a>
          
        </div>
      <div className='checkbox-cards'>
        <Checkbox/>
      </div> 
      
      </div>
      <div className='container-cards'>
        {city.map((citydata) => {
          return (<CityCard img={citydata.photo} name={citydata.name} id={citydata._id}/>)
        })}
      </div> 
    </div>      
)}