import {BACKEND_URL} from "../const";
import axios from "axios";
import {Item} from "../models/item";

export const getTopItem = async () => {
    const apiUrl = `${BACKEND_URL}/items/top`;
    const response = await axios.get<Item[]>(apiUrl);
    return response.data
}