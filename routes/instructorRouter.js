const express = require("express");
const router = express.Router();

const {
	getAllInstructor,
	getInstructorById,
	addInstructor,
	updateInstructorById,
	deleteInstructorById,
} = require("../controller/instructorController");

router.get("/", getAllInstructor);
router.get("/:id", getInstructorById);
router.post("/", addInstructor);
router.put("/:id", updateInstructorById);
router.delete("/:id", deleteInstructorById);

module.exports = router;
