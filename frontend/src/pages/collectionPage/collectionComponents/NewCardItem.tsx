import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { FormNewItems } from "./FormNewItems";


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
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,
                    }}>
                        <div className='formik'>
                            <FormNewItems onCreate={onCreate}
                                          collectionId={props.collectionId}
                                          onClose={onClose}
                                          collectionTitle={props.collectionTitle}/>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
