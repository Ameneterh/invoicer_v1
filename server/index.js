import express from "express";
import "dotenv/config";
import dbConnection from "./config/dbConfig.js";
import businessRouter from "./routes/business.routes.js";

const app = express();
app.use(express.json());
dbConnection();

const port = process.env.PORT || 4050;

app.use("/server/business", businessRouter);

app.listen(port, () =>
  console.log(`NodeJS/Express Server Started on Port ${port}`)
);
