import { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryItem from '..GalleryItem/GalleryItem.jsx';


function GalleryList({ gallery }) {



    return (

        <div>
            <h1>Gallery List</h1>
            <p>
                {gallery.map(picture => (
                    <GalleryItem
                        key={picture.id}
                        picture={picture}
                    />
                ))}
            </p>
        </div>
    )

}

export default GalleryList;