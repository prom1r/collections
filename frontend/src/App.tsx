import React from 'react';
import './App.css';
import HomePage from "./pages/homePage/HomePage";
import { Navbar } from "./components/navigation/Navbar";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { MyCollectionsPage } from "./pages/myCollections/MyCollectionsPage";
import { CollectionPage } from "./pages/collectionPage/CollectionPage";
import { ItemPage } from "./pages/ItemsPage/ItemPage";
import { AdminPage } from "./pages/adminPage/adminPage";


function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/collections/my" element={<MyCollectionsPage/>}/>
                    <Route path="/collection/:id" element={<CollectionPage/>}/>
                    <Route path="/admin" element={<AdminPage/>}/>
                    <Route path="/item/:id" element={<ItemPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
