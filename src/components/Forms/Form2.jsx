import React from 'react'
import './form1.css'
import Input2 from '../Input/Input2'
export default function form2() {
  return (
    <div className='container-form-two'>
       <div className='container-input2'>
       <h4>Sign In</h4>
        <form className='container-form' action="">
        <Input2/>
        </form>  
        </div>  
    </div>
  )
}
