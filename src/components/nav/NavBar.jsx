import React from "react";
import "./navbar.css";

export default function NavBar() {
  return (
    <div className="contenedor-nav">
      <div className="contenedor-logo">
        <img className="logo-navbar" src="/images/logo.png" alt="logo" />
      </div>
      <div className="contenedor-boton">
        <a href="/" className="boton">HOME</a>
        <a href="/" className="boton">CITIES</a>
        <a href="/" className="boton">HOTELS & CASINOS</a>
       </div>
      
      <div className="contenedor-lista">
        <ul className="ul-icon">
          <li><svg className="icon-nav" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="white" d="M6 22h13a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h1zm6-17.001c1.647 0 3 1.351 3 3C15 9.647 13.647 11 12 11S9 9.647 9 7.999c0-1.649 1.353-3 3-3zM6 17.25c0-2.219 2.705-4.5 6-4.5s6 2.281 6 4.5V18H6v-.75z"></path></svg></li>
          <ul className="ul-regis">
            <li>
              <a href="/">Sing Up</a>
            </li>
            <li>
              <a href="/">Log In</a>
            </li>
          </ul>
          
        </ul>
      </div>
      </div>
  )
}
