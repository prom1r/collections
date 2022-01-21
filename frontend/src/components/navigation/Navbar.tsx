import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AuthenticationButton from "./AuthenticationButton";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { MuCollectionButton } from "./MyCollectionButton";
import { useAuth0 } from "@auth0/auth0-react";
import { isAdmin } from "../../models/users";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';


export const Navbar = () => {
    const { user } = useAuth0();
    const role = isAdmin(user);


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
                {role &&
                    <Link style={{ textDecoration: 'none' }} to={'/admin'}>
                        <Button variant="outlined"  startIcon={<AdminPanelSettingsIcon/>} sx={{
                            color:'white'
                        }}>
                            Admin
                        </Button>
                    </Link>
                }
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
