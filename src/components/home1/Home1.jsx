import React from 'react'
import './home1.css'
import CallToAction from '../CallToAction/CallToAction'

export default function Home1() {
  return (
    <div className='contenedor'>
        <div className='contenedor-h1'>
         <h1>MyTinerary</h1>  
         <h2>See the world with your own two eyes</h2> 
        </div>      
            <CallToAction Link='/cities' nameButton='Cities' />
            <CallToAction Link='/hotels' nameButton='Hotels/Casinos' />      
    </div>
  )
}