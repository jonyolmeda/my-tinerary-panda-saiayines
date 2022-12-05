import React from 'react'
import "./hoteldetailsc.css";
import Comments from './Comment'
import NewComments from './NewComment'

export default function Shows(props) {
    let {photo , name , description, price, id} = props
  return (
    <div className='container-details-events'>
          <div className='container-card-details-events'>
            <div className='img-card-details-events'>
              <img src={photo} alt={name} />
            </div>
            <div className='card-name-details-events'>
              <p>{name}</p>
            </div>
            <div className='card-population-details-events'>
            <p>Description: {description}</p>
            <p>Price: USD {price}</p>
            </div>
          </div>
          <div>
            <NewComments id={id}/>
            <Comments idShow={id}/>
          </div>
      </div>
  )
}
