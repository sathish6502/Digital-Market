import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Service from "./Pages/Service";
import Individualservice from "./Pages/Individualservice";
import Ourservice from "./Pages/Ourservice";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Service />} />
        <Route path="/services/:serviceId" element={<Individualservice />} />
        <Route path="/our-process" element={<Ourservice />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;