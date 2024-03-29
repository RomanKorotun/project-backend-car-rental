import { Schema, model } from "mongoose";

const carShema = new Schema(
  {
    year: {
      type: Number,
      required: true,
    },
    make: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    fuelConsumption: {
      type: String,
      required: true,
    },
    engineSize: {
      type: String,
      required: true,
    },
    accessories: {
      type: Array,
      required: true,
    },
    functionalities: {
      type: [String],
      required: true,
    },
    rentalPrice: {
      type: [String],
      required: true,
    },
    rentalCompany: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    rentalConditions: {
      type: String,
      required: true,
    },
    mileage: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Car = model("car", carShema);
export default Car;
