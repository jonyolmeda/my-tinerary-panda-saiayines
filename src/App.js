import Home from "./pages/home/Home";
import "./App.css";
import NotFound from "./pages/NotFound/NotFound";
import { Routes,Route } from "react-router-dom"; 

function App() {
  return (<>
  <Routes>
    <Route path='/' element={<Home/>}/> 
    <Route path='*' element={<NotFound/>}/>
  </Routes> 
  </>
  )
}
export default App;
