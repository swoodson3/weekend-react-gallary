import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx';
import GalleryForm from '../GalleryForm/GalleryForm.jsx';

function App() {
  const [gallery, setGalleryList] = useState([]);

  useEffect(() => {
    fetchGalleryList();
  }, []);

  const fetchGalleryList = () => {
    axios.get('/gallery').then((response) => {
      setGalleryList(response.data);
    }).catch((error) => {
      console.log(`Error in Get ${error}`);
      alert('Something went wrong!');
    });
  };

  const handleDeleteItem = (id) => {
    axios.delete(`/gallery/${id}`)
      .then(() => {
        fetchGalleryList();
      })
      .catch((error) => {
        console.log('Error deleting gallery item', error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GalleryForm
        fetchGalleryList=
        {fetchGalleryList}
      />
      <GalleryList
        gallery={gallery}
        handleDeleteItem=
        {handleDeleteItem}
      />
    </div>
  );
}

export default App;

