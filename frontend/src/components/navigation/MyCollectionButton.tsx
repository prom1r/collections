import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import CollectionsIcon from "@mui/icons-material/Collections";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const MuCollectionButton = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <div>
            {(isAuthenticated) &&
                <Link style={{ textDecoration: 'none' }} to="/collections/my">
                    <Button style={{ color: '#FFFFFF' }} variant="text" startIcon={<CollectionsIcon/>}>My
                        Collections</Button>
                </Link>
            }
        </div>
    )
}
