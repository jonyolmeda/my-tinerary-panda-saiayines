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
        let editCity = {}
        let vacio={}

        e.target.name.value === '' ? vacio.name = e.target.name.value : editCity.name=e.target.name.value
        e.target.population.value === '' ? vacio.population = e.target.population.value : editCity.population=e.target.population.value
        e.target.photo.value === '' ? vacio.photo = e.target.photo.value : editCity.photo=e.target.photo.value
        
        axios.put(`${URL}/cities/${id}`, editCity)
            .then(res => {
                if(res.data.success){
                    Swal.fire({
                        title:'Success',
                        text:'The City was updated succesfully',
                        icon:'success',
                    })
                    navigate('/mycities')
                }else{
                    let error = res.data.message[0].message
                    let error1= res.data.message[1].message
                    notify(error)
                    notify(error1)
                }
                
            })
    }
  return (
    <div className=''>
        <form className='' onSubmit={submit}>
            <label className=''>
            <p>City Name</p>
            <input className='' type="text" name='name' min='3' placeholder=' name...'/></label>
            <label className=''>
            <p>City Population</p>
            <input className='' type="number" name="population" min='1' placeholder='population...'/></label>
            <label className=''>
            <p>Urls Photos</p>
            <input className=''  type='url' name="photo" placeholder='image'/>
            </label>
            <div className=''>
            <input className='' type="submit" value="Edit" />
            </div>
        </form>
    </div>
  )
}