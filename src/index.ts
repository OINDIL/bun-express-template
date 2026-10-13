// server starting code
import app from "./server";

const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
  console.log("Server is running on port: ", PORT);
});

process.on("SIGINT", () => {
  server.close(() => {
    console.log("Closing Server, See you next time.");
    process.exit(0);
  });
});
