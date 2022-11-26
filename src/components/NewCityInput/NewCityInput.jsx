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
        let res = await axios.post(`${URL}/cities`, dataCity)
        let res2 = await axios.get(`${URL}/cities`)
        let hotelCreated = res2.data.response
        if(res.data.success){
            let timerInterval
            Swal.fire({
              title: 'Hotel was Created succesfully!',
              html: 'Redirecting to that page in <b></b> miliseconds.',
              timer: 500,
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
                hotelCreated.filter(e => e.name === dataCity.name).map(e => window.location.href = `/detailCity/${e._id}`)
              }
            }).then((result) => {
              /* Read more about handling dismissals below */
              if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
              }
            })
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'We found an error...',
                text: `Errors: ${res.data.message.join(', ')}`,
              })
        }
    }catch(err){
        if(err.response.data.message === `hotels validation failed: userId: Cast to ObjectId failed for value "${dataCity.userId}" (type string) at path "userId" because of "BSONTypeError"`){
            Swal.fire({
                icon: 'error',
                title: 'Error 404',
                text: 'User ID is invalid. Please try again!',
              })
        }else if(err.response.data.message === `hotels validation failed: citiId: Cast to ObjectId failed for value "${dataCity.citiId}" (type string) at path "citiId" because of "BSONTypeError"`){
            Swal.fire({
                icon: 'error',
                title: 'Error 404',
                text: 'City ID is invalid. Please try again!',
              })
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Error 404',
                text: 'User ID and City ID are invalid. Please try again!',
              })
        }
    }
}
  return (

    <div className='.container-newcity'>
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
      <input onClick={submit} className="submit" type='submit'/>
      </div>
    </div>
  )
 } 


