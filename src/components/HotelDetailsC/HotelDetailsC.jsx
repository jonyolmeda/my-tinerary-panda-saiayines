import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { URL } from "../../api/url";
import "./hoteldetailsc.css";
import Shows from "./Shows";


export default function HotelDetailsC() {
  let { id } = useParams();
  const [hotel, setHotel] = useState({});
  const [photoHotel, setPhotoHotel] = useState([]);
  const [shows,setShows] = useState([])

  useEffect(() => {
    axios.get(`${URL}/hotel/${id}`).then((res) => {
      setHotel(res.data.response);
      setPhotoHotel(res.data.response.photo);
    });
  }, [id]);

  useEffect(() => {
    axios.get(`${URL}/shows?hotelId=${id}`)
    .then((res) => {
      setShows(res.data.response);
    });
  }, [id]);

  return (
    <>
      <div className="container-details">
        <div className="container-card-details">
          <div className="img-card-details">
            <img src={photoHotel[0]} alt={hotel.name} />
          </div>
          <div className="card-name-details">
            <p>{hotel.name}</p>
          </div>
          <div className="card-population-details">
            <p>Capacity: {hotel.capacity}</p>
          </div>
        </div>
      
      
      {shows.map((e) => {
          return (
            <Shows photo={e.photo}  name={e.name}  description ={e.description} price={e.price} id={e._id} />
      )
        })}
        </div>
    </>
  );
}
