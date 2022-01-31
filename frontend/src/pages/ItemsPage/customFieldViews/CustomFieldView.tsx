import React, { FC } from "react";
import { CustomField, CustomFieldType } from "models/customFields";
import { TypographyView } from "./TypographyView";
import { DateView } from "./DateView";
import { BooleanView } from "./BooleanView";
import { TextAreaView } from "./TextAreaView";

interface CustomFieldViewProps {
  item: CustomField;
}

export const CustomFieldView: React.FC<CustomFieldViewProps> = (props) => {
  const { type, name, value } = props.item;
  switch (type) {
    case CustomFieldType.String:
      return <TypographyView name={name} value={value} />;
    case CustomFieldType.Number:
      return <TypographyView name={name} value={value} />;
    case CustomFieldType.Date:
      return <DateView name={name} value={value} />;
    case CustomFieldType.Boolean:
      return <BooleanView name={name} value={value} />;
    case CustomFieldType.Text:
      return <TextAreaView name={name} value={value} />;
    default:
      return null;
  }
};
