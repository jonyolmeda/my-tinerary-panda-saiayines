import {React, useState,useEffect} from 'react'
import './hotelsc.css'
import HotelCard from '../HotelCard/HotelCard'
import { useSelector, useDispatch } from 'react-redux'
import hotelAction from '../../redux/actions/hotelAction'

export default function HotelsC() {
  const hotels = useSelector(store=> store.hotelReducer.hotel)
  let [select,setSelect]= useState('')
  let [search, setSearch] = useState('')
  let dispatch = useDispatch()

  useEffect(()=>{
    dispatch(hotelAction.getHotels())
    // eslint-disable-next-line
},[])

useEffect(()=>{
  if(select === 'select'){
    dispatch(hotelAction.getHotelsBySearch(search))
  }else{
    let filter ={
      name:search,
      order: select
    }
    dispatch(hotelAction.getHotelCross(filter))
  }
  // eslint-disable-next-line
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
         <input onChange={bySearch} className='input' id='search' type="search" placeholder='Search Hotels...' />
        
         </div>
      <div className='container-cards'>
        { hotels.length > 0 ?
            hotels.map(e=> <HotelCard name={e.name} img={e.photo[0]} id={e._id}/>):
            <h3 className>The hotels hasn't been found </h3>}
      </div> 
    </div>  
  )
}


         