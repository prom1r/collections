import React, {FC, useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import {getTopCollections} from "../../../api/collectionService";
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

export const TopCollections = (props) => {
    const [collections, setCollections] = useState([])
    useEffect(() => {
        getTopCollections().then((result) => {
            setCollections(result)
        })
    })
    if (!collections || collections.length === 0) return <p>Нет данных.</p>
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
                {collections.map(item => (
                    <Item>
                        <CardCollection collection={item}/>
                    </Item>))}
            </Stack>
        </Box>

    );
}