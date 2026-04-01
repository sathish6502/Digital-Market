import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./Pages/About";
import Service from "./Pages/Service";
import Ourservice from "./Pages/Ourservice";
import Individualservice from "./Pages/Individualservice";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/individualservice" element={<Individualservice />} />
        <Route path="/ourservice" element={<Ourservice />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;