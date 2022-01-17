import React, { FC } from 'react';
import { CustomField, CustomFieldType } from 'models/customFields';
import { TypographyString } from './TypographyString';
import { DateString } from './DateString';
import { BooleanString } from './BooleanString';
import { TextAreaString } from './TextAreaString';


interface ItemFieldControlProps {
    item: CustomField;
}

export const ItemFieldControl: React.FC<ItemFieldControlProps> = (props) => {
    const { type, name, value } = props.item;
    switch (type) {
        case CustomFieldType.String:
            return <TypographyString name={name} value={value} />
        case CustomFieldType.Number:
            return <TypographyString name={name} value={value} />
        case CustomFieldType.Date:
            return <DateString name={name} value={value} />
        case CustomFieldType.Boolean:
            return <BooleanString name={name} value={value} />
        case CustomFieldType.Text:
            return <TextAreaString name={name} value={value} />
        default:
            return null
    }

}