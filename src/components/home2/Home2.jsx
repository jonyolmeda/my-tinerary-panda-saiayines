import React from 'react';
import './home2.css';
import Carousel from '../Carousel/Carousel';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

export default function Home2() {
  return (
    <>
    <div className='contenedor-main2'>
         <h3> Gallery </h3>
         <div>
            <Carousel/>
         </div>
         <div className='contenedor-ScrollToTop'>
          <ScrollToTop/>
         </div>
    </div>
     </>
  )
}
