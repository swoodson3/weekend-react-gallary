import axios from 'axios'
import { useState, useEffect } from 'react';


function GalleryItem({ picture }) {
    const [showDescription, setShowDescription] = useState(false);
    const [likes, setLikes] = useState(picture.likes);

    const handleImageClick = () => {
        setShowDescription(!showDescription);
    };

    const handleLikeClick = () => {
        axios.put(`/gallery/like/${picture.id}`).then((response) => {
            // update the number of likes for this picture
            setLikes(response.data.likes);
        });
    };

    return (
        <div className="gallery-item">
          <img
            onClick={handleImageClick}
            src={picture.path}
            alt={picture.description}
            width="100"
            height="100"
          />
          {showDescription ? (
            <p className="description">{picture.description}</p>
          ) : null}
          <div className="likes">
            <button onClick={handleLikeClick}>Like</button>
            <p>{likes} likes</p>
          </div>
        </div>
      );
    }
    
      

export default GalleryItem;