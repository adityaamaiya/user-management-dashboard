import axios from "axios";

const API_BASE_URL = "https://jsonplaceholder.typicode.com/";

export const getUsers = () => axios.get(`${API_BASE_URL}/users`); // Get all users
export const getUserById = (id) => axios.get(`${API_BASE_URL}/users/${id}`); // Get user by ID
export const addUser = (user) => axios.post(`${API_BASE_URL}/users`, user); // Add a new user
export const updateUser = (id, user) =>
  axios.put(`${API_BASE_URL}/users/${id}`, user); // Update user by ID
export const deleteUser = (id) => axios.delete(`${API_BASE_URL}/users/${id}`); // Delete user by ID
