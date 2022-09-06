import express from "express";
import userRouter from "./src/routes/user/user";

const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/", (_, res) => {
  res.send("Express + TypeScript Server");
});

app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log("⚡️[server]: Server is running at https://localhost:3000");
});
