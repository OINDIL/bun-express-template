// entry point
import express from "express";
import TodoRouter from "./routers/todos.router";

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    success: true,
    msg: "Server is running fine",
  });
}); // server starting code

app.use("/api", TodoRouter);

export default app;
