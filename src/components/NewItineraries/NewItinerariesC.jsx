import React from "react";
import "../NewShows/newshowsc.css";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { URL } from "../../api/url";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

export default function NewItinerariesC() {
  let token = useSelector((store) => store.loginInReducer.token);
  const cityId = useRef();
  const name = useRef();
  const photo = useRef();
  const description = useRef();
  const price = useRef();
  const duration = useRef();
  const userId = useRef(token.id);
  const formRef = useRef();
  const [cityList, setCityList] = useState([]);

  useEffect(() => {
    return async function fetchdata() {
      await axios.get(`${URL}/citiesBy/`).then((res) => {
        let data = res.data.response;
        setCityList(data);
      });
    };
  }, []);

  async function submit(e) {
    e.preventDefault();

    const dataItinerary = {
      cityId: cityId.current.value,
      name: name.current.value,
      photo: photo.current.value,
      description: description.current.value,
      price: price.current.value,
      duration: duration.current.value,
      userId: userId.current,
    };
    try {
      let res = await axios.post(`${URL}/itineraries/`, dataItinerary);
      if (res.data.success) {
        Swal.fire({
          title: "The itinerary was Created succesfully!",
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
        `itineraries validation failed: cityId: Cast to ObjectId failed for value "" (type string) at path "hotelId" because of "BSONTypeError"`
      ) {
        Swal.fire({
          icon: "error",
          title: "¡You must select a city!",
        });
      }
    }
  }

  return (
    <div class="contenedor-form">
      <form ref={formRef} className="form-new-shows" onSubmit={submit}>
      <label className="label-form-new">
        Itinerary name:
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
        Duration:
        <input className='inputin-show' type='number' id='emailInput' value='Submit' ref={duration}  />
      </label>
      <select
                    type="text"
                    placeholder="City ID"
                    className='form__input_show'
                    ref={cityId}
                >
                <option value="">Choose a City</option>
                    {cityList.map((city) => {
                        return (
                            <option value={city._id}>{city.name}</option>
                        )
                    })}
                </select>
      <div className='container-submit-show'>
      <input onClick={submit} className="submit-show" type='submit'/>
      </div>
      </form>
    </div>
  );
}