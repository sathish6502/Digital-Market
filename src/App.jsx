import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";

const App = () => {
  return (
    <BrowserRouter>

      {/* Common Header (all pages) */}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </BrowserRouter>
  );
};

export default App;