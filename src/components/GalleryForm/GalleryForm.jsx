import axios from 'axios';
import { useState } from 'react';

function GalleryForm({ fetchGalleryList }) {
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [newImage, setNewImage] = useState('');
    
    const handleInputChange = (event) => {
      const { name, value } = event.target;
    
      // Update state based on input name
      switch (name) {
        case 'title':
          setNewTitle(value);
          break;
        case 'description':
          setNewDescription(value);
          break;
        case 'image':
          setNewImage(value);
          break;
        default:
          break;
      }
    };
    
    const handleSubmit = (event) => {
      event.preventDefault();
    
      // Send new gallery item data to server
      axios.post('/gallery', {
        title: newTitle,
        description: newDescription,
        path: newImage,
      })
        .then((response) => {
          // Reset form and fetch updated gallery data
          setNewTitle('');
          setNewDescription('');
          setNewImage('');
          fetchGalleryList();
        })
        .catch((error) => {
          console.log('Error adding gallery item', error);
        });
    };
    
    return (
      <form className="form-container" onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" value={newTitle} onChange={handleInputChange} />
        <input type="text" name="description" placeholder="Description" value={newDescription} onChange={handleInputChange} />
        <input type="text" name="image" placeholder="Image URL" value={newImage} onChange={handleInputChange} />
        <button type="submit">Add to Gallery</button>
      </form>
    );
}

export default GalleryForm;