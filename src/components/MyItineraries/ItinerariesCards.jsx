import React,{useState} from 'react'
import '../myShows/cardshows.css'
import {EditCardItineraries} from './EditCardItineraries'
import { useDispatch } from "react-redux";
import myItineraryAction from '../../redux/actions/myItineraryAction'
import Swal from "sweetalert2";

export default function ItinerariesCards(props) {
    let {name, description, photo, price,id} = props
    let [push,setPush]= useState(false)

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
          <>
      <div class='container-main-cards-and-edit'>
      <div class="card-shows-iti">
        <img className='card-image-iti' src={photo} alt={name} />
        <div classname='cotenedor-principal-showsby'>
        <h4>{name}</h4>
        <p>Description: {description}</p>
        <p>Price: USD ${price}</p>
         </div>
        <div className='buttons-shows-by'>
        <button className='button-byShows-edit' value={id}  onClick={()=>setPush(!push)}>Edit</button>
        <button className='button-byShows-delete' value={id} onClick={e=> deleteIt(id)}>Delete</button>
        </div>
        </div>
         <div class='container-edit-shows'>
         {push?(<EditCardItineraries id={id} />): ''}
         </div>
         </div>
          </>
    )
}