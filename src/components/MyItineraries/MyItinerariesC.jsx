import React, { useState, useEffect } from 'react'
import '../myShows/myshows.css'
import axios from "axios";
import {URL} from "../../api/url";
import ItinerariesCards from "./ItinerariesCards";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import myItineraryAction from '../../redux/actions/myItineraryAction'
import { useSelector } from 'react-redux';

export default function MyItinerariesC() {
    let [itinerary, setItinerary] = useState([]);
    let token = useSelector((store) => store.loginInReducer.token)
    useEffect(() => {
        console.log(itinerary);
        axios
            .get(`${URL}/itinerariesBy?userId=${token.id}`)
            .then((res) => setItinerary(res.data.response))
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
              dispatch(myItineraryAction.deleteItinerary(e)),
            'Your file has been deleted.',
          )
        }
      })
}


    return (
        <div className="contenedor-principal-showsby">
            <div className="w-100">
                <h3 className="text-main-shows">My Itineraries</h3>
            </div>
            <div className= 'container-cards-showsBy'>
            {itinerary.length > 0 ? itinerary.map((itinerary) => <ItinerariesCards name={itinerary.name}  erase={deleteIt} photo={itinerary.photo[0]} key={itinerary._id} id={itinerary._id} price={itinerary.price} description={itinerary.description} />) : <h2 className="min-h-50">Hotels not found</h2>}
            </div>
        </div>
    );
}