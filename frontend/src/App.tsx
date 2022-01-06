import React from 'react';
import './App.css';
import HomePage from "./pages/Home/HomePage";
import Navbar from "./components/navigation/Navbar";
import {Routes, Route, Link} from "react-router-dom";
import Collection from "./pages/Collection";
import Item from "./pages/Item";


function App() {
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="collection" element={<Collection/>}/>
                <Route path="item" element={<Item/>}/>
            </Routes>
        </div>
    );
}

export default App;
