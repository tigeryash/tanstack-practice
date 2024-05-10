import axios from "axios";
import { Todo } from "../types/todo";

const BASE_URL = "http://localhost:8080";
const axiosInstance = axios.create({ baseURL: BASE_URL });

export const getTodosIds = async () => {
  return (await axiosInstance.get<Todo[]>("todos")).data.map((todo) => todo.id);
};

export const getTodo = async (id: number) => {
  return (await axiosInstance.get<Todo>(`todos/${id}`)).data;
};

export const createTodo = async (data: Todo) => {
  return await axiosInstance.post("todos", data);
};

export const updateTodo = async (data: Todo) => {
  return await axiosInstance.put(`todos/${data.id}`, data);
};

export const deleteTodo = async (id: number) => {
  return await axiosInstance.delete(`todos/${id}`);
};
