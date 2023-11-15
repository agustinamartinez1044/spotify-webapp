import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home.jsx'
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import AlbumList from "./components/AlbumList/AlbumList.jsx";

function App() {
  return (
    <div className="App">
        <SearchBar/>
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/albums" element={<AlbumList/>}/>
                </Routes>
            </div>
        </Router>
        <NavBar/>
    </div>
  );
}

export default App;
