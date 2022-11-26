import {React, useRef} from 'react'
import './input.css'
import axios from 'axios'
import { URL } from '../../api/url'
import Swal from 'sweetalert2';

export default function Input() {
    const nameRef = useRef()
    const lastNameRef = useRef()
    const photoRef = useRef()
    const ageRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const formRef = useRef()

  async  function saveData(e) {
    e.preventDefault()
      let   userValue = {
            name: nameRef.current.value,
            lastName:lastNameRef.current.value,
            photo:photoRef.current.value,
            age:ageRef.current.value,
            email:emailRef.current.value,
            password:passwordRef.current.value,
        }
    
    try{
      let res = await axios.post(`${URL}/user`, userValue)
      console.log(res);
      if(res.data.success){
          Swal.fire({
              icon: 'success',
              title: 'The user has been created successfully!',
              text: `Activate your account login in your email.`,
          })
          formRef.current.reset()
      }
      else{
          Swal.fire({
              icon: 'error',
              title: 'We found an error...',
              text: `Errors: ${res.data.message.join(', ')}`,
            })
      }
  }catch(err){
          Swal.fire({
              icon: 'error',
              title: 'Error, the user email, it´s already exist',
              text: err.message,
            })     
  }
}
return (

    <form ref={formRef}>       
          <label >
            Name:
            <input className='inputin' type='text' id='nameInput' ref={nameRef} required/>
          </label>
          <label >
            Last Name:
            <input className='inputin' type='text' id='lastNameInput' ref={lastNameRef} required/>
          </label>
          <label >
            Photo:
            <input className='inputin' type='text' id='photoInput' ref={photoRef} required />
          </label>
          <label >
            Age:
            <input className='inputin' type='number' id='ageInput' ref={ageRef} required />
          </label>
          <label >
            Email:
            <input className='inputin' type='email' id='emailInput' ref={emailRef} required />
          </label>          
          <label >
            Password:
            <input className='inputin' type='password' id='passwordInput' ref={passwordRef} required/>
          </label>
          <div className='container-submit'>
            <input onClick={saveData} className="submit-signup" type='button' value='Submit' />
          </div>
    </form>
  )
}



