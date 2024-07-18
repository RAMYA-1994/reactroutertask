// import Header from "./components/Header"
import {BrowserRouter, Routes,Route } from "react-router-dom"
import All from "./pages/All"
import Fullstackdevelopment from "./pages/Fullstackdevelopment"
import Datascience from"./pages/Datascience"
import Cyber from "./pages/Cyber"
import Career from "./pages/Career"
import Navbar from "./components/Navbar"
// import {ALL,Career,Cyber,Datascience,Fullstackdevelopment} from"./pages"
function App() {

  return (
    <>
    <Navbar />
    <BrowserRouter>
   <Routes>
   
   <Route path="/" element={<All/>}></Route>
   <Route path="/Fullstackdevelopment" element={<Fullstackdevelopment/>}></Route>
   <Route path="/datascience" element={<Datascience/>}></Route>
   <Route path="/secure" element={<Cyber/>}></Route>
   
    <Route path="/us" element={<Career/>}></Route>
   </Routes>
   </BrowserRouter>

   </>
   
  )
}

export default App
