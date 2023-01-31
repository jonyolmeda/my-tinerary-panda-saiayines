import React from "react";
import "./profiles.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { URL } from "../../api/url";
import SeeProfile from "./SeeProfile";

export default function Profile({ name, photo, age, email, role, id }) {
  const [user, setUser] = useState([]);
  let token = useSelector((store) => store.loginInReducer.token);
  useEffect(() => {
    return async function fetchdata() {
      await axios
        .get(
          `${URL}/auth/me/${token.id}
          `,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => {
          let userdata = res.data.response;
          setUser(userdata);
        });
    };
  }, []);

  return (
    <div className="container-profiles">
      <div className="profile-card">
        <div className="container-column-1">
          <div className="container-column-profile">
            <div>
              <img
                className="profile-pic"
                src={`${user.photo}`}
                alt={`${user.name}`}
              />
            </div>
            <div className="profile-name">
              <h5>{`${user.name}`}</h5>
            </div>
            <div className="col-1-links">
              <NavLink to={"/profile"}> Profile</NavLink>
              <NavLink to={"/profileEdit"}> Edit</NavLink>
              <hr width="65" />
            </div>
          </div>
        </div>
        <div className="container-column-2">
          <SeeProfile />
        </div>
      </div>
    </div>
  );
}
