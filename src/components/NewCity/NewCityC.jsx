import React from 'react'
import './newcityc.css'
import NewCityInput from '../NewCityInput/NewCityInput'

export default function Form1() {
  return (
    <div className='container-newcity'>
       <div className='container-input'>
       <h4>Create new city</h4>
        <form className='container-form' action="">
            <NewCityInput/>        
        </form>  
                 
        </div>  
        
    </div>
   
  )
}