import Home from "./pages/home/Home";
import "./App.css";
import NotFound from "./pages/NotFound/NotFound";
import { Routes,Route } from "react-router-dom"; 
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Cities from "./pages/Cities/Cities";
function App() {
  return (<>
  <Routes>
    <Route path='/' element={<Home/>}/> 
    <Route path='*' element={<NotFound/>}/>
    <Route path='/signup' element={<SignUp/>}/> 
    <Route path='/signin' element={<SignIn/>}/>
    <Route path='/cities' element={<Cities/>}/>  
  </Routes> 
  </>
  )
}
export default App;
