import { useState } from 'react';
import axios from 'axios';
import { URL } from '../../api/url'
import { useEffect , useRef} from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import ProfileEdit from './ProfileEdit'
import { NavLink } from 'react-router-dom'


export default function EditProfile(){
    let token = useSelector((store) => store.loginInReducer.token)
    const [user, setUser] = useState([])


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


        return (
            <div class= 'container-profiles'>
    <div className="profile-card">
            <div className="container-column-1">
                <div className="container-column-profile">
                    <div>
                        <img className="profile-pic" src={`${user.photo}`} alt={`${user.name}`} />
                    </div>
                    <div className="profile-name">
                        <h5>{`${user.name}`}</h5>
                    </div>
                    <div className="col-1-links">
                        <NavLink to={'/profile'}> Profile</NavLink>
                        <NavLink to={'/profileEdit'}> Edit</NavLink>
                        <hr width="65" />
                    </div>
                </div>
            </div>
            <div className="container-column-2">
                <ProfileEdit/>
            </div>
        </div>
            </div>
    )}