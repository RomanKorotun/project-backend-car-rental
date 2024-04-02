import express from "express";
import { addCar, getAllCars } from "../../controllers/cars-controller/index.js";
import { ctrlWrapper } from "../../decorators/index.js";

const carsRouter = express.Router();

carsRouter.get("/", ctrlWrapper(getAllCars));

carsRouter.post("/", ctrlWrapper(addCar));

export default carsRouter;
