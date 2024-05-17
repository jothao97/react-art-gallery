/*import React, { useState } from "react";
import AddArtwork from "./AddArtwork";

function Artwork() {
  // Initialize artList state with an empty array
  const [artList, setArtList] = useState([]);

  // Define handleImageClick function to toggle image details
  const handleImageClick = (index) => {
    // Implement your logic here to show or hide details for the clicked image
  };

  return (
    <div className="artwork-container">
      {/* Map over the artList array to render each artwork 
      {artList.map((art, index) => (
        <div key={index} className="artwork-item">
          {/* Clickable image to show or hide details 
          <img
            src={URL.createObjectURL(art.imageFile)}
            alt="Artwork"
            onClick={() => handleImageClick(index)}
          />
          {/* Render additional details or controls for the artwork 
          {/* For example: <p>{art.artName}</p>, <p>{art.artist}</p>, etc. 
        </div>
      
      {/* Include AddArtwork component to add new artworks 
      <AddArtwork setArtList={setArtList} />
    </div>
  );
}

export default Artwork; */
