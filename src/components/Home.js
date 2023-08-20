import React from 'react';
import Projects from "./Projects.js";
import Header from "./Header";
import Footer from './Footer';

function Home() {
  return (
      <main>
        <div className='container mx-auto'>
          <Header />
          <Projects /> 
          <Footer />  
        </div>
      </main>
  );
}

export default Home;