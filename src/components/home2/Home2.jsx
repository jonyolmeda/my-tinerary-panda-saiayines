import React from 'react';
import './home2.css';
import Carousel from '../Carousel/Carousel';

export default function Home2() {
  return (
    <>
    <div className='contenedor-main2'>
         <h3> Gallery </h3>
         <div>
            <Carousel/>
         </div>
         <div className='contenedor-ScrollToTop'>
         </div>
    </div>
     </>
  )
}
