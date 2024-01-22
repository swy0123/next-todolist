import React from "react";
import { NextPage } from "next";
import TodoList from "../components/TodoList";
import { TodoType } from "../types/todo";
import { getTodosAPI } from "../lib/api/todo";
import { wrapper } from "../store";
import { todoActions } from "../store/todo";

interface IProps {
  todos: TodoType[];
}

const app: NextPage<IProps> = () => {
  return <TodoList />;
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  try {
    console.log(store);
    const { data } = await getTodosAPI();
    store.dispatch(todoActions.setTodo(data));
    return { props: {} };
  } catch (error) {
    console.log(error);
    return { props: {} };
  }
});

export default app;
