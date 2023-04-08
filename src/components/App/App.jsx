import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx'


function App() {

  const [gallery, setGalleryList] = useState([]); 

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <p>Gallery goes here</p>
      <img src="images/goat_small.jpg" width="100" height="100" />
      <img src="images/Birthday-Girl.png" width="100" height="100" />
      <img src="images/Halloween.png" width="100" height="100" />
      <img src="images/Bath.png" width="100" height="100" />
      <img src="images/Christmas.png" width="100" height="100" />
      <img src="images/Playtime.png" width="100" height="100" />
      <GalleryList />
    </div>
  );
}

export default App;
