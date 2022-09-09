const express = require("express");
const router = express.Router();

const instructorRouter = require("./instructorRouter");
const coursesRouter = require("./coursesRouter");
const participantsRouter = require("./participantsRouter");

router.get("/", (req, res) => {
	res.json("Welcome to my app");
});

router.use("/instructors", instructorRouter);
router.use("/courses", coursesRouter);
router.use("/participants", participantsRouter);

module.exports = router;
