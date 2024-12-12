import { log } from "console";
import express from "express";

const app = express();

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`NodeJS/Express Server Started on Port ${port}`)
);
