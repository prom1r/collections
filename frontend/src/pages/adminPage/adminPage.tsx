import React, { useEffect, useState } from 'react'
import { TableUsers } from "./components/tableUsers";
import { useAuth0 } from "@auth0/auth0-react";
import { getUsers } from "../../api/users";
import CircularProgress from "@mui/material/CircularProgress";

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
        <TableUsers users={users}/>
    )
}
