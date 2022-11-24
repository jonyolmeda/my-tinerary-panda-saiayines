import React,{useState} from 'react'
import './cardshows.css'
import {EditCardShows} from './EditCardShows'
import { useDispatch } from "react-redux";
import myShowAction from '../../redux/actions/myShowsAction'
import Swal from "sweetalert2";

export default function CardShows(props) {
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
            dispatch(myShowAction.deleteHotels(e)),
          'Your file has been deleted.',
        )
      }
    })
}
    return (
          <>
      <div class='container-main-cards-and-edit'>
      <div class="card-shows">
        <img className='' src={photo} alt={name} height="250" />
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
         {push?(<EditCardShows id={id} />): ''}
         </div>
         </div>
          </>
    )
}


