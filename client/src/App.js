import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes,useNavigate} from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home.jsx'
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import AlbumList from "./components/AlbumList/AlbumList.jsx";

function App() {
    const [albums, setAlbums] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (albums.length > 0) {
            navigate('/albums');
        }
    }, [albums, navigate]);

  return (
    <div className="App">
        <SearchBar setAlbums={setAlbums}/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/albums" element={<AlbumList albums={albums}/>}/>
        </Routes>
        <NavBar/>
    </div>
  );
}

export default function AppWithRouter() {
    return (
        <Router>
            <App/>
        </Router>
    );
}
