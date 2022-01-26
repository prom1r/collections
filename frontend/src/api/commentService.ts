import axios from 'axios';
import { BACKEND_URL } from "../const";

export const postNewComment = async (token, values) => {
    const response = await axios.post(`${BACKEND_URL}/item/comments`, { values }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return response.data;
}

export const getCommentsItem = async (id) => {
    const response = await axios.get(`${BACKEND_URL}/item/${id}/comments`)
    return response.data;
}

