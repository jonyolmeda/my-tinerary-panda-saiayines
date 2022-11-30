import {React,useRef, useEffect, useState} from 'react'
import './newhotelinput.css'
import axios from 'axios'
import { URL } from '../../api/url'
import Swal from 'sweetalert2'
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";

export default function NewHotelInput() {
  let token = useSelector((store) => store.loginInReducer.token);
  const nameRef = useRef()
  const capacityRef = useRef()
  const photoRef = useRef()
  const cityIdRef = useRef()
  const userIdRef = useRef(token.id);
  const [cityList, setCityList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    return async function fetchdata() {
      await axios.get(`${URL}/citiesBy/`).then((res) => {
        let data = res.data.response;
        setCityList(data);
      });
    };
  }, []);

  async function submit(e){
      e.preventDefault();
      const dataHotel ={
          name: nameRef.current.value,
          capacity: capacityRef.current.value,
          photo: photoRef.current.value,
          cityId: cityIdRef.current.value,
          userId: userIdRef.current,
      }
      try{
          let res = await axios.post(`${URL}/hotels`, dataHotel,{ 
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          let res2 = await axios.get(`${URL}/hotels`)
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
                  hotelCreated.filter(e => e.name === dataHotel.name).map(e => navigate(`/detailHotel/${e._id}`))
                }
              }).then((result) => {
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
          if(err.response.data.message === `hotels validation failed: userId: Cast to ObjectId failed for value "${dataHotel.userId}" (type string) at path "userId" because of "BSONTypeError"`){
              Swal.fire({
                  icon: 'error',
                  title: 'Error 404',
                  text: 'User ID is invalid. Please try again!',
                })
          }else if(err.response.data.message === `hotels validation failed: citiId: Cast to ObjectId failed for value "${dataHotel.citiId}" (type string) at path "citiId" because of "BSONTypeError"`){
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
              Hotel name:
              <input className='inputin' type='text' id='nameInput' ref={nameRef}/>
            </label>
            <label >
              Photo:
              <input className='inputin' type='text' id='lastNameInput' ref={photoRef} />
            </label>
            <label >
              Capacity:
              <input className='inputin' type='number' id='populationInput' ref={capacityRef}/>
            </label> 
            <select
                    type="text"
                    placeholder="City ID"
                    className='form_select_show'
                    ref={cityIdRef}
                >
                <option value="">Choose a City</option>
                    {cityList.map((city) => {
                        return (
                            <option value={city._id}>{city.name}</option>
                        )
                    })}
                </select>         
            <div className='container-submit'>
              <input onClick={submit} className="submit" type='submit' value='Submit' />
            </div>
      </div>
    )
  }
