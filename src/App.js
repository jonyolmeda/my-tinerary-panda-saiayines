import { useSelector, useDispatch } from "react-redux";
import Home from "./pages/home/Home";
import "./App.css";
import NotFound from "./pages/NotFound/NotFound";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Cities from "./pages/Cities/Cities";
import Hotels from "./pages/Hotels/Hotels";
import NewCity from "./pages/NewCity/NewCity";
import NewHotel from "./pages/NewHotel/NewHotel";
import CityDetails from "./pages/CityDetails/CityDetails";
import HotelDetail from "./pages/HotelDetails/HotelDetail";
import MyCities from "./pages/MyCities/MyCities";
import HotelsByUser from "./pages/HotelsByUser/HotelsByUser";
import MyShows from "./pages/MyShows/MyShows";
import MyItineraries from "./pages/MyItineraries/MyItineraries";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile/Profile";
import EditProfileUser from "./pages/EditProfile/EditProfileUser";
import NewShows from "./pages/NewShows/NewShows";
import NewItineraries from "./pages/NewItineraries/NewItineraries";
import NewReaction from "./pages/NewReaction/NewReaction";
import { useEffect } from "react";
import loginAction from "./redux/actions/loginForm";
import MyReaction from "./pages/MyReaction/MyReaction"

function App() {
  let user = useSelector((store) => store.loginInReducer);
  console.log(user);
  let logged = user.token;
  let role = user.token;
  let admin = role.role === "admin";
  let dispatch = useDispatch();
  let { getToken } = loginAction;

  useEffect(() => {
    if (localStorage.getItem("token")) {
      let token = localStorage.getItem("token");
      dispatch(getToken(token));
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/newreaction" element={<NewReaction />} />
        <Route path="/" element={<Home />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/detailCity/:cityId" element={<CityDetails />} />
        <Route path="/detailHotel/:id" element={<HotelDetail />} />
        <Route path="/myreaction" element={<MyReaction />} />
        <Route path="*" element={<NotFound />} />
        <Route
          element={<ProtectedRoute isAllowed={!!logged} reDirect={"/signin"} />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/profileEdit" element={<EditProfileUser />} />
        </Route>
        <Route element={<ProtectedRoute isAllowed={!!admin} reDirect="/" />}>
          <Route path="/myitineraries" element={<MyItineraries />} />
          <Route path="/myshows" element={<MyShows />} />
          <Route path="/mycities" element={<MyCities />} />
          <Route path="/hotelByUser" element={<HotelsByUser />} />
          <Route path="/newcity" element={<NewCity />} />
          <Route path="/newhotel" element={<NewHotel />} />
          <Route path="/newshow" element={<NewShows />} />
          <Route path="/newitinerary" element={<NewItineraries />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
