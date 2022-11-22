import React,{useState} from 'react'
import {EditCard} from '../EditCard/EditCard'
import './carduser.css'


export default function CardUser({name, photo, description,id}) {
    
let [push,setPush]= useState(false)

    return (
        <div className='conteiner-cityBy-card'>
        <div className='card2'>
            <img className='sub-img-by' src={photo} alt={name} />
            <article className=''>
                <h4 className=''>{name}</h4>
                <p className=''>Population: {description}</p>
                <div className=''>
                <button className='' value={id}  onClick={()=>setPush(!push)}>Edit</button>
                <button className=''>Delete</button>
                </div>
                
            </article>
        </div>
        {push?(<EditCard id={id} />): ''}
        </div>
    )
}