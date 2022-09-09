const express = require("express");
const router = express.Router();

const {
	getAllCourses,
	getCourseById,
	addCourse,
	updateCourseById,
	deleteCourseById,
} = require("../controller/coursesController");

router.get("/", getAllCourses);
router.get("/:id", getCourseById);
router.post("/", addCourse);
router.put("/:id", updateCourseById);
router.delete("/:id", deleteCourseById);

module.exports = router;
