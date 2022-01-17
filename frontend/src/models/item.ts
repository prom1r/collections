import { CustomField } from './customFields';

export interface Item {
    collectionId: number;
    collectionTitle: string;
    customField:any;
    id: number;
    title: string;
    alt: string;
    srcImg: string;
    like: number;
    description: string;
}