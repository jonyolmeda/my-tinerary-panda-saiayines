import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { URL } from "../../api/url";
import './citydetailsc.css'

export default function CityDetailsC() {
  let { cityId } = useParams();
  const [city, setCity] = useState({});
  const [photoCity, setPhotoCity] = useState([]);
  const [itinerary,setItinerary] = useState([])

  useEffect(() => {
    axios.get(`${URL}/city/${cityId}`)
    .then((res) => {
      setCity(res.data.response);
      setPhotoCity(res.data.response.photo);
    });
  }, [cityId]);

  useEffect(() => {
    axios.get(`${URL}/itineraries?cityId=${cityId}`)
    .then((res) => {
      setItinerary(res.data.response);
    });
  }, [cityId]);

  console.log(city);
  console.log(photoCity);
  console.log(itinerary)
  return (
    <>
 <div className='container-details'>
    <div className='container-card-details'>
      <div className='img-card-details'>
        <img src={photoCity} alt={city.name} />
      </div>
      <div className='card-name-details'>
        <p>{city.name}</p>
      </div>
      <div className='card-population-details'>
        <p>Pupulation: {city.population}</p>
      </div>
    </div>

{itinerary.map((events) => {
          return (<div className='container-details-events'>
          <div className='container-card-details-events'>
            <div className='img-card-details-events'>
              <img src={events.photo[0]} alt={events.name} />
            </div>
            <div className='card-name-details-events'>
              <p>{events.name}</p>
            </div>
            <div className='card-population-details-events'>
            <p>Description: {events.description}</p>
            <p>Price: USD {events.price}</p>

            </div>
          </div>
      </div>
      )
        })}</div>
    </>
  )
}
