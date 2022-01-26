import React from 'react';
import { useFormik } from 'formik';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useAuth0 } from "@auth0/auth0-react";
import { postNewComment } from "../../../api/commentService";

export const CommentsForm = (props) => {
    const { getAccessTokenSilently, user, isAuthenticated } = useAuth0();
    const formik = useFormik({
        initialValues: {
            user: {
                userId: user.sub,
                avatar: user.picture,
                nickname: user.nickname
            },
            date: new Date(),
            itemId: props.itemId,
            commentsItem: ''
        },
        onSubmit: async (values) => {
            const token = await getAccessTokenSilently();
            await postNewComment(token, values);

            formik.values.commentsItem = ''
        },
    });
    return (
        <Box sx={{
            width: 'auto',
            display: 'flex',
            boxShadow: '0px 0px 0px 0px'
        }}>

            <form onSubmit={formik.handleSubmit}>
                <TextField sx={{
                    width: '20rem',
                }}

                           label="...comment"
                           multiline
                           rows={4}
                           id="commentsItem"
                           name="commentsItem"
                           value={formik.values.commentsItem}
                           onChange={formik.handleChange}

                />
                <Button sx={{
                    display: 'block',
                    width: '50%',
                    marginTop: '20px'

                }}
                        variant="contained" type="submit">
                    Submit
                </Button>
            </form>
        </Box>
    );
};