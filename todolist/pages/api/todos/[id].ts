import { NextApiRequest, NextApiResponse } from "next";
import Data from "../../../lib/data";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "PATCH") {
    try {
      const todoId = Number(req.query.id);
      const todo = Data.todo.exist({ id: todoId });

      if (!todo) {
        res.statusCode = 404;
        res.end();
      }

      const todos = await Data.todo.getList();
      const changedTodos = todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      });

      Data.todo.write(changedTodos);
      res.statusCode = 200;
      res.end();
    } catch (error) {
      console.log(error);
      res.statusCode = 500;
      res.send(error);
    }
  }

  if (req.method === "DELETE") {
    try {
      const todoId = Number(req.query.id);
      const todo = Data.todo.exist({ id: todoId });

      if (!todo) {
        res.statusCode = 404;
        res.end();
      }

      const todos = Data.todo.getList();
      const filteredTodos = todos.filter((todo) => todo.id !== todoId);
      Data.todo.write(filteredTodos);
      res.statusCode = 200;
      res.end();
    } catch (error) {
      console.log(error);
      res.statusCode = 500;
      res.send(error);
    }
  }

  res.statusCode = 405;
  return res.end;
};
