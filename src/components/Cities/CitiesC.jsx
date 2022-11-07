import {React,useRef} from 'react'
import './citiesc.css'
import CityCard from '../CityCard/CityCard'
import cities from '../../data/cities'
import Checkbox from '../Checkbox/Checkbox.jsx'



export default function Cities() {
  const search = useRef()
  return (
    <div className='container-cities'>
      <div className='container-input-cards'>
        <div className='container-plus'>
          <input className='input-cards' ref={search} id='search' type="search" placeholder='Search city...' />
          <a href="/newcity"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="white" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></svg></a>
          
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
