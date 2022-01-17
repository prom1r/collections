import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Drawer from '@mui/material/Drawer';
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
                    }}>Create Collection
            </Button>
            <Drawer
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                anchor={'right'}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <div className='formik'>
                    <FormNewCollections onCreate={handleCreate} onClose={handleClose}/>
                </div>
            </Drawer>
        </div>
    );
}
