import axios from 'axios';
import { BACKEND_URL } from "../const";
import {Collection} from "../models/collections";

export const getTopCollections = async () => {
    const apiUrl = `${BACKEND_URL}/collections/top`;
    const response = await axios.get<Collection[]>(apiUrl);
    return response.data;
}





