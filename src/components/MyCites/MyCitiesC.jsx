import React, { useState, useEffect } from "react";
import axios from "axios";
import { URL } from "../../api/url";
import CardUser from "../CardUser/CardUser";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import './mycitiesc.css'

export default function MyCitiesC() {
  let [city, setCity] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    console.log(city);
    axios
      .get(`${URL}/citiesBy?userId=636d51715d29e99d62636bd8`)
      .then((res) => setCity(res.data.response))
      .catch((err) => err.message);
  }, []);

  let Delete = (e) => {
    let id = e.target.value;
    Swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        Swal("Has been deleted!", {
          icon: "success",
        });
        axios
          .delete(`${URL}/cities/${id}`)
          .then((res) => setCity(res.data.response))
          .catch((err) => err.message);
      } else {
        Swal("Your city is safe!");
      }
      navigate("/mycities");
    });
  };

  return (
    <div className="main-container-by">
      <div className="w-100">
        <h1 className="text-center-title">My cities</h1>
      </div>
      {city.length > 0 ? (
        city.map((item) => (
          <CardUser
            name={item.name}
            erase={Delete}
            photo={item.photo}
            key={item._id}
            id={item._id}
            description={item.population}
          />
        ))
      ) : (
        <h2 className="min-h-50">Cities not found</h2>
      )}
    </div>
  );
}
