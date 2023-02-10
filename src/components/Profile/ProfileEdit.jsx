import React from 'react'
import './profiles.css'
import axios from 'axios'
import {useState, useRef, useEffect} from 'react'
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import { URL } from '../../api/url'
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function ProfileEdit() {
  const navigate = useNavigate();
  const [user, setUser] = useState([])
  const name = useRef()
  const lastName = useRef()
  const photo = useRef()
  const age = useRef()
  const email = useRef()

  let token = useSelector((store) => store.loginInReducer.token)
  useEffect(() => {
      return async function fetchdata() {
          await axios.get(`${URL}/auth/me/${token.id}
          `,{ 
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }).then(res => {
              let userdata = res.data.response
              setUser(userdata)
          })
      }
  }, [])

  async function saveData(e) {
    e.preventDefault()  
    const saveData = {
        name: name.current.value,
        lastName: lastName.current.value,
        photo: photo.current.value,
        age: age.current.value,
        email: email.current.value,
}
try {
    let res = await axios.patch(`${URL}/auth/me/${token.id}`, saveData, { 
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
    if (res.data.success) {
        Swal.fire({
            icon: 'success',
            title: 'The user has been Updated!',
            willClose: () => {
                navigate('/Profile')
              }
        })
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'We found an error...',
            text: `Errors: ${res.data.message.join(', ')}`,
        })
    }
} catch (err) {
    Swal.fire({
        icon: 'error',
        title: 'Error founded',
        text: err.message,
    })
}
}

  return (
   
     <>
     
    <form className="cont-card-profile-edit">
    <img className="card-img" src={`${token.photo}`} alt={`${token.name}`}/>
    <div className="card-info">
      <input className="text-body style-input-edit" defaultValue={token.name} ref={name}/>
      <input className="text-body style-input-edit" defaultValue={token.lastName} ref={lastName}/>
      <input className="text-body style-input-edit" defaultValue={token.age} ref={age}/>
      <input className="text-body style-input-edit" defaultValue={token.email} ref={email}/>
      <input className="text-body style-input-edit" defaultValue={token.photo} ref={photo}/>
      <button onClick={(e) =>
                            Swal.fire({
                                title: "Do you want to save the changes?",
                                showDenyButton: true,
                                confirmButtonText: "YES",
                                confirmButtonColor: "green",
                                denyButtonText: `CANCEL`,
                                denyButtonColor: "grey",
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    Swal.fire(saveData(e));
                                } else if (result.isDenied) {
                                    Swal.fire("Changes not saved.");
                                }
                            })
                        }
                        type="button" className='btn-profile' >Change</button>
      <NavLink className="text-title" to={"/profile"}> Profile</NavLink>
      </div>
    </form>
        </>
    
  )
}

