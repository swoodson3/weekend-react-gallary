import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem.jsx';
import './GalleryList.css';

function GalleryList({ gallery, handleDeleteItem }) {
  return (
    <div>
      <div className="gallery-list">
        {gallery.map((picture) => (
          <GalleryItem
            key={picture.id}
            picture={picture}
            handleDeleteItem={handleDeleteItem}
          />
        ))}
      </div>
    </div>
  );
}

export default GalleryList;



