import { BACKEND_URL } from "../const";
import axios from "axios";

export const postNewItems = async (values) => {
    const response = await axios.post(`${BACKEND_URL}/items`, { values })
    return response.data;
}

export const getRecentItems = async () => {
    const apiUrl = `${BACKEND_URL}/items/recent`;
    const response = await axios.get(apiUrl);
    return response.data
}

export const getMyItems = async (id) => {
    const apiUrl = `${BACKEND_URL}/collection/items`;
    const response = await axios.post(apiUrl, { id });
    return response.data;
}

export const getMyItemId = async (id) => {
    const apiUrl = `${BACKEND_URL}/item`;
    const response = await axios.post(apiUrl, { id });
    return response.data;
}


