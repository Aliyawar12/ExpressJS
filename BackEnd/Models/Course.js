const mongoose = require("mongoose");
// const connectDB = require("../config/connectDB");
// const Grid = require("gridfs-stream");
// const {GridFsStorage} = require('multer-gridfs-storage');

// const multer = require("multer");

// // Create a connection to your MongoDB database
// const conn = connectDB();

// // Create a GridFS instance
// let gfs;

// conn.then((db) => {
//   gfs = Grid(db, mongoose.mongo);
//   gfs.collection("courses"); // This is the collection name
// }).catch((error) => {
//   console.error(error);
// });

// // Create a storage engine using multer-gridfs-storage
// const storage = new GridFsStorage({

//   url: process.env.MONGO_URI,
//   options: { useNewUrlParser: true, useUnifiedTopology: true },
//   file: (req, file) => {
//     return {
//       filename: file.originalname,
//     };
//   },
// });
// const upload = multer({ storage });

const CourseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a Title"],
      maxlength: 100,
    },
    content: { type: String, required: [true, "Please add Content"] },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    chapters: {
      type: Number,
      required: [true, "Please add the number of Chapters"],
      maxlength: 100,
    },
    duration: {
      type: String,
      required: [true, "Please add Duration"],
      maxlength: 100,
    },
    level: {
      type: String,
      required: [true, "Please add a Level"],
      enum: ["Beginner", "Intermediate", "Advanced"],
      maxlength: 100,
    },
    tags: {
      type: String,
      enum: ["Network", "Cyber Security", "Management", "Tech", "Web Development"],
    },
    imageURL: {
      type: String,
    },
    // documents: [
    //   {
    //     filename: String,
    //     fileId: mongoose.Schema.Types.ObjectId,
    //   },
    // ],
    // videos: [
    //   {
    //     filename: String,
    //     fileId: mongoose.Schema.Types.ObjectId,
    //   },
    // ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Course = mongoose.model("Course", CourseSchema);

module.exports = Course;
