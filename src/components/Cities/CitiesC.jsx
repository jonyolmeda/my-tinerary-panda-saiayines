import {React, useState, useEffect, useRef } from 'react'
import './citiesc.css'
import CityCard from '../CityCard/CityCard'
import axios from 'axios'
import { URL } from '../../api/url'
import { useSelector, useDispatch } from 'react-redux'
import cityAction from '../../redux/actions/cityAction'
import cityFilterAction from '../../redux/actions/cityFilterAction'

export const CitiesC = () => {

  let [checkCities, setCheckCities] = useState([])
  let searchRef = useRef(null)
  const dispatch = useDispatch()
  const {setChecked, setSearched} = cityFilterAction
  const filter = useSelector(state => state.CityFilterReducer)
  const {getCities, getFilteredCities} = cityAction
  const {cities} = useSelector(state => state.cityReducer)

  

  useEffect(() => {
    axios.get(`${URL}/cities`, { 
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then(res => setCheckCities(res.data.response))
    .catch(err => console.log(err.message))
}, [])

useEffect(() => {
  if(cities.length < 1 && filter.name === '' && filter.continent.length < 1){
      dispatch(getCities())
  } else{
      dispatch(getFilteredCities(filter))
  }
}, [])

useEffect(() => {
  dispatch(getFilteredCities(filter))
}, [filter])

let inputManager = (e) => {
  let searched = searchRef.current.value
  dispatch(setSearched(searched))
} 

let checkManager = (e) => {
  let auxArray = [...filter.continent]
  if(e.target.checked){
      auxArray.push(e.target.value)
  }else{
      auxArray = auxArray.filter(el => el !== e.target.value)
  }
  let checked = auxArray
  dispatch(setChecked(checked))
}

  return (
    
    <div className='container-cities'>
      <div className='container-input-cards'>
        <div className='container-plus'>
          <input onChange={inputManager} ref={searchRef} className='input-cards' value={filter.name} id='search' type="search" placeholder='Search city...' />        
        </div>
      <div className='checkbox-cards'>
      {
         Array.from(new Set(checkCities.map(city => city.continent))).map(e => {
             return (
            <label className='check-label' key={e}>
                <input checked={filter.continent.includes(e) ? true : false} onClick={checkManager} type='checkbox' value={e} /> {e}
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