import React from "react";
import "./newshowsc.css";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { URL } from "../../api/url";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

export default function NewShowsC() {
  let token = useSelector((store) => store.loginInReducer.token);
  const hotelId = useRef();
  const name = useRef();
  const description = useRef();
  const photo = useRef();
  const price = useRef();
  const date = useRef();
  const userId = useRef(token.id);
  const formRef = useRef();
  const [hotelList, setHotelList] = useState([]);

  useEffect(() => {
    return async function fetchdata() {
      await axios.get(`${URL}/hotelsBy/`).then((res) => {
        let data = res.data.response;
        setHotelList(data);
      });
    };
  }, []);

  async function submit(e) {
    e.preventDefault();

    const dataShow = {
      hotelId: hotelId.current.value,
      name: name.current.value,
      description: description.current.value,
      photo: photo.current.value,
      price: price.current.value,
      date: date.current.value,
      userId: userId.current,
    };
    try {
      let res = await axios.post(`${URL}/shows/`, dataShow,{ 
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.data.success) {
        Swal.fire({
          title: "Show was Created succesfully!",
          timer: 1500,
          timerProgressBar: true,
        });
        formRef.current.reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "We found an error...",
          text: `Errors: ${res.data.message}`,
        });
      }
    } catch (err) {
      if (
        err.response.data.message ===
        `shows validation failed: hotelId: Cast to ObjectId failed for value "" (type string) at path "hotelId" because of "BSONTypeError"`
      ) {
        Swal.fire({
          icon: "error",
          title: "¡You must select a hotel!",
        });
      }
    }
  }

  return (
    <div class="contenedor-form">
      <form ref={formRef} className="form-new-shows" onSubmit={submit}>
      <label className="label-form-new">
        Show name:
        <input className='inputin-show' type='text' id='nameInput' ref={name} />
      </label>
      <label className="label-form-new">
        Description:
        <input className='inputin-show' type='text' id='descriptionInput' ref={description}  />
      </label>
      <label className="label-form-new">
        Photo:
        <input className='inputin-show' type='text' id='photoInput' ref={photo}  />
      </label>
      <label className="label-form-new">
        Price:
        <input className='inputin-show' type='number' id='priceInput' ref={price}  />
      </label>
      <label className="label-form-new">
        Date:
        <input className='label-form-date' type='date' id='emailInput' ref={date}  />
      </label>
      <select
                    type="text"
                    placeholder="Hotel ID"
                    className='form_select_show'
                    ref={hotelId}
                >
                <option value="">Choose an Hotel</option>
                    {hotelList.map((hotel) => {
                        return (
                            <option value={hotel._id}>{hotel.name}</option>
                        )
                    })}
                </select>
      <div className='container-submit-show'>
      <input onClick={submit} value='Submit' className="submit-show" type='submit'/>
      </div>
      </form>
    </div>
  );
}
