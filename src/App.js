import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {

  const [mode, setMode] = useState('dark');

  return (
    <>

      {/* <Navbar title="ReactApp" aboutText="About Us" /> */}
      <Navbar title="ReactApp" mode={mode} />

      <div className="container my-3">
        <TextForm heading='Enter Your Text Below...' />
        {/* <About /> */}
      </div>

    </>
  );
}

export default App;
