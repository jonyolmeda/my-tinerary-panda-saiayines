import { React, useRef } from 'react'
import './newcityinput.css'
import axios from 'axios'
import { URL } from '../../api/url'
import Swal from 'sweetalert2';

export default function NewCityInput() {
  const nameRef = useRef()
  const continentRef = useRef()
  const populationRef = useRef()
  const photoRef = useRef()
  const userIdRef = useRef()

async function submit (e) {
  e.preventDefault()
const dataCity ={
          name: nameRef.current.value,
          continent: continentRef.current.value,
          population: populationRef.current.value,
          photo: photoRef.current.value,
          userId: userIdRef.current.value
      }
    try{
    let res = axios.post(`${URL}/cities/`, dataCity)
    let res2 = await axios.get(`${URL}/cities/`)
    let cityCreated = res2.data.response
        if (res.data.success) {
          let timerInterval
          Swal.fire({
            title: 'Auto close alert!',
            html: 'I will close in <b></b> milliseconds.',
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading()
              const b = Swal.getHtmlContainer().querySelector('b')
              timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
              }, 100)
            },
            willClose: () => {
              clearInterval(timerInterval)
              cityCreated.filter(e => e.name === dataCity.name).map(e => window.location.href = `/detailCity/${e._id}`)
            }
          }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
              console.log('I was closed by the timer')
            }
          })}else {
            Swal.fire({
              title: "Warning!",
              text: res.data.message.join(' '),
              icon: "Error",
            });
          }
        }catch(error){
          console.log(error);
        }
   
}
  return (

    <div className='.container-newcity'>
      <form onSubmit={submit}>
      <label >
        City name:
        <input className='inputin' type='text' id='nameInput' ref={nameRef} />
      </label>
      <label >
        Continent:
        <input className='inputin' type='text' id='lastNameInput' ref={continentRef}  />
      </label>
      <label >
        Population:
        <input className='inputin' type='number' id='populationInput' ref={populationRef}  />
      </label>
      <label >
        Photo:
        <input className='inputin' type='text' id='photoInput' ref={photoRef}  />
      </label>
      <label >
        Admin:
        <input className='inputin' type='text' id='emailInput' ref={userIdRef}  />
      </label>
      <div className='container-submit'>
        <button className="submit" type='submit'> Create </button>
      </div>
      </form>
    </div>
  )
 } 


