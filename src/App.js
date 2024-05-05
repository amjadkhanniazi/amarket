import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter } from 'react-router-dom';
import FloatingButtons from './components/FloatingButtons';
import Section1 from './components/sections/Section1';
import Section2 from './components/sections/Section2';
import Section3 from './components/sections/Section3';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <FloatingButtons />
      <Section1/>
      <Section2/>
      <Section3/>
      </BrowserRouter>
  );
}

export default App;
