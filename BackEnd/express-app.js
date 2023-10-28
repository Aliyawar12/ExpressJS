const dotenv = require("dotenv").config();
const connectDB = require("./config/connectDB");
const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require("./Routes/taskRoute");
const userRoutes = require("./Routes/userRoute");
const CourseRoutes = require("./Routes/CourseRoute");
const app = express();

const PORT = process.env.PORT || 5000;


//Connection to DataBase Call here
connectDB(); 

app.get("/", (req, res) => {
  res.send("Home Page");
});

connectDB();
app.listen(PORT, () => {
  console.log(`Run Server on ${PORT}`);
});

app.use(express.json());

app.use("/tasks", taskRoutes);
app.use("/", userRoutes);
app.use("/", CourseRoutes);
app.use("/", userRoutes);
