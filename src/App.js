import React from 'react';
import './App.css';
import Projects from "./components/Projects.js";
import Header from "./components/Header";

function App() {
  return (
    <main className='container mx-auto'>
      <Header />
      <Projects />
    </main>
  );
}

export default App;