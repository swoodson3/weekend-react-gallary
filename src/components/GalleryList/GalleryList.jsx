import { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryItem from '../GalleryItem/GalleryItem.jsx';
import './GalleryList.css';


function GalleryList({ gallery }) {

    return (
        <div>
            <div className="gallery-list">
                {gallery.map(picture => (
                    <GalleryItem
                        key={picture.id}
                        picture={picture}
                    />
                ))}
            
        </div>
        </div>
    )

}

export default GalleryList;