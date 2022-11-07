import React from 'react'
import cities from '../../data/cities'
import hotelsCasino from '../../data/hotelsCasino'
import CarouselImgs from '../Carouselimgs/CarouselImgs'
import './carousel.css'
import { useState ,useEffect} from 'react'


export default function Carousel() {
    let [numeroAcambiar,setNumeroAcambiar] = useState(0)
     let [id,setId] = useState(0)
    useEffect(
      ()=>{
       let idInterval = setInterval(
          ()=> {
              next()
          },
          5000
        )
          setId(idInterval)
          return clearInterval(id)
          // eslint-disable-next-line
      },[numeroAcambiar])
  
      
    let arrayImagesCities = [];
    let arrayImagesHotels = [];
    arrayImagesCities= cities.map(e=> e.photo)    
    arrayImagesHotels= hotelsCasino.map(e=> e.photo[0]) 

    let next = () =>{
        if(numeroAcambiar < arrayImagesCities.length-1){
          setNumeroAcambiar(numeroAcambiar+1)
        }
        else{
          setNumeroAcambiar(0)
        }
         clearInterval(id) 
      }

      let back = () =>{
        if(numeroAcambiar>0){
          setNumeroAcambiar(numeroAcambiar-1)
        }
        else{
          setNumeroAcambiar(arrayImagesCities.length-1)
        }
         clearInterval(id) 
      }   
  
      return (
      <>
    <div classNames= 'contenedor-carousel'>
        <div className='contenedor-imgs'>
        <div className='buttonOne'>
        <button onClick={back} className='botonCarouselOne'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="m12.707 7.707-1.414-1.414L5.586 12l5.707 5.707 1.414-1.414L8.414 12z"></path><path d="M16.293 6.293 10.586 12l5.707 5.707 1.414-1.414L13.414 12l4.293-4.293z"></path></svg></button>
        </div>
         <CarouselImgs image={arrayImagesCities[numeroAcambiar]}/>
         <CarouselImgs image={arrayImagesCities[numeroAcambiar+1]}/> 
        <div className='buttonOne'>  
        <button onClick={next} className='botonCarouselOne'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M10.296 7.71 14.621 12l-4.325 4.29 1.408 1.42L17.461 12l-5.757-5.71z"></path><path d="M6.704 6.29 5.296 7.71 9.621 12l-4.325 4.29 1.408 1.42L12.461 12z"></path></svg></button>
        </div>
        </div>
        <div className='contenedor-imgs'>
        <CarouselImgs image={arrayImagesHotels[numeroAcambiar]}/>
        <CarouselImgs image={arrayImagesHotels[numeroAcambiar+1]}/> 
        </div>
    </div>
     </>
  )
}
