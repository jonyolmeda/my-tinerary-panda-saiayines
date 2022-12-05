import React from "react";
import "./navbar.css";
import { Link as NavLink } from "react-router-dom";
import loginAction from "../../redux/actions/loginForm";
import { useDispatch, useSelector} from "react-redux";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


export default function NavBar() {
  let token = useSelector((store) => store.loginInReducer.token)
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const Logout = (event) => {
    Swal.fire({
      title: "Are you sure you want to logout?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: "#ea5318",
      cancelButtonColor: "#5e5b5b",
      confirmButtonText: "Yes, I'm sure!",
    }).then((result) => {
      if (result.isConfirmed) {
        const tokenStorage = localStorage.getItem("token");
        dispatch(loginAction.logOut(tokenStorage));
        Swal.fire({
          title: "You have closed session",
          icon: 'success',
          width: "25rem",
          padding: "2rem",
        });
        navigate(`/signin`)
      }
    });
  };
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
              <a href="-" className="boton-nav">HOTELS</a>
            </li>
        </NavLink>
        {token.logged ? (<>
       <img className="profile-image" src={token.photo} alt={token.name} height='40px' width='40px' />
       <p className="profile-text">Welcome {token.name}!</p>
       </>) : null}
       <div className="contenedor-lista">
        
          {!token.logged ? ( <>
          <ul className="ul-icon-noadmin">
          <li><svg className="icon-nav" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="white" d="M6 22h13a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h1zm6-17.001c1.647 0 3 1.351 3 3C15 9.647 13.647 11 12 11S9 9.647 9 7.999c0-1.649 1.353-3 3-3zM6 17.25c0-2.219 2.705-4.5 6-4.5s6 2.281 6 4.5V18H6v-.75z"></path></svg></li>
             
           <ul className="ul-regis-noadmin">  
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
          </ul>
          </ul>
            </>
           ) : null}
          {token.logged && token.role === "admin" ? (
          <>
          <ul className="ul-icon">
                    <li><svg className="icon-nav" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="white" d="M6 22h13a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h1zm6-17.001c1.647 0 3 1.351 3 3C15 9.647 13.647 11 12 11S9 9.647 9 7.999c0-1.649 1.353-3 3-3zM6 17.25c0-2.219 2.705-4.5 6-4.5s6 2.281 6 4.5V18H6v-.75z"></path></svg></li>
                
          <ul className="ul-regis">
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
            <NavLink to="/newitinerary">
            <li>
              <a href="-">New Itineraries</a>
            </li>
            </NavLink>
            <NavLink to="/newshow">
            <li>
              <a href="-">New shows</a>
            </li>
            </NavLink>
            <NavLink to="/newreaction">
            <li>
              <a href="-">New Reaction</a>
            </li>
            </NavLink>
            <NavLink to="/myshows">
            <li>
              <a href="-">My Shows</a>
            </li>
            </NavLink>
            <NavLink to="/hotelByUser">
            <li> 
              <a href="-">My Hotels</a>
            </li>
            </NavLink>
            <NavLink to="/mycities">
            <li>
              <a href="-">My Cities</a>
            </li>
            </NavLink>
            <NavLink to="/myitineraries">
            <li>
              <a href="-">My Itineraries</a>
            </li>
            </NavLink>
            <NavLink to="/myreaction">
            <li>
              <a href="-">My Reactions</a>
            </li>
            </NavLink>
            <NavLink to="/profile">
            <li>
              <a href="-">My Profile</a>
            </li>
            </NavLink>
            <NavLink to="/">
            <li>
              <a onClick={Logout} href="-">Sign Out</a>
            </li>
            </NavLink>
            </ul>
            </ul>
            </>) : null}
            {token.logged && token.role === "user" ? (
              <>
            <ul className="ul-icon-noadmin">
              <li><svg className="icon-nav" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="white" d="M6 22h13a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h1zm6-17.001c1.647 0 3 1.351 3 3C15 9.647 13.647 11 12 11S9 9.647 9 7.999c0-1.649 1.353-3 3-3zM6 17.25c0-2.219 2.705-4.5 6-4.5s6 2.281 6 4.5V18H6v-.75z"></path></svg></li>
                      
                          
            <ul className="ul-regis-noadmin"> 
              <NavLink to="/profile">
            <li>
              <a href="-">My Profile</a>
            </li>
            </NavLink>
            <NavLink to="/">
            <li>
              <a onClick={Logout} href="-">Sign Out</a>
            </li>
            </NavLink>
            </ul>
            </ul>
              </>) : null}

      </div>
      </div>
      </div>
  )
}


