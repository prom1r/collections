import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PageNotFound } from "../notFound/PageNotFound";
import { ItemInfo } from "./ItemInfo";
import { getMyItemId } from "../../api/itemsService";
import Snackbar from "@mui/material/Snackbar";


export const ItemPage = () => {
    const { id } = useParams();
    const [isLoaded, setIsLoaded] = useState(false);
    const [item, setItem] = useState(null);
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);

    const onClose = (value) => {
        setOpen(true);
        setItem(value);
    }

    useEffect(() => {
        getMyItemId(id).then((result) => {
            setItem(result)
            setIsLoaded(true);
        })
    }, [])

    if (!isLoaded) {
        return <div>Loading...</div>;
    }
    if (isLoaded && !item) {
        return <PageNotFound/>
    }
    return (
        <div>
            <ItemInfo item={item} onClose={onClose}/>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
                message="Your collection has been successfully edit!"
                key={'onCreate'}
            />
        </div>
    );

}
