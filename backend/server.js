import express from "express";
import { connectDB } from "./config/dbConfig.js";

import dotenv from "dotenv";
import "dotenv/config";

const app = express();
const port = 5000;

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
connectDB();
