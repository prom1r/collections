import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { CardCollection } from "../../../components/CardCollection";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { getMyCollections } from "../../../api/collectionService";
import { NewCardCollection } from "./NewCardCollections";
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import Snackbar from '@mui/material/Snackbar';

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    maxWidth: "250px",
    boxShadow: '0px 0px 0px 0px',
}));

export const MyCollections = (props) => {
    const [myCollections, setMyCollections] = useState([])
    const { isAuthenticated, getAccessTokenSilently } = useAuth0();
    const [open, setOpen] = React.useState(false);
    const [transition, setTransition] = React.useState(undefined);

    function TransitionUp(props) {
        return <Slide {...props} direction="up" />;
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleCreate = (newCollection) => {
        myCollections.splice(0, 0, newCollection);
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
        setTransition(() => TransitionUp);
        setOpen(true);
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

    }, [isAuthenticated, getAccessTokenSilently])

    if (!myCollections) {
        return <div>Loading...</div>;
    }
    return (
        <Box sx={{
            paddingTop: '50px',
            paddingLeft: '10px',
            width: 'auto',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '30px'
        }}>
            {myCollections.map(item => (
                <Item key={item._id}>
                    <CardCollection collection={item}/>
                </Item>))}
            <NewCardCollection onCreate={handleCreate}/>
            <Snackbar
                open={open}
                onClose={handleClose}
                TransitionComponent={transition}
                message="Your collection has been successfully added"
                key={transition ? transition.name : ''}
            />
        </Box>
    );
}
