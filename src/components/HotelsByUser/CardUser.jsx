import React,{useState} from 'react'
import {EditCard} from './EditCard'
import './carduser.css'


export default function CardUser(props) {
    let {name, photo, capacity,id} = props
let [push,setPush]= useState(false)

    return (
        <div>
        <div className='contenedor-cardHotelsBy'>
            <img className='' src={photo} alt={name} height="250" />
            <div classname='cotenedor-principal-cardhotelsby'>
                <h4>{name}</h4>
                <p>capacity: {capacity}</p>
                <div className='buttons-hotels-by'>
                <button className='button' value={id}  onClick={()=>setPush(!push)}><span class="button_top">Edit</span></button>
                <button className='button'><span class="button_top">Delete</span></button>
                </div>
                
            </div>
        </div>
        {push?(<EditCard id={id} />): ''}
        </div>
    )
}

