import React from 'react'
import '../CityDetails/citydetailsc.css'
import Reaction from '../Reactions/Reactions'
import Comments from '../HotelDetailsC/Comment'
import NewComments from '../HotelDetailsC/NewComment'
import  "../HotelDetailsC/hoteldetailsc.css"

export default function Itineraries(props) {
    let {name, photo, description, price, id} = props
    let idItinerary = props.id

  return (
    
    <div className='container-details-events'>
        <div className='container-card-details-events'>
            <div className='img-card-details-events'>
                <img src={photo[0]} alt={name} />
            </div>
            <div className='card-name-details-events'>
                <p>{name}</p>
            </div>
            <div className='card-population-details-events'>
                <p>Description: {description}</p>
                <p>Price: USD {price}</p>
                <p></p>
            </div>
            <Reaction idItinerary={idItinerary}/>
        </div>
        <div>
            <NewComments id={id}/>
            <Comments idShow={id}/>
            </div>
    </div>  
  )
}