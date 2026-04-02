import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import Service from "./Pages/Service";
import Individualservice from "./Pages/Individualservice";
import Work from "./Pages/Work";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Blank from "./Components/Footer/Blank"
import Ourprocess from "./Pages/Ourprocess";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>

      {/* 🔥 HEADER FULL WIDTH (NO PADDING) */}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/services/:serviceId" element={<Individualservice />} />
        <Route path="/ourprocess" element={<Ourprocess />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <Footer />
      <Blank />

    </BrowserRouter>
  );
};

export default App;