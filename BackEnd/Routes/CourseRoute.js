const express = require("express");
const router = express.Router();
const CourseController = require("../Controllers/CourseController");

router.post("/course", CourseController.createCourse);

module.exports = router;
