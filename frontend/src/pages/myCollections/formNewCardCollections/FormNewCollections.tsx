import React from 'react';
import * as Yup from 'yup';
import { FormikControl } from "../../../components/FormikControl";
import { Formik, Form } from 'formik';
import Button from '@mui/material/Button';
import { useAuth0 } from "@auth0/auth0-react";
import { postNewCollections } from "../../../api/collectionService";

interface FormNewCollectionsProps {
    onCreate: (collection) => void;
}

export const FormNewCollections: React.FC<FormNewCollectionsProps> = (props) => {
    const { getAccessTokenSilently } = useAuth0();

    const dropdownOptions = [
        { key: 'Category', value: '' },
        { key: 'Cars', value: 'car' },
        { key: 'Books', value: 'books' },
        { key: 'Beer', value: 'beer' },
        { key: 'Other', value: 'other' },
    ]

    const initialValues = {
        title: '',
        description: '',
        category: '',
    }

    const validationSchema = Yup.object({
        title: Yup.string()
            .required('Required'),
        description: Yup.string().required('Required'),
        category: Yup.string().required('Required'),
        // srcImage: Yup.string().required('Required')
    })

    const onSubmit = async (values) => {
        try {
            const token = await getAccessTokenSilently();
            await postNewCollections(token, values);
            props.onCreate(values);
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
                        control='select'
                        label='Category:'
                        name='category'
                        options={dropdownOptions}
                        style='form-control'
                    />
                    {/*<FormikControl*/}
                    {/*    control='input'*/}
                    {/*    type='text'*/}
                    {/*    label='URL image:'*/}
                    {/*    name='srcImage'*/}
                    {/*    style = 'form-control'*/}
                    {/*/>*/}
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
                </Form>
            )}
        </Formik>
    );
};