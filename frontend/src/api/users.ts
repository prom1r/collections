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

export const setAdmin = async (values, token) => {
  const response = await axios.post(
    `${BACKEND_URL}/users/admin/`,
    { values },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
