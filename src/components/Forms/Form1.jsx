import React from 'react'
import './form1.css'
import Input from '../Input/Input'

export default function Form1() {
  return (
    <div className='container-form'>
       <div className='container-input'>
       <h4>Sign Up</h4>
        <form className='container-form' action="">
            <Input/>
            <div className='container-button'>             
                <a href="/"><img src="/images/google.png" height='35px' width='35px' alt="Google Logo" /></a>
            </div>          
        </form>  
                 
        </div>  
        
    </div>
   
  )
}