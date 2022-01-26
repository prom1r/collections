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
    index: number;
    values:any
}

export const CustomFieldControl: React.FC<CustomFieldControlProps> = (props) => {
    const { name, type } = props.item;

    switch (type) {
        case CustomFieldType.String:
            return <TextFieldForm
                name={name}
                formik={props.formik}
                index={props.index}
                values={props.values}
            />
        case CustomFieldType.Boolean:
            return <CheckboxForm
                index={props.index}
                values={props.values || false}
                formik={props.formik}/>
        case CustomFieldType.Text:
            return <TextareaForm
                name={name}
                formik={props.formik}
                index={props.index}
                values={props.values}/>
        case CustomFieldType.Date:
            return <DateForm
                name={name}
                values={props.values}
                formik={props.formik}
                index={props.index}/>
        case CustomFieldType.Number:
            return <NumberForm
                name={name}
                formik={props.formik}
                index={props.index}
                values={props.values}
            />
        default:
            return null
    }
}