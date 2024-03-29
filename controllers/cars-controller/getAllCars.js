import Car from "../../models/Car.js";

const getAllCars = async (req, res) => {
  const { page = 1, limit = 12 } = req.query;
  const skip = (page - 1) * limit;
  const allCars = await Car.find({}, { skip, limit });
  res.json(allCars);
};

export default getAllCars;
