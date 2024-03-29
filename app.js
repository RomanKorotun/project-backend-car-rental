import express from "express";
import logger from "morgan";
import cors from "cors";
import carsRouter from "./routes/api/cars-router.js";

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(cors());

app.use(logger(formatsLogger));

app.use(express.json());

app.use("/api/cars", carsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not Found" });
});

app.use((error, req, res, next) => {
  const { status = 500, message = "Server error" } = error;
  res.status(status).json({ message });
});

export default app;
