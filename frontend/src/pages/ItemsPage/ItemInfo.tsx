import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import EditIcon from '@mui/icons-material/Edit';
import { CustomFieldView } from 'pages/ItemsPage/customFieldViews/CustomFieldView';
import { ChipTag } from "../../components/ChipTag";
import Drawer from "@mui/material/Drawer";
import Backdrop from "@mui/material/Backdrop";
import { FormNewItems } from "../collectionPage/collectionComponents/FormNewItems";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    boxShadow: '0px 0px 0px 0px',
    backgroundSize: 'cover'
}));


export const ItemInfo = (props) => {
    const { title, srcImg, collectionTitle, collectionId, customField, tags } = props.item;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const onClose = (item) => {
        handleClose();
        props.onClose(item);

    }

    return (
        <Box sx={{
            flexGrow: 1,
            paddingTop: 3,
        }}>
            <Grid container spacing={1} paddingLeft='20px'>
                <Grid item xs={10} textAlign='left'>
                    <Link style={{ textDecoration: 'none' }} to={`/collection/${collectionId}`}>
                        <Button variant="contained" startIcon={<ArrowBackIosNewIcon fontSize='large'/>}>
                            Back to {collectionTitle}
                        </Button>
                    </Link>
                </Grid>
                <Grid item xs={2}>
                    <Button
                        onClick={handleOpen}
                        variant="contained"
                        startIcon={<EditIcon fontSize='large' />}
                    >
                        Edit Item
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
                            <FormNewItems item={props.item}
                                          customField={customField}
                                          collectionTitle={collectionTitle}
                                          collectionId={collectionId}
                                          onClose={onClose}
                            />
                        </div>
                    </Drawer>

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
                </Grid>
            </Grid>
        </Box>

    );
}
