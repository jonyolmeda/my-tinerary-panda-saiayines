import React, { useState, useEffect } from "react";
import axios from "axios";
import { URL } from "../../api/url";
import CardUser from "../CardUser/CardUser";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import './mycitiesc.css'


export default function MyCitiesC() {
  let [city, setCity] = useState([]);
  let token = useSelector((store) => store.loginInReducer.token)
  let navigate = useNavigate();
  useEffect(() => {
    console.log(city);
    axios
      .get(`${URL}/citiesBy?userId=${token.id}`)
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
          .delete(`${URL}/cities/${id}`,{ 
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
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
        <h3 className="text-main-cities">My cities</h3>
      </div> 
      <div className="container-cards-citiesby">
       {city.length > 0 ? ( city.map(
            (item) => (
            <CardUser
            name={item.name}
            erase={Delete}
            photo={item.photo}
            key={item._id}
            id={item._id}
            description={item.population}
          />
        ))
      ) : <h2 className="min-h-50">Cities not found</h2>}
      </div>
 
    </div>
  );
}
