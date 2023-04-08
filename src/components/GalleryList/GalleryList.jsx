import { useState, useEffect } from 'react';
// We must import axios in each component we want to use it 
import axios from 'axios';
import GalleryItem from '../GalleryItem.jsx';

function GalleryList(gallery, setGalleryList) {

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
        <>
        {
                    // ! .map happens in our List Component
                    gallery.map((photo) => (
                        <GalleryItem
                        key={photo.id}
                        />
                    ))
                }
        </>
    )

}

export default GalleryList;