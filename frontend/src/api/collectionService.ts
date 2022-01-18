import axios from 'axios';
import { BACKEND_URL } from "../const";
import { Collection } from "../models/collections";

export const getTopCollections = async () => {
    const apiUrl = `${BACKEND_URL}/collections/top`;
    const response = await axios.get<Collection[]>(apiUrl);
    return response.data;
}

export const getMyCollections = async (token) => {
    const apiUrl = `${BACKEND_URL}/collections/my`;
    const response = await axios.get(apiUrl, { headers: { 'Authorization': `Bearer ${token}` } });
    return response.data;
}

export const getMyCollectionsId = async (id) => {
    const apiUrl = `${BACKEND_URL}/collections/${id}`;
    const response = await axios.get(apiUrl);
    return response.data;
}

export const postNewCollections = async (token, values) => {
    const response = await axios.post(`${BACKEND_URL}/collections/my`, { values }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return response.data;
}