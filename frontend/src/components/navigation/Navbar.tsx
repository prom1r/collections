import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchItem from "./SearchItem";
import AuthenticationButton from "./AuthenticationButton";
import {Link} from "react-router-dom";


export default function Navbar() {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography align="left" width="auto" variant="h5" component="div" sx={{flexGrow: 1}}>
                        <Link to="/">MY COLLECTIONS</Link>
                    </Typography>
                    <AuthenticationButton/>
                </Toolbar>
                <SearchItem/>
            </AppBar>
        </Box>
    );
}
