// index.tsx or index.js
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Experience,
  Feedbacks,
  Contact,
  Navbar,
  Tech,
  Hero,
  Works,
  StarsCanvas,
} from "./components";

// import React from 'react';

const App = () => {
  return (
    
    <BrowserRouter>
        <h1 className='text-white'>hjk</h1>

      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <h1 className='text-white'>hhjk</h1>

          <h1>faay</h1>
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  
  );
}

export default App;
