import React from 'react';
import AlbumCard from '../AlbumCard/AlbumCard.jsx';
import './albumList.css';

const AlbumList = ({albums}) => {
    return (
        <div className="album-list">
            {albums.length > 0 ? (
                albums.map((album) => (
                    <AlbumCard key={album.id} album={album} />
                ))
            ) : (
                <p className="album-list-not-found">No albums to show.</p>
            )}
        </div>
    );
};

export default AlbumList;
