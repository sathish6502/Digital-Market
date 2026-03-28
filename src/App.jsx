import React from 'react'
import Footer from './Components/Footer/Footer'
import Service from './Pages/Service'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Individualservice from './Pages/Individualservice'

const App = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   <BrowserRouter>
   <Routes>
    <Route path="/service" element={<Service />}/>
    <Route path="/individualservice" element={<Individualservice />}/>
    </Routes>  
    </BrowserRouter>
    <Footer />
    </div>
  )
}

export default App