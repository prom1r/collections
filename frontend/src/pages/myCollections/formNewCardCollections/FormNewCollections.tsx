import React, { useState } from 'react';
import * as Yup from 'yup';
import { FormikControl } from "../../../components/formikControl/FormikControl";
import Button from '@mui/material/Button';
import { useAuth0 } from "@auth0/auth0-react";
import { postNewCollections } from "../../../api/collectionService";
import { Dropzone } from "../../../components/Dropzone";
import { Collection } from "../../../models/collections";
import { Formik, Form, FieldArray, Field, ErrorMessage } from 'formik';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { CustomFieldType } from "../../../models/customFields";
import ReactMarkdown from "react-markdown";



interface FormNewCollectionsProps {
    onCreate: (collection) => void;
    onClose: () => void;
}


export const FormNewCollections: React.FC<FormNewCollectionsProps> = (props) => {
    const { getAccessTokenSilently } = useAuth0();
    const [url, setUrl] = useState(null);

    const dropdownOptions = [
        { key: 'Category', value: '' },
        { key: 'Cars', value: 'car' },
        { key: 'Books', value: 'books' },
        { key: 'Beer', value: 'beer' },
        { key: 'Other', value: 'other' },
    ]

    const dropdownOptionsData = [
        { key: 'Type', value: '' },
        { key: 'String', value: CustomFieldType.String },
        { key: 'Number', value: CustomFieldType.Number },
        { key: 'Boolean', value: CustomFieldType.Boolean },
        { key: 'Text', value: CustomFieldType.Text },
        { key: 'Date', value: CustomFieldType.Date },
    ]


    const initialValues = {
        title: '',
        description: '',
        category: '',
        customFields: [
            {
                name: '',
                type: CustomFieldType.String,
            },
        ],
    }

    const validationSchema = Yup.object({
        title: Yup.string()
            .required('Required'),
        description: Yup.string().required('Required'),
        category: Yup.string().required('Required')
    })

    const handleFileUpload = (url) => {
        setUrl(url);
    }

    const onSubmit = async (values: Partial<Collection>) => {
        try {
            const token = await getAccessTokenSilently();
            values.srcImg = url;
            const item = await postNewCollections(token, values);
            props.onCreate(item);
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

                    <Dropzone onUpload={handleFileUpload}/>

                        <FormikControl
                            control='textarea'
                            label='Description (supported Markdown):'
                            name='description'
                            style='form-control'
                        />

                    <FieldArray name="customFields">
                        {({ insert, remove, push }) => (
                            <div>
                                <Tooltip describeChild title="+Add Custom Fields.">
                                    <Button
                                        type="button"
                                        onClick={() => push({ name: '', type: '' })}>+Add Custom Field</Button>
                                </Tooltip>
                                {formik.values.customFields.length > 0 &&
                                    formik.values.customFields.map((customField, index) => (
                                        <div key={index}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={8}>
                                                    <label htmlFor={`customFields.${index}.name`}>Name</label>
                                                    <Field
                                                        name={`customFields.${index}.name`}
                                                        placeholder="add name"
                                                        type="text"
                                                    />
                                                </Grid>
                                                <Grid item xs={3}>
                                                    <FormikControl
                                                        control='select'
                                                        label='Type:'
                                                        name={`customFields.${index}.type`}
                                                        options={dropdownOptionsData}
                                                        style='form-control'
                                                    />
                                                </Grid>
                                                <Grid item xs={1}>
                                                    <IconButton sx={{
                                                        marginTop: 2.5
                                                    }}
                                                                aria-label="delete" type="button"
                                                                onClick={() => remove(index)}>
                                                        <DeleteIcon/>
                                                    </IconButton>
                                                </Grid>
                                            </Grid>
                                        </div>
                                    ))}
                            </div>
                        )}
                    </FieldArray>

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
