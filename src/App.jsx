import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Individualservice from "./Pages/Individualservice";
import Work from "./Pages/Work";
import Blog from "./Pages/Blog";
import Blank from "./Components/Footer/Blank";
import Ourprocess from "./Pages/Ourprocess";

const App = () => {
  return (
    <HashRouter>

      {/* 🔥 HEADER FULL WIDTH (NO PADDING) */}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/services/:serviceId" element={<Individualservice />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/ourprocess" element={<Ourprocess />} />
      </Routes>

      <Footer />
      <Blank />

      </HashRouter>
  );
};

export default App;