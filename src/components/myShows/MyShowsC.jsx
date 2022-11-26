import React, { useState, useEffect } from 'react'
import './myshows.css'
import axios from "axios";
import {URL} from "../../api/url";
import CardShows from "./CardShows";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import myShowAction from '../../redux/actions/myShowsAction'

export default function MyShowsC() {
    let [hotel, setHotel] = useState([]);

    useEffect(() => {
        console.log(hotel);
        axios
            .get(`${URL}/showsBy?userId=636d51715d29e99d62636bd7`)
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
              dispatch(myShowAction.deleteShow(e)),
            'Your file has been deleted.',
          )
        }
      })
}


    return (
        <div className="contenedor-principal-showsby">
            <div className="w-100">
                <h3 className="text-main-shows">My Shows</h3>
            </div>
            <div className= 'container-cards-showsBy'>
            {hotel.length > 0 ? hotel.map((show) => <CardShows name={show.name}  erase={deleteIt} photo={show.photo[0]} key={show._id} id={show._id} price={show.price} description={show.description} />) : <h2 className="min-h-50">Hotels not found</h2>}
            </div>
        </div>
    );
}
