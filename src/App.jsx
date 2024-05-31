import Header from "./components/Header"
import { Routes,Route } from "react-router-dom"
import all from "./pages/All"
import fullstack from "./pages/Fullstackdevelopment"
import datascience from"./pages/Datascience"
import cyper from "./pages/Cyber"
import career from "./pages/Career"
function App() {

  return (
    <>
    <Header />
   <Routes>
   
   <Route path="/all" element={<All/>}></Route>
   <Route path="/fullstack" element={<Fullstackdevelopment/>}></Route>
   <Route path="/datascience" element={<Datascience/>}></Route>
   <Route path="/cyper " element={<Cyber/>}></Route>
   <Route path="/career " element={<Career/>}></Route>
   </Routes>
   </>
   
  )
}

export default App
