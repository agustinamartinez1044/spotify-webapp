import React from 'react';
import './App.css';
import Home from './pages/Home/Home.jsx'
import SearchBar from "./components/SearchBar/SearchBar.jsx";

function App() {
  return (
    <div className="App">
        <SearchBar/>
        <Home/>
    </div>
  );
}

export default App;
