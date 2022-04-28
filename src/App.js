import React, { Component, useState, useEffect } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LargeView from './components/Layout/LargeView/LargeView';

const App = () => {

  const [isLarge, setLarge] = useState(window.innerWidth > 650);

  const updateDisplayMode = () => {
    setLarge(window.innerWidth > 650);

  };

  useEffect( () => {
    window.addEventListener("resize", updateDisplayMode);
    return () => window.removeEventListener("resize", updateDisplayMode);
  });

  return (
    <div>
      {isLarge ? (
        <LargeView/>

      ) : (
        <p>I'm mobile</p>
      )}
      
    </div>

    
    

  
  );
}

export default App;
