import React from 'react'
import Footer from './Components/Footer/Footer'
import Service from './Pages/Service'
import Ourservice from './Pages/Ourservice'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Individualservice from './Pages/Individualservice'

const App = () => {
  return (
    <div >
   <BrowserRouter>
   <Routes>
    <Route path="/service" element={<Service />}/>
    <Route path="/individualservice" element={<Individualservice />}/>
    <Route path="/ourservice" element={<Ourservice />}/>
    </Routes>  
    </BrowserRouter>
    <Footer />
    </div>
  )
}

export default App