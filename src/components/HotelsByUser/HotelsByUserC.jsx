import React, { useState, useEffect } from 'react'
import './hotelbyuserc.css'
import axios from "axios";
import {URL} from "../../api/url";
import CardUser from "./CardUser";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import hotelByUserAction from '../../redux/actions/hotelByUserAction';

export default function HotelsByUserC() {
    let [hotel, setHotel] = useState([]);
    let token = useSelector((store) => store.loginInReducer.token)

    useEffect(() => {
        console.log(hotel);
        axios
            .get(`${URL}/hotelsBy?userId=${token.id}`)
            .then((res) => setHotel(res.data.response))
            .catch((err) => err.message);
    }, []);

    const dispatch = useDispatch()
    function deleteIt(e) {
    Swal.fire({
        title: 'Are you sure?',
        text: "This action can't be undone",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#ffff9',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
              'Deleted!',
              dispatch(hotelByUserAction.deleteHotels(e)),
            'Your file has been deleted.',
          )
        }
      })
}


    return (
        <div className="contenedor-principal-hotelsby">
            <div className="w-100">
                <h3 className="text-principal">My hotels</h3>
            </div>
            <div className= 'container-cards-hotelsby'>
            {hotel.length > 0 ? hotel.map((item) => <CardUser name={item.name}  erase={deleteIt} photo={item.photo[0]} key={item._id} id={item._id} capacity={item.capacity} />) : <h2 className="min-h-50">Hotels not found</h2>}
            </div>
        </div>
    );
  
}
