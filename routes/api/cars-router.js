import express from "express";
import { addCar, getAllCars } from "../../controllers/cars-controller/index.js";
import { validateBody, ctrlWrapper } from "../../decorators/index.js";
import { carAddSchema } from "../../models/Car.js";
import isEmptyBody from "../../middleware/isEmptyBody.js";

const carsRouter = express.Router();

carsRouter.get("/", ctrlWrapper(getAllCars));

carsRouter.post(
  "/",
  isEmptyBody,
  validateBody(carAddSchema),
  ctrlWrapper(addCar)
);

export default carsRouter;
