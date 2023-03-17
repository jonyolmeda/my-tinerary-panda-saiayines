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
      let res = await axios.post(`${URL}/auth`, userValue)
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
              text: 'Try again with a new email.',
            })     
  }
}
return (
  <form className="form-login-singup" ref={formRef}>
  <p id="heading">Sign in</p>
  <div className="field">
  
    <input autocomplete="off" placeholder="Name" className="input-field" type="email" id="emailSignIn" ref={nameRef} required/>
  </div>
  <div className="field">
 
    <input autocomplete="off" placeholder="Last Name" className="input-field" type="email" id="emailSignIn" ref={lastNameRef} required/>
  </div>
  <div className="field">
  
    <input autocomplete="off" placeholder="Photo" className="input-field" type="email" id="emailSignIn" ref={photoRef} required/>
  </div>
  <div className="field">
  
    <input autocomplete="off" placeholder="Age" className="input-field" type="email" id="emailSignIn" ref={ageRef} required/>
  </div>
  <div className="field">
  
    <input autocomplete="off" placeholder="Email" className="input-field" type="email" id="emailSignIn" ref={emailRef} required/>
  </div>
  <div className="field">
  
    <input placeholder="Password" className="input-field" type="password" id="passSignIn" ref={passwordRef} required/>
  </div>
  <div className="container-submit-two">
      <input
        onClick={saveData}
        className="submit-signup"
        type="button"
        value="Submit"
      />
    </div>
</form>
  )
}



/* 

 

*/