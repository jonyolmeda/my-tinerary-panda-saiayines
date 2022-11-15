import {React, useState,useEffect} from 'react'
import './hotelsc.css'
import HotelCard from '../HotelCard/HotelCard'
import axios from 'axios'
import { URL } from '../../api/url'


export default function HotelsC() {
  let [hotels,setHotels]= useState([])
  let [select,setSelect]= useState('')
  let [search, setSearch] = useState('')

  useEffect(()=>{
    // eslint-disable-next-line
    axios.get(`${URL}/hotels`)
        .then(res => setHotels(res.data.response))
},[])

useEffect(()=>{
  // eslint-disable-next-line
  if(select === 'select'){
    axios.get(`${URL}/hotels?name=${search}`)
  .then(res => setHotels(res.data.response))
  }else{
    axios.get(`${URL}/hotels?name=${search}&order=${select}`)
  .then(res => setHotels(res.data.response))
  }
},[search,select])


let selectSelected = (e) => {
  setSelect(e.target.value)
}

let bySearch = (e)=>{
  setSearch(e.target.value)
}

  return (
    <div className='container-hotels'>
        <div className='container-search-select'>
        <select onChange={selectSelected} className='select' name="select">
            <option value="select" selected>Select</option>
            <option value="asc" >Ascendent</option>
            <option value="desc">Descendent</option>
        </select>
         <input onChange={bySearch} className='input-search' id='search' type="search" placeholder='Search Hotels...' />
         <a className='add-city' href="/newhotel">Add new hotel/casino</a>
         </div>
      <div className='container-cards'>
        { hotels.length > 0 ?
            hotels.map(e=> <HotelCard name={e.name} img={e.photo[0]} id={e._id}/>):
            <h3 className>The hotels hasn't been found </h3>}
      </div> 
    </div>  
  )
}


         