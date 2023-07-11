import React from 'react';
import './App.css';
import Projects from "./components/Projects.js";
import Header from "./components/Header";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <main>
      <Navbar />
      <div className='container mx-auto'>
        <Header />
        <Projects /> 
        <Footer />  
      </div>
    </main>
  );
}

export default App;