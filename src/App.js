import React, { Component } from 'react';
import './App.css';
//import Layout from './components/Layout';
import Header from './components/Layout/Header';
import Postcards from './components/Postcards/Postcards';
import Navigation from './components/Layout/Navigation';
import Card from 'react-bootstrap/Card'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div style={{  
      display: "grid",  
      gridTemplateColumns: "1fr 2fr 1fr"  
    }} 
    >
      <div>
        <Navigation/>
      </div>

      <div>
        <Postcards/>  
      </div>
      
    </div>
    

  
  );
}

export default App;
