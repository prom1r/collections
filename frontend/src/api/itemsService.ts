import { BACKEND_URL } from "../const";
import axios from "axios";

export const postNewItems = async (values, token) => {
    const response = await axios.post(`${BACKEND_URL}/items`, { values }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return response.data;
}

export const getRecentItems = async () => {
    const apiUrl = `${BACKEND_URL}/items/recent`;
    const response = await axios.get(apiUrl);
    return response.data
}

export const getMyItems = async (id) => {
    const apiUrl = `${BACKEND_URL}/collection/${id}/items`;
    const response = await axios.get(apiUrl);
    return response.data;
}

export const getMyItemId = async (id) => {
    const apiUrl = `${BACKEND_URL}/item/${id}`;
    const response = await axios.get(apiUrl);
    return response.data;
}

export const putUpdateItem = async (token, values, id) => {
    const response = await axios.put(`${BACKEND_URL}/item/${id}`, { values }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return response.data;
}

export const deleteItemId = async (id, token) => {
    const response = await axios.delete(`${BACKEND_URL}/item/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return response.data
}

export const getSearchItems = async (searchItems) => {
    const response = await axios.get(`${BACKEND_URL}/results/${searchItems}`)
    return response.data
}



