import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Stack from '@mui/material/Stack';
import { CardCollection } from "../../../components/CardCollection";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { getMyCollections } from "../../../api/collectionService";
import { NewCardCollection } from "./NewCardCollections";


const Item = styled(Paper)(({ theme }) => ({
    width: "250px",
    padding: "50px",
    boxShadow: '0px 0px 0px 0px'
}));

export const MyCollections = (props) => {
    const [myCollections, setMyCollections] = useState([])
    const { isAuthenticated, getAccessTokenSilently } = useAuth0();

    const handleCreate = (newCollection) => {
        myCollections.splice(0, 0, newCollection);
        console.log(newCollection)
    }

    useEffect(() => {
        if (!isAuthenticated) {
            return;
        }
        (async () => {
            try {
                const token = await getAccessTokenSilently();
                getMyCollections(token).then((result) => {
                    setMyCollections(result)
                })
            } catch (e) {
                console.error(e);
            }
        })();

    }, [isAuthenticated, getAccessTokenSilently,myCollections])

    if (!myCollections) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <Stack direction="row" padding="50px">
                {myCollections.map(item => (
                    <Item key={item._id}>
                        <CardCollection collection={item}/>
                    </Item>))}
                <NewCardCollection onCreate={handleCreate}/>
            </Stack>
        </>
    );
}
