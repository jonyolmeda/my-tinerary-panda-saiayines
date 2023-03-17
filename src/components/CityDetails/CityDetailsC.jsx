import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { URL } from "../../api/url";
import './citydetailsc.css'
import Itineraries from "../Itineraries/Itineraries";

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

 
  return (
    <>
 <div className='container-details'>
      <h1 className="title-hotel">{city.name}</h1>
      <h3 className="subtitle-hotel">Capacity: {city.population}</h3>
    <div className='container-card-details'>
      <div className='img-card-details'>
        <img src={photoCity} alt={city.name} />
      </div>
      <div className='card-name-details'>
       
      </div>
      <div className='card-population-details'>
        
      </div>
    </div>
    {itinerary.map((events) => {
          return (
            <Itineraries name={events.name} photo={events.photo} description={events.description} price={events.price} id={events._id} />
      )
        })}
</div>
    </>
  )
}
