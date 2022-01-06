import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import {CardCollection} from "../../../components/CardCollection";
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width:"250px"
}));

export const MyCollections = (props) => {
    const [myCollections, setMyCollections] = useState(null)
    const { isAuthenticated, getAccessTokenSilently } = useAuth0();

    useEffect(() => {
        if (!isAuthenticated) {
            return;
        }
        (async () => {
            try {
                const token = await getAccessTokenSilently();
                const response = await fetch('http://localhost:9000/collections/my', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setMyCollections(await response.json());
            } catch (e) {
                console.error(e);
            }
        })();
    }, [isAuthenticated, getAccessTokenSilently]);

    if (!myCollections) {
        return <div>Loading...</div>;
    }

    return (
        <Box sx={{
            width: '0 auto',
            height: 500,
            backgroundColor: 'grow',
            marginLeft: '100px',
            marginTop:'50px'

        }}
        >
            <Stack direction="row" spacing={2}>
                {myCollections.map(item => (
                    <Item>
                        <CardCollection collection={item}/>
                    </Item>))}
            </Stack>
        </Box>

    );
}