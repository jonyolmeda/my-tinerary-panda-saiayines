import {React, useState} from 'react'
import './input.css'

export default function Input() {
    const [name, setName] = useState('')
    const [lastName, setLName] = useState('')
    const [mail, setMail] = useState('')
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [repeatpassword, setRepeatPassword] = useState('')
    
    function saveData() {
      let userRegistered = JSON.parse(localStorage.getItem("register")) || []
     let   userValue = {
            name: name,
            lastName:lastName,
            mail:mail,
            user:user,
            password:password,
            repeatpassword:repeatpassword                      
        }
        userRegistered.push(userValue)
        localStorage.setItem("register", JSON.stringify(userRegistered))

        if(userRegistered.user.includes(userValue.user)){
        alert('Congratulations, you have been acepted!')
        }
       
    }
  return (
    <div>       
          <label >
            Name:
            <input className='inputin' type='text' id='nameInput' value={name} required onChange={((e)=>(setName(e.target.value)))}/>
          </label>
          <label >
            Last Name:
            <input className='inputin' type='text' id='lastNameInput' value={lastName} required onChange={((e)=>(setLName(e.target.value)))}/>
          </label>
          <label >
            Email:
            <input className='inputin' type='email' id='emailInput' value={mail} required onChange={((e)=>(setMail(e.target.value)))}/>
          </label>
          <label >
            User:
            <input className='inputin' type='text' id='userInput' value={user} required onChange={((e)=>(setUser(e.target.value)))}/>
          </label>
          <label >
            Password:
            <input className='inputin' type='password' id='passwordInput' value={password} required onChange={((e)=>(setPassword(e.target.value)))}/>
          </label>
          <label >
            Repeat password:
            <input className='inputin' type='password' id='rPasswordInput' value={repeatpassword} required onChange={((e)=>(setRepeatPassword(e.target.value)))}/>
          </label>
           
          <div className='container-submit'>
            <input onClick={saveData} className="submit" type='submit' />
          </div>
    </div>
  )
}


