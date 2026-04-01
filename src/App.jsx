import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import Footer from './Components/Footer/Footer'
import Service from './Pages/Service'
import Ourservice from './Pages/Ourservice'
import Individualservice from './Pages/Individualservice'

const App = () => {
  return (
    <div >
   <BrowserRouter>
    <Header />
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/service" element={<Service />}/>
    <Route path="/individualservice" element={<Individualservice />}/>
    <Route path="/ourservice" element={<Ourservice />}/>
    </Routes>  
    </BrowserRouter>
    <Footer />
    </div>
  )
}


export default App;