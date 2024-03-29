import Car from "../../models/Car.js";

const getAllCars = async (req, res) => {
  const allCars = await Car.find();
  res.json(allCars);
};

export default getAllCars;
