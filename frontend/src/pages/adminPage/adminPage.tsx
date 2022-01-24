import React, { useEffect, useState } from 'react'
import { TableUsers } from "./components/tableUsers";
import { useAuth0 } from "@auth0/auth0-react";
import { getUsers } from "../../api/users";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from '@mui/material/Typography';

export const AdminPage = () => {
    const { getAccessTokenSilently, user } = useAuth0();
    const [users, setUsers] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const token = await getAccessTokenSilently();
                getUsers(token).then((result) => {
                    setUsers(result);
                })
            } catch (e) {
                console.error(e);
            }
        })();
    }, [])

    if (!users) {
        return <CircularProgress/>;
    }
    return (
        <>
            <Typography variant="h3" component="h3"  align='left' sx={{
                padding:'10px'
            }}>
                Users
            </Typography>
            <TableUsers users={users}/>
        </>

    )
}
