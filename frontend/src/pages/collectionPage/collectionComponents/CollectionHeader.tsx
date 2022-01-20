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


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    boxShadow: '0px 0px 0px 0px',
    backgroundSize: 'cover'
}));


export const CollectionHeader = (props) => {
    const { user } = useAuth0();
    const { _id, title, srcImg, category, description, userId } = props.collection;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onClose = (value) =>{
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
                            <Grid item xs={9}>
                                <Typography gutterBottom variant="h2" component="h2">
                                    {title}
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                {(user && user.sub == userId || isAdmin(user)) &&
                                    <Button onClick={handleOpen} variant="contained">Edit Collection</Button>
                                }
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
