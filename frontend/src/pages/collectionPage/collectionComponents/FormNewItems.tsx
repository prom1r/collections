import React, { useState } from 'react';
import * as Yup from 'yup';
import { FormikControl } from "../../../components/FormikControl";
import { Formik, Form } from 'formik';
import Button from '@mui/material/Button';
import { Dropzone } from "../../../components/Dropzone";
import { postNewItems } from "../../../api/itemsService";
import { Item } from "../../../models/item";

export const FormNewItems = (props) => {

    const initialValues = {
        title: '',
        description: '',
    }

    const validationSchema = Yup.object({
        title: Yup.string()
            .required('Required'),
        description: Yup.string().required('Required'),
    })


    const onSubmit = async (values:Item) => {
        try {
            values.collectionId = props.collectionId
            console.log(props.idCollection)
            const item = await postNewItems(values);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {formik => (
                <Form>
                    <FormikControl
                        control='input'
                        type='text'
                        label='Title:'
                        name='title'
                        style='form-control'
                    />
                    <FormikControl
                        control='textarea'
                        label='Description:'
                        name='description'
                        style='form-control'
                    />
                    <Button
                        type="submit"
                        disabled={!formik.isValid}
                        variant="outlined">
                        Save
                    </Button>
                    <Button sx={{
                        marginLeft: 3
                    }}
                            onClick={props.onClose}
                            variant="outlined">
                        Close
                    </Button>
                </Form>
            )}
        </Formik>
    );
};