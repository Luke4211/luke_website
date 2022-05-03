import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  collection, query, getDocs,
} from 'firebase/firestore';
import LargeView from './components/Layout/LargeView';
import SmallView from './components/Layout/SmallView';
import db from './firebase';

const q = query(collection(db, 'posts'));

async function handleFetchPosts() {
  try {
    const querySnapshot = await getDocs(q);

    return querySnapshot;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }

  return null;
}

function App() {
  const [isLarge, setLarge] = useState(window.innerWidth > 1080);

  const updateDisplayMode = () => {
    setLarge(window.innerWidth > 1080);
  };

  useEffect(() => {
    window.addEventListener('resize', updateDisplayMode);
    return () => window.removeEventListener('resize', updateDisplayMode);
  });

  return (
    <div>
      {isLarge ? (
        <div style={{
          height: 'auto',
        }}
        >
          <LargeView onFetchPosts={handleFetchPosts} />
        </div>
      ) : (
        <SmallView onFetchPosts={handleFetchPosts} />
      )}

    </div>

  );
}

export default App;
