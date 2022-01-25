import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';
import ReactMarkdown from "react-markdown";
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Backdrop from "@mui/material/Backdrop";
import { FormNewCollections } from "../../myCollections/formNewCardCollections/FormNewCollections";
import { isAdmin } from "../../../models/users";
import { useAuth0 } from "@auth0/auth0-react";
import DeleteIcon from "@mui/icons-material/Delete";
import { getMyItems } from "../../../api/itemsService";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import { deleteCollectionId } from "../../../api/collectionService";
import { useNavigate } from "react-router-dom";


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    boxShadow: '0px 0px 0px 0px',
    backgroundSize: 'cover'
}));


export const CollectionHeader = (props) => {
    const { getAccessTokenSilently, user } = useAuth0();
    const navigate = useNavigate();
    const { _id, title, srcImg, category, description, userId } = props.collection;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [openError, setOpenError] = React.useState(false);

    const handleCloseError = () => {
        setOpenError(false);
    };

    const [openModal, setOpenModal] = React.useState(false);
    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleDeleteCloseModal = async () => {
        let countItems = await getMyItems(_id);
        if (countItems.length > 0) {
            setOpenModal(false)
            setOpenError(true)
        } else {
            const token = await getAccessTokenSilently();
            await deleteCollectionId(_id, token);
            navigate('/collections/my');
        }
        setOpenModal(false);
    }

    const onClose = (value) => {
        props.onClose(value);
        handleClose()
    }

    return (
        <Box sx={{
            flexGrow: 1,
            paddingTop: 3,
        }}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Item>
                        <CardMedia
                            component="img"
                            height="500"
                            image={srcImg}
                            alt={title}
                        />
                    </Item>
                </Grid>
                <Grid item xs={8}>
                    <Item>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Typography gutterBottom variant="h2" component="h2">
                                    {title}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Grid container spacing={2}>
                                    <Grid item xs={5}>
                                        {(user && user.sub == userId || isAdmin(user)) &&
                                            <Button onClick={handleOpen} variant="contained">Edit Collection</Button>
                                        }
                                    </Grid>
                                    <Grid item xs={7}>
                                        {(user && user.sub == userId || isAdmin(user)) &&
                                            <Button sx={{
                                                marginLeft: '20px'
                                            }}
                                                    variant="contained"
                                                    color='error'
                                                    startIcon={<DeleteIcon fontSize='large'/>}
                                                    onClick={handleOpenModal}>
                                                Delete Collection
                                            </Button>
                                        }
                                    </Grid>
                                </Grid>
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
                                        <FormNewCollections onClose={onClose} collection={props.collection}/>
                                    </div>
                                </Drawer>

                                <Dialog
                                    open={openModal}
                                    onClose={handleCloseModal}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                >
                                    <DialogTitle id="alert-dialog-title">
                                        {"You really want to delete this collection?"}
                                    </DialogTitle>
                                    <DialogActions>
                                        <Button onClick={handleDeleteCloseModal}
                                                color='error'
                                                startIcon={<DeleteIcon fontSize='large'/>}
                                        >
                                            Delete
                                        </Button>
                                        <Button onClick={handleCloseModal} autoFocus>Close</Button>
                                    </DialogActions>
                                </Dialog>

                                <Dialog
                                    open={openError}
                                    onClose={handleCloseError}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                >
                                    <DialogTitle id="alert-dialog-title">
                                        {"Sorry but there are items in your collection "}
                                    </DialogTitle>
                                    <DialogActions>
                                        <Button onClick={handleCloseError} autoFocus>Close</Button>
                                    </DialogActions>
                                </Dialog>

                            </Grid>
                        </Grid>
                        <Typography variant="body2" color="text.secondary">
                            <ReactMarkdown>{description}</ReactMarkdown>
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            <Item>
                                <Chip label={category} variant="outlined"/>
                            </Item>
                            <Item>
                                <Typography gutterBottom variant="h6" color="text.secondary">
                                    {props.itemsCount} items
                                </Typography>
                            </Item>
                            <Item>
                                <Chip variant="outlined" icon={<FaceIcon/>} label='Autor:DimasKarabas'/>
                            </Item>
                        </Stack>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
