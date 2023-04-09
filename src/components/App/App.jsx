import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx'


function App() {
  const [gallery, setGalleryList] = useState([]);
  
  
  const fetchGalleryList = () => {
    axios.get('/gallery').then((response) => {
        setGalleryList(response.data);
    }).catch((error) => {
        console.log(`Error in Get ${error}`);
        alert('Something went wrong!')
    })
}

// ! Don't do this, it will potentially mess up Reacts timing 
//fetchCreatureList();
useEffect(() => {
    // At this point, React is ready!
    fetchGalleryList();
}, []); // ! Remember the empty Array

  return (

    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
     
      <GalleryList 
      gallery= {gallery}
      />
    </div>
  );
}

export default App;
