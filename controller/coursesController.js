const { courseModel } = require("../models/index");

module.exports = {
	getAllCourses: async (req, res) => {
		const courses = await courseModel.find({}).populate("instructor");
		res.json(courses);
	},
	getCourseById: async (req, res) => {
		const { id } = req.params;
		const course = await courseModel.findById(id).populate("instructor");
		res.json(course);
	},
	addCourse: async (req, res) => {
		const data = req.body;
		const course = new courseModel(data);
		try {
			await course.save();
			res.json({
				message: "New course created!",
				course: course,
			});
		} catch (error) {
			res.json({
				error: error.message,
			});
		}
	},
	updateCourseById: async (req, res) => {
		const { id } = req.params;
		courseModel.findByIdAndUpdate(id, req.body, { returnDocument: "after" }, (err, doc) => {
			if (err) return res.json({ error: err });
			return res.json({
				message: "course data updated",
				course: doc,
			});
		});
	},
	deleteCourseById: async (req, res) => {
		const { id } = req.params;
		await courseModel.findByIdAndRemove(id);
		res.json({
			message: `course with id ${id} removed`,
		});
	},
};
