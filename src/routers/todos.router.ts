import { Router } from "express";
import { CreateATodo, GetAllTodos } from "../controllers/todos.controller";

const router = Router();

router.get("/todos", GetAllTodos);
router.post("/todos", CreateATodo);

export default router;
