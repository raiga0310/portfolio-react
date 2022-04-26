import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Works from "./pages/Works";
import Home from "./pages/Home";


function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Works" element={<Works />} />
        </Routes>
        <Home />
    </>
  );
}

export default App;
