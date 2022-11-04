import React from 'react'
import './carouselimgs.css'

export default function CarouselImgs(props) {
    let {image,name} = props
    return (
    <img src={image} alt={name} className='imgsCarousel'/>
  )
}
