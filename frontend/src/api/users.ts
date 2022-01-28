import { BACKEND_URL } from "../const";
import axios from "axios";

export const getUsers = async (token) => {
  const apiUrl = `${BACKEND_URL}/users`;
  const response = await axios.get(apiUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
