import React from 'react'
import CityCard from './CityCard/CityCard'
import cities from '../data/cities'

export default function Filter(props) {   
    let {search} = props
    let checked = [...document.querySelectorAll( 'input[type="checkbox"]:checked' )].map( ele => ele.value)
    let filteredByContinent = cities.filter( e => checked.includes(e.category) || checked.length === 0)
    let filteredBySearch = filteredByContinent.filter(e=>e.name.toLowerCase().includes({search}.value.toLowerCase()))
   return(<CityCard img={filteredBySearch.photo} name={filteredBySearch.name} id={filteredBySearch.id}/>)
}
