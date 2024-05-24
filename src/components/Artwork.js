import React from "react";
import { useParams } from "react-router-dom";
import artworks from "../data";

function Artwork () {
    const {artworkId} = useParams ();
    const art = artworks.find(a => a.id === parseInt(artworkId));
}

return (
    <div>
        <img src={art.imageUrl} alt={art.piece}/>
        <h2>{art.piece}</h2>
        <p>{art.artist}</p>
        <p>{art.description}</p>
    </div>
)

export default Artwork;