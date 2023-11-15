import React from 'react';
import './albumCard.css';

const AlbumCard = ({album}) => {

    const {id, name, release_date, total_tracks, image, popularity, artistName} = album;

    return (
        <div className="card-container">
            <div className="album-card">
                <div className="card-content"></div>
                <div className="card-image">
                    <img src={image} alt={name}/></div>
                <h3 className="card-title">{name}</h3>
                <div class="card-text">
                    <div key={id}>{artistName}</div>
                    <p>{release_date}</p>
                </div>
            </div>
        </div>
    );
};


export default AlbumCard;
