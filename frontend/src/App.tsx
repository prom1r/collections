import React from 'react';
import './App.css';
import HomePage from "./pages/homePage/HomePage";
import Navbar from "./components/navigation/Navbar";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { MyCollectionsPage } from "./pages/myCollections/MyCollectionsPage";
import { CollectionPage } from "./pages/collectionPage/CollectionPage";
import { PageNotFound } from "./pages/notFound/PageNotFound";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/collections/my" element={<MyCollectionsPage/>}/>
                    <Route path="/collection/:id" element={<CollectionPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
