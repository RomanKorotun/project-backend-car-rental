import express from "express";
import { getAllCars } from "../../controllers/cars-controller/index.js";
import { ctrlWrapper } from "../../decorators/index.js";

const carsRouter = express.Router();

carsRouter.get("/", ctrlWrapper(getAllCars));

export default carsRouter;
