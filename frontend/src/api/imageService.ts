import axios from 'axios';
import { BACKEND_URL } from "../const";

export const postImage = async (file) => {
    let formData = new FormData();
    formData.append("image", file);
    const response = await axios.post(`${BACKEND_URL}/upload`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    return response.data
}