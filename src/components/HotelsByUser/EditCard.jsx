import React from 'react'
import {URL} from '../../api/url'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

export function EditCard({id}) {
    let navigate = useNavigate()
    let notify = (text)=>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: text,
          })
    }
    let submit = (e) =>{
        e.preventDefault()
        let editHotel = {}
        let vacio={}

        e.target.name.value === '' ? vacio.name = e.target.name.value : editHotel.name=e.target.name.value
        e.target.capacity.value === '' ? vacio.capacity = e.target.capacity.value : editHotel.capacity=e.target.capacity.value
        e.target.photo.value === '' ? vacio.photo = e.target.photo.value : editHotel.photo=e.target.photo.value

        axios.patch(`${URL}/hotels/${id}`, editHotel)
            .then(res => {
                if(res.data.success){
                    Swal.fire({
                        title:'Success',
                        text:'The Hotel was updated succesfully',
                        icon:'success',
                    })
                    navigate('/hotelByUser')
                }else{
                    let error = res.data.message[0].message
                    let error1= res.data.message[1].message
                    notify(error)
                    notify(error1)
                }

            })
    }
return (
    <div >
        <form className='container-forms-byhotel' onSubmit={submit}>
            <label className=''>
            <p>Hotel Name</p>
            <input className='' type="text" name='name' min='3' placeholder=' name...'/></label>
            <label className=''>
            <p>Hotel Capacity</p>
            <input className='' type="number" name="capacity" min='1' placeholder='capacity...'/></label>
            <label className=''>
            <p>Urls Photos</p>
            <input className=''  type='url' name="photo" placeholder='image'/>
            </label>
            <div className=''>
            <button className=''><span class="button_top">Edit</span></button>
            </div>
        </form>
    </div>
  )
}