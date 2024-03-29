import mongoose from "mongoose";
import app from "./app.js";
import "dotenv/config";

const { DB_HOST, PORT = 3030 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on ${PORT} PORT`))
  )
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
