import React,{useState} from 'react'
import {EditCard} from './EditCard'
import './carduser2.css'
import { useDispatch } from "react-redux";
import hotelByUserAction from '../../redux/actions/hotelByUserAction';
import Swal from "sweetalert2";
export default function CardUser(props) {
    let {name, photo, capacity,id} = props
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
            dispatch(hotelByUserAction.deleteHotels(e)),
          'Your file has been deleted.',
        )
      }
    })
}
    return (
        <div class='container-main-cards-and-edit'>
        <div className='card-shows'>
            <img className='' src={photo} alt={name} height="250" />
            <div classname='cotenedor-principal-cardhotelsby'>
                <h4>{name}</h4>
                <p>capacity: {capacity}</p>
                <div className='buttons-shows-by'>
                <button className='button-byShows-edit' value={id}  onClick={()=>setPush(!push)}><span class="button_top">Edit</span></button>
                <button className='button-byShows-delete' value={id} onClick={e=> deleteIt(id)}>Delete</button>
                </div>

            </div>
        </div>
        <div class='container-edit-shows'>
        {push?(<EditCard id={id} />): ''}
        </div>
        </div>
    )
}

