import type { Request, Response } from "express";
import { todos, type TodoType } from "../data/todos";
import crypto from "node:crypto";
import { todo } from "node:test";

/**
 * This function will fetch all the todos available to a user
 * @param req - Basic Express Request
 * @param res - Basic Express Response
 */
export async function GetAllTodos(req: Request, res: Response) {
  try {
    res.json({
      success: true,
      msg: "Todos fetched successfully",
      data: todos,
    });
  } catch (err: unknown) {
    console.log(err);
    res.status(500).json({
      success: false,
      err: "Internal Server Error",
    });
  }
}

/**
 * Creates a todo when called inside a router
 * Method - POST
 */
export async function CreateATodo(
  req: Request<{}, {}, Partial<TodoType>>,
  res: Response,
) {
  try {
    const todoBody = req.body;

    console.log(todoBody);

    if (!todoBody) {
      return res.status(400).json({
        success: false,
        err: "Can not send empty todo",
      });
    }

    if (
      typeof todoBody.desc !== "string" ||
      typeof todoBody.title !== "string"
    ) {
      return res.status(400).json({
        success: false,
        err: "Failed to save todo",
      });
    }

    const newTodo: TodoType = {
      id: crypto.randomBytes(16).toString("hex"),
      title: todoBody.title,
      desc: todoBody.desc,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    todos.push(newTodo);

    res.status(201).json({
      success: true,
      msg: "Todo created successfully",
      data: newTodo,
    });
  } catch (err: unknown) {
    console.log(err);
    res.status(500).json({
      success: false,
      err: "Internal Server Error",
    });
  }
}
