import React from "react";
import {Link} from 'react-router-dom';
import artworks from "../data";

function Gallery () {
  return(
    <div>
      {artworks.map((art) => (
        <div key={art.id} className="artwork">
          <img src={art.imageUrl} alt={art.Piece}/>
          <h3>{art.Piece}</h3>
          <p>{art.Artist}</p>
          <Link to={`/artwork/${art.id}`}>View Description</Link>
        </div>
      ))}
    </div>
  )
}

export default Gallery;