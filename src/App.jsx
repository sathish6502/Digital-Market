import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<About/>}/> 
        </Routes>  
    </Router>
  );
};

export default App;