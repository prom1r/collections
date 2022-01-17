import React from 'react';
import { TextFieldForm } from "../navigation/TextFieldForm";
import { CustomField, CustomFieldType } from "../../models/customFields";
import { CheckboxForm } from './CheckBoxForm';
import { TextareaForm } from './TextAreaForm';
import { DateForm } from './DateForm';
import { NumberForm } from './NumberForm';

interface CustomFieldControlProps {
    item: CustomField;
    formik: object;
    setValues: any;
    index: number;
}

export const CustomFieldControl: React.FC<CustomFieldControlProps> = (props) => {
    const { name, type } = props.item;

    switch (type) {
        case CustomFieldType.String:
            return <TextFieldForm name={name}
                formik={props.formik}
                setValues={props.setValues}
                index={props.index} />
        case CustomFieldType.Boolean:
            return <CheckboxForm 
                setValues={props.setValues}
                index={props.index} />
        case CustomFieldType.Text:
            return <TextareaForm name={name}
                formik={props.formik}
                setValues={props.setValues}
                index={props.index} />
        case CustomFieldType.Date:
            return <DateForm name={name}
                formik={props.formik}
                setValues={props.setValues}
                index={props.index} />
        case CustomFieldType.Number:
            return <NumberForm name={name}
                formik={props.formik}
                setValues={props.setValues}
                index={props.index} />
        default:
            return null
    }
}