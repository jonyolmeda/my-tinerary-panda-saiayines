import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {EditCard} from '../EditCard/EditCard'
import './carduser.css'
import Swal from 'sweetalert2'
import cityByUserAction from '../../redux/actions/cityByUserAction'



export default function CardUser({name, photo, description,id}) {
    
    let [push, setPush] = useState(false);

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
              dispatch(cityByUserAction.deleteCities(e)),
            'Your file has been deleted.',
          )
        }
      })
}
    return (
        <div className='conteiner-cityBy-card'>
        <div className='card2'>
            <img className='' src={photo} alt={name} />
            <div className='cotenedor-principal-citiesBy'>
                <h4 className=''>{name}</h4>
                <p className=''>Population: {description}</p>
            </div>    
                <div className='buttons-cities-by'>
                <button className='button-cities-edit' value={id}  onClick={()=>setPush(!push)}>Edit</button>
                <button className='button-cities-delete' value={id} onClick={e=> deleteIt(id)}>Delete</button>
                </div>    
        </div>
        <div class='container-edit-cities'>
        {push?(<EditCard id={id} />): ''}
        </div>
        </div>
    )
}