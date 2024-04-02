import Car from "../../models/Car.js";

const addCar = async (req, res) => {
  const car = await Car.create(req.body);
  res.status(201).json(car);
};

export default addCar;
