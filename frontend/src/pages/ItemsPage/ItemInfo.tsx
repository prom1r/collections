import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import EditIcon from '@mui/icons-material/Edit';
import { CustomFieldView } from 'pages/ItemsPage/customFieldViews/CustomFieldView';
import { ChipTag } from "../../components/ChipTag";
import Drawer from "@mui/material/Drawer";
import Backdrop from "@mui/material/Backdrop";
import { FormNewItems } from "../collectionPage/collectionComponents/FormNewItems";
import DeleteIcon from '@mui/icons-material/Delete';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { deleteItemId, putLikeUser, putUnlikeUser } from "../../api/itemsService";
import { useAuth0 } from "@auth0/auth0-react";
import { isAdmin } from "../../models/users";
import { Likes } from "../../components/Likes";


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    boxShadow: '0px 0px 0px 0px',
    backgroundSize: 'cover'
}));


export const ItemInfo = (props) => {
    const { getAccessTokenSilently, user } = useAuth0();
    const navigate = useNavigate();
    const { _id, title, srcImg, collectionTitle, collectionId, customField, tags, userId } = props.item;
    const [open, setOpen] = React.useState(false);
    const [like, setLike] = React.useState(false);
    const [likeCount, setLikeCount] = React.useState([]);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [openModal, setOpenModal] = React.useState(false);

    React.useEffect(() => {
        if (props.item.like.includes(user.sub)) {
            setLike(true)
        } else {
            setLike(false)
        }
    }, []);

    const handleLike = async () => {
        if (!like) {
            const token = await getAccessTokenSilently();
            const like = await putLikeUser(_id, token);
            setLikeCount(like);
            setLike(true);
        } else {
            const token = await getAccessTokenSilently();
            const like = await putUnlikeUser(_id, token);
            setLikeCount(like);
            setLike(false);
        }
    }



    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleDeleteCloseModal = async () => {
        const token = await getAccessTokenSilently();
        const itemDelete = await deleteItemId(_id, token);
        navigate(`/collection/${collectionId}`);
        setOpenModal(false);
    }

    const onClose = (item) => {
        props.onClose(item);
        setOpen(false)

    }

    return (
        <Box sx={{
            flexGrow: 1,
            paddingTop: 3,
        }}>
            <Grid container spacing={1} paddingLeft='20px'>
                <Grid item xs={8} textAlign='left'>
                    <Link style={{ textDecoration: 'none' }} to={`/collection/${collectionId}`}>
                        <Button variant="contained" startIcon={<ArrowBackIosNewIcon fontSize='large'/>}>
                            Back to {collectionTitle}
                        </Button>
                    </Link>
                </Grid>
                <Grid item xs={4}>


                    {(user && user.sub == userId || isAdmin(user)) &&
                        <Button
                            onClick={handleOpen}
                            variant="contained"
                            startIcon={<EditIcon fontSize='large'/>}
                        >
                            Edit Item
                        </Button>
                    }

                    {(user && user.sub == userId || isAdmin(user)) &&
                        <Button sx={{
                            marginLeft: '20px'
                        }}
                                variant="contained"
                                color='error'
                                startIcon={<DeleteIcon fontSize='large'/>}
                                onClick={handleOpenModal}>
                            Delete Item
                        </Button>
                    }


                    <Drawer
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        anchor={'right'}
                        open={open}
                        onClose={handleCloseModal}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >
                        <div className='formik'>
                            <FormNewItems item={props.item}
                                          customField={customField}
                                          collectionTitle={collectionTitle}
                                          collectionId={collectionId}
                                          onClose={onClose}
                                          handleClose={handleClose}
                            />
                        </div>
                    </Drawer>

                    <Dialog
                        open={openModal}
                        onClose={handleCloseModal}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"You really want to delete this item?"}
                        </DialogTitle>
                        <DialogActions>
                            <Button onClick={handleDeleteCloseModal}
                                    color='error'
                                    startIcon={<DeleteIcon fontSize='large'/>}
                            >
                                Delete
                            </Button>
                            <Button onClick={handleCloseModal} autoFocus>Cansel</Button>
                        </DialogActions>
                    </Dialog>
                </Grid>
            </Grid>
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
                            <Typography gutterBottom variant="h2" component="h2" sx={{
                                paddingLeft: '10px',
                                paddingBottom: '20px'
                            }}>
                                {title}
                            </Typography>
                        </Grid>
                        <Grid container item spacing={3}>
                            {customField.map(item => <CustomFieldView item={item}/>)}
                        </Grid>
                    </Item>
                    <Grid item xs={8}>
                        <Grid container item spacing={1} sx={{
                            paddingLeft: '10px'
                        }}>
                            {tags.map(tag => <ChipTag tag={tag}/>)}
                        </Grid>
                    </Grid>
                    <Grid item xs={1}>
                        <Likes like={like} setLike={handleLike} likeCount={likeCount} likeCountFirst={props.item.like}/>
                    </Grid>
                </Grid>
            </Grid>
        </Box>

    );
}
