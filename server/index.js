import express from "express";
import "dotenv/config";
import dbConnection from "./config/dbConfig.js";

const app = express();
app.use(express.json());
dbConnection();

const port = process.env.PORT || 4050;

app.listen(port, () =>
  console.log(`NodeJS/Express Server Started on Port ${port}`)
);
