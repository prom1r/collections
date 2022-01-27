import { BACKEND_URL } from "../const";
import axios from "axios";

export const getTags = async () => {
  const apiUrl = `${BACKEND_URL}/items/tags`;
  const response = await axios.get(apiUrl);
  return response.data;
};

export const getAllTags = async () => {
  const apiUrl = `${BACKEND_URL}/tags`;
  const response = await axios.get(apiUrl);
  return response.data;
};
export const searchItemsByTags = async (tag) => {
  const apiUrl = `${BACKEND_URL}/tag/${tag}`;
  const response = await axios.get(apiUrl);
  return response.data;
};
