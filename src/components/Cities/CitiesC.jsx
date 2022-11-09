import {React,useRef} from 'react'
import './citiesc.css'
import CityCard from '../CityCard/CityCard'
import {cities} from '../../data/cities'
import Checkbox from '../Checkbox/Checkbox.jsx'



export default function Cities() {
  const search = useRef()
  return (
    <div className='container-cities'>
      <div className='container-input-cards'>
        <div className='container-plus'>
          <input className='input-cards' ref={search} id='search' type="search" placeholder='Search city...' />
          <a className='add-city' href="/newcity">Add new city</a>
          
        </div>
      <div className='checkbox-cards'>
        <Checkbox/>
      </div> 
      
      </div>
      <div className='container-cards'>
        {cities.map((citydata) => {
          return (<CityCard img={citydata.photo} name={citydata.name} id={citydata.id}/>)
        })}
      </div> 
    </div>      
)}
