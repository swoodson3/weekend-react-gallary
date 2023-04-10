import axios from 'axios'
import { useState } from 'react';

function GalleryItem({ picture, handleDeleteItem }) {
  const [showDescription, setShowDescription] = useState(false);
  const [likes, setLikes] = useState(picture.likes);

  const handleImageClick = () => {
    setShowDescription(!showDescription);
  };

  const handleLikeClick = () => {
    setLikes(likes + 1);
    axios.put(`/gallery/like/${picture.id}`)
      .then((response) => {
        // Update the number of likes for this picture
      })
      .catch((error) => {
        console.log('Error updating gallery item likes', error);
      });
  };

  const handleDeleteClick = () => {
    handleDeleteItem(picture.id);
  };

  return (
    <div className="gallery-item">
      <div onClick={handleImageClick}>
        {showDescription ? (
          <p className="description">{picture.description}</p>
        ) : (
          <img src={picture.image_url} />
        )}
      </div>
      <div className="likes">
        <button onClick={handleLikeClick}>Like</button>
        {likes === 0 ? (
          <p>No likes yet</p>
        ) : (
          <p>{likes} like{likes === 1 ? '' : 's'}</p>
        )}
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  );
}

export default GalleryItem;



