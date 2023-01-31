import React from "react";
import "./profiles.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { URL } from "../../api/url";

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
      <div className="col-2-header">
        <h4>Your Profile</h4>
      </div>
      <div className="userData-columns">
        <form className="col-2-userData-1">
          <label> Name: </label>
          <input
            className="inputs-profile"
            type="text"
            value={`${user.name}`}
            disabled
          />
          <label> LastName: </label>
          <input
            className="inputs-profile"
            type="text"
            value={`${user.lastName}`}
            disabled
          />
          <label> Photo: </label>
          <input
            className="inputs-profile"
            type="text"
            value={`${user.photo}`}
            disabled
          />
        </form>
        <form className="col-2-userData-2">
          <label> Age: </label>
          <input
            className="inputs-profile"
            type="number"
            value={`${user.age}`}
            disabled
          />
          <label> Email: </label>
          <input
            className="inputs-profile"
            type="text"
            value={`${user.email}`}
            disabled
          />
        </form>
      </div>
    </>
  );
}
