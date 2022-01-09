import React from 'react';
import './App.css';
import HomePage from "./pages/home/HomePage";
import Navbar from "./components/navigation/Navbar";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { MyCollectionsPage } from "./pages/myCollections/MyCollectionsPage";
import { SnackbarProvider } from 'notistack';

function App() {
    return (
        <SnackbarProvider maxSnack={3}>
            <div className="app">
                <BrowserRouter>
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/collections/my" element={<MyCollectionsPage/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </SnackbarProvider>
    );
}

export default App;
