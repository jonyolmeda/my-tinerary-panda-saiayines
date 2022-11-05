import Home from "./pages/home/Home";
import "./App.css";
import NotFound from "./pages/NotFound/NotFound";
import { Routes,Route } from "react-router-dom"; 
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (<>
  <Routes>
    <Route path='/' element={<Home/>}/> 
    <Route path='*' element={<NotFound/>}/>
    <Route path='/signup' element={<SignUp/>}/> 
  </Routes> 
  </>
  )
}
export default App;
