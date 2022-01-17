export enum CustomFieldType {
    String = 'string',
    Number = 'number',
    Boolean = 'boolean',
    Text = 'textarea',
    Date = 'date'
}

export interface CustomField {
    name: string;
    type: CustomFieldType;
    value?: any;
}