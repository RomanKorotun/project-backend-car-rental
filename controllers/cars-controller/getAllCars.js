import Car from "../../models/Car.js";

const getAllCars = async (req, res) => {
  const { page = 1, limit = 12 } = req.query;
  const skip = (page - 1) * limit;
  const carsPagination = await Car.find({}, "", { skip, limit });
  const allCars = await Car.find();
  res.json({
    carsPagination,
    allCars,
  });
};

export default getAllCars;
