import React, { useState, useEffect } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LargeView from './components/Layout/LargeView';
import SmallView from './components/Layout/SmallView';

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
        <SmallView/>
      )}
      
    </div>

    
    

  
  );
}

export default App;
