import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { FormNewCollections } from "../formNewCardCollections/FormNewCollections";
import '../formNewCardCollections/formik.css';


interface NewCardCollectionsProps {
    onCreate: (collection) => void;
}

export const NewCardCollection: React.FC<NewCardCollectionsProps> = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleCreate = (item) => {
        handleClose();
        props.onCreate(item);
    }

    return (
        <div>
            <Button onClick={handleOpen} component="div"
                    sx={{
                        width: 240,
                        border: '2px dashed grey',
                        marginTop: 6,
                        height: 360,
                        marginLeft: 8,
                        backgroundColor: 'ghostwhite',
                        '&:hover': {
                            backgroundColor: 'lavender',
                            opacity: [0.9, 0.8, 0.7],
                        },
                    }}>Create Collection button
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
                            <FormNewCollections onCreate={handleCreate}/>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
