import React from "react";
import "./profiles.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { URL } from "../../api/url";
import { NavLink } from "react-router-dom";

export default function SeeProfile() {
  const [user, setUser] = useState([]);
  let token = useSelector((store) => store.loginInReducer.token);
  useEffect(() => {
    return async function fetchdata() {
      await axios
        .get(`${URL}/auth/me/${token.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          let userdata = res.data.response;
          setUser(userdata);
        });
    };
  }, []);

  return (
    <>
    <div className="cont-card-profile">
    <img className="card-img" src={`${user.photo}`} alt={`${user.name}`}/>
    <div className="card-info">
      <p className="text-body">{user.name}</p>
      <p className="text-body">{user.lastName}</p>
      <p className="text-body">{user.age} Years old</p>
      <p className="text-body">{user.email}</p>
      <NavLink className="text-title" to={"/profileEdit"}> Edit</NavLink>
      </div>
    </div>
    </>
  );
}
