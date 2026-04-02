import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Individualservice from "./Pages/Individualservice";
import Work from "./Pages/Work";
import Blog from "./Pages/Blog";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/services/:serviceId" element={<Individualservice />} />

        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;