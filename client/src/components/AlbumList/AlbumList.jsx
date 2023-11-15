import React from 'react';
import AlbumCard from '../AlbumCard/AlbumCard.jsx';
import './albumList.css';

const albums = [
    {
        "id": "35dut3ICqF3NEDkjxfzJJ1",
        "name": "Starboy (Deluxe)",
        "release_date": "2023-03-14",
        "total_tracks": 21,
        "image": "https://i.scdn.co/image/ab67616d0000b2738ad8f5243d6534e03b656c8b",
        "popularity": 74,
        "artistName": "The Weeknd"
    },
    {
        "id": "1OARrXe5sB0gyy3MhQ8h92",
        "name": "Live At SoFi Stadium",
        "release_date": "2023-03-03",
        "total_tracks": 31,
        "image": "https://i.scdn.co/image/ab67616d0000b273308f9319a3d6f6737f43b3fc",
        "popularity": 67,
        "artistName": "The Weeknd"
    },
    {
        "id": "4M2Mf4pmARKGVT9MLCe3HA",
        "name": "Avatar: The Way of Water (Original Motion Picture Soundtrack)",
        "release_date": "2022-12-15",
        "total_tracks": 22,
        "image": "https://i.scdn.co/image/ab67616d0000b273c8044633efdd0e991224e197",
        "popularity": 61,
        "artistName": "The Weeknd"
    },
    {
        "id": "12INlMsFtBjyehNnawBv36",
        "name": "Dawn FM (Alternate World)",
        "release_date": "2022-01-07",
        "total_tracks": 24,
        "image": "https://i.scdn.co/image/ab67616d0000b273ade87e5f9c3764f0a1e5df64",
        "popularity": 61,
        "artistName": "The Weeknd"
    }
];

const AlbumList = ({album}) => {

    if (!albums) {
        return <div className="album-list">No albums available.</div>;
    } else {
        return (
            <div className="album-list">
                {albums.map((album) => (
                    <AlbumCard key={album.id} album={album}/>
                ))}
            </div>
        );
    }
};

export default AlbumList;
