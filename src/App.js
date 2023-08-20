import React from 'react';
import './App.css';
import Projects from "./components/Projects.js";
import Header from "./components/Header";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Gob from './components/views/getonbrd';
import Zum from './components/views/hellozum';
import { Routes, Route, Outlet, Link } from "react-router-dom";

function App() {
  return (
      <main>
        <Navbar />

        <Routes>
          <Route path="/gob" element={<Gob />} />
          <Route path="/zum" element={<Zum />} />
        </Routes>

        <div className='container mx-auto'>
          <Header />
          <Projects /> 
          <Footer />  
        </div>
      </main>
  );
}

export default App;