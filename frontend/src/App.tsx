import React from 'react';
import './App.css';
import HomePage from "./pages/Home/HomePage";
import Navbar from "./components/navigation/Navbar";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { MyCollectionsPage } from "./pages/MyCollections/MyCollectionsPage";


function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/collections/my" element={<MyCollectionsPage/>}/>
                    <Route path="/" element={<HomePage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
