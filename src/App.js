import React, { useState, useEffect } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LargeView from './components/Layout/LargeView';
import SmallView from './components/Layout/SmallView';
import { collection, query, where, getDocs } from "firebase/firestore";
import db from './firebase'


const App = () => {

  const [isLarge, setLarge] = useState(window.innerWidth > 650);

  const updateDisplayMode = () => {
    setLarge(window.innerWidth > 650);

  };

  const q = query(collection(db, 'posts'));

  async function handleFetchPosts() {
    try {
      const querySnapshot = await getDocs(q);
      const rtn = [];

      querySnapshot.docs.map((doc) => {
        rtn.push({
          id: doc.id,
          headline: doc.get("headline"),
          description: doc.get("description"),
          thumbnail: doc.get("thumbnail"),
          date: (doc.get("date").toDate()).toDateString()

        });
      })

      return rtn;

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
    <div>
      {isLarge ? (
        <LargeView onFetchPosts={handleFetchPosts} />

      ) : (
        <SmallView onFetchPosts={handleFetchPosts} />
      )}
      
    </div>

    
    

  
  );
}

export default App;
