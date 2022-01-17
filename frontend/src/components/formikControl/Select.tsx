import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { TextError } from '../TextError';

export const Select = (props) => {
    const { label, name, options,style, ...rest } = props;
    return (
        <div className={style}>
            <label htmlFor={name}>{label}</label>
            <Field as='select' id={name} name={name} {...rest}>
                {options.map(option => {
                    return (
                        <option key={option.value} value={option.value}>
                            {option.key}
                        </option>
                    )
                })}
            </Field>
            <ErrorMessage component={TextError} name={name}/>
        </div>
    )
}