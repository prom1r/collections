import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AuthenticationButton from "./AuthenticationButton";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { MuCollectionButton } from "./MyCollectionButton";

export default function Navbar() {

    return (
        <AppBar position="static">
            <Toolbar sx={{
                width: 'auto',
                display: 'flex',
                alignItems: 'center',
                position: 'relative'
            }}>
                <Link style={{ textDecoration: 'none' }} to="/">
                    <Button style={{ color: '#FFFFFF' }}>
                        <h2>COLLECTOR</h2>
                    </Button>
                </Link>
                <MuCollectionButton/>
                <Box sx={{
                    position: 'absolute',
                    right: 0,
                    paddingRight: '10px'
                }}>
                    <AuthenticationButton/>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
