import React, { useState, useEffect } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LargeView from './components/Layout/LargeView';
import SmallView from './components/Layout/SmallView';
import { collection, query, where, getDocs } from "firebase/firestore";
import db from './firebase'


const App = () => {

  const [isLarge, setLarge] = useState(window.innerWidth > 1080);

  const updateDisplayMode = () => {
    setLarge(window.innerWidth > 1080);

  };

  const q = query(collection(db, 'posts'));

  async function handleFetchPosts() {
    try {
      const querySnapshot = await getDocs(q);

      return querySnapshot;

    } catch (e) {
      console.log(e);
    }

    return null;
  }

  useEffect( () => {
    window.addEventListener("resize", updateDisplayMode);
    return () => window.removeEventListener("resize", updateDisplayMode);
  });

  return (
    <div >
      {isLarge ? (
        <div style={{
          height: "auto"
        }}>
          <LargeView onFetchPosts={handleFetchPosts} />
        </div>
      ) : (
        <SmallView onFetchPosts={handleFetchPosts} />
      )}
      
    </div>

    
    

  
  );
}

export default App;
