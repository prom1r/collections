import React, { useState } from 'react';
import './App.css';
import HomePage from "./pages/homePage/HomePage";
import { Navbar } from "./components/navigation/Navbar";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { MyCollectionsPage } from "./pages/myCollections/MyCollectionsPage";
import { CollectionPage } from "./pages/collectionPage/CollectionPage";
import { ItemPage } from "./pages/ItemsPage/ItemPage";
import { AdminPage } from "./pages/adminPage/adminPage";
import { SearchItemsPage } from "./pages/SearchItemsPage/SearchItemsPage";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { PaletteMode } from "@mui/material";


export const ColorModeContext = React.createContext({
    toggleColorMode: () => {
    }
});

function App() {
    const [mode, setMode] = React.useState<PaletteMode>('light');

    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );


    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: mode,
                    primary: {
                        main: '#512da8',
                        light: '#c5bbde',
                        dark: '#bd9718',
                    },
                    secondary: {
                        main: '#ffca28',
                    },
                },
            }),
        [mode],
    );

    return (
        <div className="app">
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <BrowserRouter>
                        <Navbar/>
                        <Routes>
                            <Route path="/" element={<HomePage/>}/>
                            <Route path="/collections/my" element={<MyCollectionsPage/>}/>
                            <Route path="/collection/:id" element={<CollectionPage/>}/>
                            <Route path="/admin" element={<AdminPage/>}/>
                            <Route path="/results/items" element={<SearchItemsPage/>}/>
                            <Route path="/item/:id" element={<ItemPage/>}/>
                        </Routes>
                    </BrowserRouter>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </div>
    );
}

export default App;
