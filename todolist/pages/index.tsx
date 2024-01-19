import React from "react";
import { NextPage } from "next";
import TodoList from "../components/TodoList";
import { TodoType } from "../types/todo";

const todos: TodoType[] = [
  { id: 1, text: "마트 가서 장보기", color: "red", checked: false },
  { id: 2, text: "코딩하기", color: "yellow", checked: true },
  { id: 3, text: "알고리즘 공부하기", color: "green", checked: false },
  { id: 4, text: "동생 숙제 검사하기", color: "orange", checked: false },
  { id: 5, text: "탁구 치기", color: "red", checked: true },
  { id: 6, text: "산책하기", color: "blue", checked: true },
  { id: 7, text: "밥 하기", color: "orange", checked: false },
];

const index: NextPage = () => {
  return <TodoList todos={todos}/>;
};
export default index;
