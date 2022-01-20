import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { NewCardItem } from "./NewCardItem";
import { getMyItems } from "../../../api/itemsService";
import { CardItem } from "../../../components/CardItem";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";


const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    maxWidth: "250px",
    boxShadow: '0px 0px 0px 0px',
}));

export const CollectionItems = (props) => {

    const [items, setMyItems] = useState([]);
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);


    const handleCreate = (newCollection) => {
        items.splice(0, 0, newCollection);
        const newMyItems = items.slice();
        setMyItems(newMyItems);
        setOpen(true);
    }

    useEffect(() => {
        (async () => {
            try {
                getMyItems(props.collectionId).then((result) => {
                    setMyItems(result)
                })
            } catch (e) {
                console.error(e);
            }
        })();

    }, [])

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
            {items.map(item => (
                <Item key={item._id}>
                    <Link style={{ textDecoration: 'none' }} to={`/item/${item._id}`}>
                        <CardItem item={item}/>
                    </Link>
                </Item>))}


            <NewCardItem collectionId={props.collectionId}
                         onCreate={handleCreate}
                         collectionTitle={props.collectionTitle}
                         customField={props.customField}
                         userId={props.userId}/>

            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                message="Your item has been successfully added!"
                key={'onCreate'}
            />
        </Box>
    );
}
