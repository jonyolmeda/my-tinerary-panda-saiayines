import React from 'react'
import './footer.css'
import ScrollToTop from '../ScrollToTop/ScrollToTop';

export default function Footer() {
  return (
    <div className='contenedor-footer'>
      <div className="contenedor-logo">
        <img className="logo-navbar" src="/images/logonuevosf.png" alt="logo" />
      </div>
      <div className="contenedor-boton">
        <a href="/cities" className="boton">CITIES</a>
        <a href="/hotels" className="boton">HOTELS & CASINOS</a>
       </div>

       <div className='contenedor-github'>
        <div className='contenedor-imagen'>
        <img src='/images/github.png' alt='GitHub'></img><a href='https://github.com/jonyolmeda'>Jonathan Olmeda</a>
        <a href='https://github.com/pungitoregerman'>German Pungitore</a>
        </div>
        
       </div>
         <div className="contenedor-ScrollToTop">
          <ScrollToTop/>
        </div>  
  </div>
  ) 
}


