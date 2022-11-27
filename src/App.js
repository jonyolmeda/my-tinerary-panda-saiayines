import { useSelector } from "react-redux";
import Home from "./pages/home/Home";
import "./App.css";
import NotFound from "./pages/NotFound/NotFound";
import { Routes,Route } from "react-router-dom"; 
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Cities from "./pages/Cities/Cities";
import Hotels from "./pages/Hotels/Hotels";
import NewCity from "./pages/NewCity/NewCity";
import NewHotel from "./pages/NewHotel/NewHotel";
import CityDetails from "./pages/CityDetails/CityDetails"
import HotelDetail from "./pages/HotelDetails/HotelDetail"
import MyCities from "./pages/MyCities/MyCities";
import HotelsByUser from "./pages/HotelsByUser/HotelsByUser"
import MyShows from "./pages/MyShows/MyShows"
import MyItineraries from "./pages/MyItineraries/MyItineraries"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  let user = useSelector((store) => store.loginInReducer)
  let logged = user.token
  let role = user.token
  let admin = role.role === "admin"
  console.log(admin)

  return (<>
  <Routes>
    <Route path='/' element={<Home/>}/> 
    <Route path='/cities' element={<Cities/>}/>  
    <Route path='/hotels' element={<Hotels/>}/>
    <Route path='/signup' element={<SignUp/>}/> 
    <Route path='/signin' element={<SignIn/>}/>
    <Route path='/detailCity/:cityId' element={<CityDetails/>}/>
    <Route path='/detailHotel/:id' element={<HotelDetail/>}/>
    <Route path="/myshows" element={<MyShows/>}/>
    <Route path="/myitineraries" element={<MyItineraries/>}/>
    <Route element={<ProtectedRoute isAllowed={!!admin} reDirect='/'/>}>
        <Route path="/mycities" element={<MyCities/>}/>
        <Route path="/hotelByUser" element={<HotelsByUser/>}/>
        <Route path='/newcity' element={<NewCity/>}/>
        <Route path='/newhotel' element={<NewHotel/>}/>
    </Route>
    <Route path='*' element={<NotFound/>}/>   
  </Routes> 
  </>
  )
}
export default App;
