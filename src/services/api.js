import axios from "axios";

const baseURL = "http://localhost:5000/api"; // sostituire con l'URL del server

// funzione per impostare il token di autenticazione nelle richieste
const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

// funzione per effettuare una richiesta GET
const get = async (url) => {
  try {
    const response = await axios.get(`${baseURL}${url}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// funzione per effettuare una richiesta POST
const post = async (url, data) => {
  try {
    const response = await axios.post(`${baseURL}${url}`, data);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// funzione per effettuare una richiesta PUT
const put = async (url, data) => {
  try {
    const response = await axios.put(`${baseURL}${url}`, data);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// funzione per effettuare una richiesta DELETE
const remove = async (url) => {
  try {
    const response = await axios.delete(`${baseURL}${url}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const api = {
  setAuthToken,
  get,
  post,
  put,
  remove,
};
