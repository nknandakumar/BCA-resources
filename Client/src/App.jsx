import NavBar from "./components/NavBar"
import Footer from "./pages/Footer"
import Home from "./pages/Home"
import Notes from "./pages/Notes"
import Papers from "./pages/Papers"
import Subject from "./pages/Subject"
import {BrowserRouter,Routes,Route} from "react-router-dom"
 
const App = () => {

  return (
   <BrowserRouter>
    <div className=" container " >
      <NavBar/>
       <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/subject" element={<Subject/>} />
       <Route path="/papers" element={<Papers/>} />
       <Route path="/notes" element={<Notes/>} />
     
       </Routes>
       <Footer/>
    </div>
   </BrowserRouter>
  )
}

export default App