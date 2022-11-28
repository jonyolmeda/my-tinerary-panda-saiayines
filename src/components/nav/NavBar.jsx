import React from "react";
import "./navbar.css";
import { Link as NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="contenedor-nav">
      <div className="contenedor-logo">
        <img className="logo-navbar" src="/images/logonuevosf.png" alt="logo" />
      </div>
      <div className="contenedor-boton">
      <NavLink class='navlink' to="/">
            <li>
              <a href="-" className="boton-nav">HOME</a>
            </li>
      </NavLink>
      <NavLink class='navlink' to="/cities">
            <li>
              <a href="-" className="boton-nav">CITIES</a>
            </li>
        </NavLink>
        <NavLink class='navlink' to="/hotels">
            <li>
              <a href="-" className="boton-nav">HOTELS & CASINOS</a>
            </li>
        </NavLink>
       </div>
      
      <div className="contenedor-lista">
        <ul className="ul-icon">
          <li><svg className="icon-nav" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="white" d="M6 22h13a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h1zm6-17.001c1.647 0 3 1.351 3 3C15 9.647 13.647 11 12 11S9 9.647 9 7.999c0-1.649 1.353-3 3-3zM6 17.25c0-2.219 2.705-4.5 6-4.5s6 2.281 6 4.5V18H6v-.75z"></path></svg></li>
          <ul className="ul-regis">
          <NavLink to="/signup">
            <li>
              <a href="-">Sign Up</a>
            </li>
            </NavLink>
            <NavLink to="/signin">
            <li>
           <a href="-">Sign In</a>
           </li>
           </NavLink>
            <NavLink to="/newhotel">
               <li>
              <a href="-">New Hotel</a>
            </li>
            </NavLink>
            <NavLink to="/newcity">
            <li>
              <a href="-">New City</a>
            </li>
            </NavLink>
            <NavLink to="/newshow">
            <li>
              <a href="-">New Shows</a>
            </li>
            </NavLink>
            <NavLink to="/hotelByUser">
            <li> 
              <a href="-">Hotels User</a>
            </li>
            </NavLink>
            <NavLink to="/mycities">
            <li>
              <a href="-">Citys User</a>
            </li>
            </NavLink>
            <NavLink to="/myshows">
            <li>
              <a href="-">Shows User</a>
            </li>
            </NavLink>
            <NavLink to="/profile">
            <li>
              <a href="-">My Profile</a>
            </li>
            </NavLink>
            
          </ul>
        </ul>
      </div>
      </div>
  )
}


