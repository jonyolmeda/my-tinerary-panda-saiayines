import React from 'react'
import './profiles.css'
import axios from 'axios'
import {useState, useRef, useEffect} from 'react'
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import { URL } from '../../api/url'
import { useNavigate } from "react-router-dom";

export default function ProfileEdit() {
  const navigate = useNavigate();
  const [user, setUser] = useState([])
  const name = useRef(null)
  const lastName = useRef(null)
  const photo = useRef(null)
  const age = useRef(null)
  const email = useRef(null)

  let token = useSelector((store) => store.loginInReducer.token)
  useEffect(() => {
      return async function fetchdata() {
          await axios.get(`${URL}/auth/me/${token.id}
          `).then(res => {
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
    let res = await axios.patch(`${URL}/auth/me/${token.id}`, saveData)
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
            <div className="col-2-header">
                <h4>Edit Profile</h4>
            </div>
            <div className='userData-columns'>
                    <form id="myform" className='col-2-userData-1'>
                        <label> Name: </label>
                        <input type="text"  placeholder={`${user.name}`} ref={name}   />
                        <label> LastName: </label>
                        <input type="text"  placeholder={`${user.lastName}`} ref={lastName}  />
                        <label> Photo: </label>
                        <input type="text"  placeholder={`${user.photo}`} ref={photo} />
                    </form>
                    <form className='col-2-userData-2'>
                        <label> Age: </label>
                        <input type="number" placeholder={`${user.age}`}  ref={age} />
                        <label> Email: </label>
                        <input type="text"  placeholder={`${user.email}`}  ref={email} />
                        <button onClick={(e) =>
                            Swal.fire({
                                title: "Do you want to save the changes?",
                                showDenyButton: true,
                                confirmButtonText: "YES.",
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
                        type="button" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zM8.999 17H7v-1.999l5.53-5.522 1.999 1.999L8.999 17zm6.473-6.465-1.999-1.999 1.524-1.523 1.999 1.999-1.524 1.523z"></path></svg></button> 
                    </form>
            </div>
        </>
    
  )
}

