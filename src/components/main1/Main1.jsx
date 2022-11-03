import React from 'react'
import './main1.css'
import CallToAction from '../buttons/CallToAction'

export default function main1() {
  return (
    <div className='contenedor'>
        <div className='contenedor-h1'>
         <h1>MyTinerary</h1>  
         <h2>See the world with your own two eyes</h2> 
        </div>      
            <CallToAction Link='/' nameButton='Cities' />
            <CallToAction Link='/' nameButton='Hotels/Casinos' />      
    </div>
  )
}