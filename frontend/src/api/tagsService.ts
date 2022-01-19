import { BACKEND_URL } from "../const";
import axios from "axios";

export const getTags = async () => {
    const apiUrl = `${BACKEND_URL}/items/tags`;
    const response = await axios.get(apiUrl);
    return response.data;
}
