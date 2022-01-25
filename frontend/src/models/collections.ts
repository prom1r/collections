import { CustomField } from "./customFields";

export interface Collection {
    _id: string;
    title: string;
    srcImg: string;
    itemsCount: number;
    category:string,
    description:string,
    customFields:CustomField[],
    userNickname: string,
    like:object

}
