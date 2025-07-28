import axios from 'axios';

const API_URL = '/api/todos';

export const getAllTodos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createTodo = async (text) => {
  const response = await axios.post(API_URL, { text });
  return response.data;
};

export const updateTodo = async (id, updates) => {
  const response = await axios.put(`${API_URL}/${id}`, updates);
  return response.data;
};

export const deleteTodo = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};