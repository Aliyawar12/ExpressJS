const express = require("express");
const Course = require("../Models/Course.js");
const User = require("../Models/Users.js");
const multer = require("multer");

const upload = multer();

exports.createCourse = async (req, res) => {
// upload.fields([
//   { name: "documents", maxCount: 5 },
//   { name: "videos", maxCount: 5 },    
// ])

  try {

    const newCourse = new Course({
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
      chapters: req.body.chapters,
      duration: req.body.duration,
      level: req.body.level,
      tag: req.body.tags,
      imageURL: req.body.imageURL,
      // documents: req.files.documents.map(file => ({
      // filename: file.filename,
      // fileId: file.id,
      // })),
      // videos: req.files.videos.map(file => ({
      //   filename: file.filename,
      //   fileId: file.id,
      // })),
    });

    if (!newCourse.title || !newCourse.content || !newCourse.author) {
      return res.status(400).json({ message: "Title, content, and author are required." });
    }

    const savedCourse = await newCourse.save();

    const userId = req.body.author;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    user.courses.push(savedCourse._id);
    await user.save();

    res.status(201).json(savedCourse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create Course" });
  }
};
