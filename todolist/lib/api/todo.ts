import axiosAPI from ".";
import { TodoType } from "../../types/todo";

interface AddTodoAPIBody {
  text: string;
  color: TodoType["color"];
}
export const getTodosAPI = () => axiosAPI.get<TodoType[]>("/api/todos");
export const checkTodoAPI = (id: number) => axiosAPI.patch(`api/todos/${id}`);
export const addTodoAPI = (body: AddTodoAPIBody) => axiosAPI.post("api/todos", body);
export const deleteTodoAPI = (id: number) => axiosAPI.delete(`api/todos/${id}`);