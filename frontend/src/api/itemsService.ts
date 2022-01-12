import {BACKEND_URL} from "../const";
import axios from "axios";
import {Item} from "../models/item";

export const postNewItems = async ( values) => {
    const response = await axios.post(`${BACKEND_URL}/items`, { values })
    return response.data;
}


export const getTopItem = async () => {
    const apiUrl = `${BACKEND_URL}/items/top`;
    const response = await axios.get<Item[]>(apiUrl);
    return response.data
}

export const getMyItems = async (id) => {
    const apiUrl = `${BACKEND_URL}/collection/items`;
    const response = await axios.post(apiUrl, { id });
    return response.data;
}