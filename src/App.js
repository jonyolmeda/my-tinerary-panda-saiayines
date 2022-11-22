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


function App() {
  return (<>
  <Routes>
    <Route path='/' element={<Home/>}/> 
    <Route path='/cities' element={<Cities/>}/>  
    <Route path='/hotels' element={<Hotels/>}/>
    <Route path='/signup' element={<SignUp/>}/> 
    <Route path='/signin' element={<SignIn/>}/>
    <Route path='/newcity' element={<NewCity/>}/>
    <Route path='/newhotel' element={<NewHotel/>}/>
    <Route path='/detailCity/:cityId' element={<CityDetails/>}/>
    <Route path='/detailHotel/:id' element={<HotelDetail/>}/>
    <Route path="/mycities" element={<MyCities/>}/>
    <Route path='*' element={<NotFound/>}/>   
  </Routes> 
  </>
  )
}
export default App;
