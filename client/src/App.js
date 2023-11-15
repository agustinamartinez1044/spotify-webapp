import React from 'react';
import './App.css';
import Home from './pages/Home/Home.jsx'
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";

function App() {
  return (
    <div className="App">
        <SearchBar/>
        <Home/>
        <NavBar/>
    </div>
  );
}

export default App;
