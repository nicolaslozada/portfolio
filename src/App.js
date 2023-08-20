import React from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from "./components/Navbar"
import { Routes, Route, Link } from "react-router-dom";
import Gob from './components/views/getonbrd'
import Zum from './components/views/hellozum'

function App() {
  return (
      <main>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gob" element={<Gob />} />
            <Route path="/zum" element={<Zum />} />
          </Routes>
      </main>
  );
}

export default App;