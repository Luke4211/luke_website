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
    <div>
      <Postcards/>  
    </div>
    

  
  );
}

export default App;
