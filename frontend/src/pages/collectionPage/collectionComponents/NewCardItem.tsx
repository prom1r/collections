import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import { FormNewItems } from "./FormNewItems";
import Drawer from '@mui/material/Drawer';


export const NewCardItem = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onCreate = (item) => {
        props.onCreate(item);
        handleClose();
    }

    const onClose=()=>{
        handleClose()
    }

    return (
        <div>
            <Button onClick={handleOpen} component="div"
                    sx={{
                        border: '2px dashed grey',
                        maxWidth: 345,
                        boxShadow: 10,
                        minWidth: 240,
                        minHeight: 260,
                        height: '100%',
                        width: '100%',
                        backgroundColor: 'ghostwhite',
                        '&:hover': {
                            backgroundColor: 'lavender',
                            opacity: [0.9, 0.8, 0.7],
                        },
                    }}>Create Item
            </Button>
            <Drawer
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                anchor={'right'}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >

                        <div className='formik'>
                            <FormNewItems onCreate={onCreate}
                                          collectionId={props.collectionId}
                                          onClose={onClose}
                                          collectionTitle={props.collectionTitle}
                                          customField={props.customField}/>
                        </div>
            </Drawer>
        </div>
    );
}
