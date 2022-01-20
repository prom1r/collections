import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import CollectionsIcon from '@mui/icons-material/Collections';

const LogoutButton = () => {
    const { logout } = useAuth0();
    return (
        <div>
            <Button color="inherit" onClick={() => logout({ returnTo: window.location.origin })}>
                Log Out
            </Button>
        </div>
    );
};

export default LogoutButton;