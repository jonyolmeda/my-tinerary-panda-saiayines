import {React , useState} from 'react'
import './input.css'

export default function Input2() {
    let [userLogin, setUserLogin] = useState('')
    let [password, setPassword] = useState('')

    function saveData() {
        let userLogined = JSON.parse(localStorage.getItem("logins")) || []
        let  userLogins = {
              userLogin:userLogin,
              password:password
          }
          userLogined.push(userLogins)
          localStorage.setItem("logins", JSON.stringify(userLogined))          
      }
    return (
        <div>       
        <label>
          User:
          <input className='inputin' type='text' id='nameInput' value={userLogin} required onChange={((e)=>(setUserLogin(e.target.value)))}/>
        </label> 
        <label >
          Password:
          <input className='inputin' type='password' id='nameInput' value={password} required onChange={((e)=>(setPassword(e.target.value)))}/>
        </label> 
        <div className='container-submit-two'>
          <input onClick={saveData} className="submit" type='submit' />
        </div>
  </div>
  )
}
