import axios from 'axios'
import { useState } from 'react';



function GalleryItem({ picture }) {
    const [showDescription, setShowDescription] = useState(false);
    const [likes, setLikes] = useState(picture.likes);

    const handleImageClick = () => {
        setShowDescription(!showDescription);
    };

    const handleLikeClick = () => {
      setLikes(likes + 1)
        axios.put(`/gallery/like/${picture.id}`).then((response) => {
            // update the number of likes for this picture
        });
    };

    return (
        <div className="gallery-item">
          <div onClick={handleImageClick}>
           {showDescription ? (
            <p className="description">{picture.description}</p>
          ) : (
          <img
            src={picture.path}
            alt={picture.description}
          />
          )}
          </div> 
          <div className="likes">
            <button onClick={handleLikeClick}>Like</button>
            {likes === 0 ? (
          <p>No likes yet</p>
        ) : (
          <p>{likes} like{likes === 1 ? '' : 's'}</p>
        )}
          </div>
        </div>
      );
    }
    
      

export default GalleryItem;