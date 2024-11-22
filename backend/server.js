import express from "express";
import { connectDB } from "./config/dbConfig.js";

import dotenv from "dotenv";
import "dotenv/config";
import portfolioRoute from "./routes/portfolioRoute.js"

const app = express();

//connect to database
connectDB();

// middleware 
app.use(express.json())

// routes
app.use("/api/portfolio", portfolioRoute)

const port = 5000;
app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});

