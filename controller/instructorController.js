const { instructorModel } = require("../models/index");

module.exports = {
	getAllInstructor: async (req, res) => {
		const instructor = await instructorModel.find({});
		res.json(instructor);
	},
	getInstructorById: async (req, res) => {
		const { id } = req.params;
		const instructor = await instructorModel.findById(id);
		res.json(instructor);
	},
	addInstructor: async (req, res) => {
		const data = req.body;
		const instructor = new instructorModel(data);
		try {
			await instructor.save();
			res.json({
				message: "New instructor created!",
				instructor: instructor,
			});
		} catch (error) {
			res.json({
				error: error.message,
			});
		}
	},
	updateInstructorById: async (req, res) => {
		const { id } = req.params;
		instructorModel.findByIdAndUpdate(id, req.body, { returnDocument: "after" }, (err, doc) => {
			if (err) return res.json({ error: err });
			return res.json({
				message: "instructor data updated",
				instructor: doc,
			});
		});
	},
	deleteInstructorById: async (req, res) => {
		const { id } = req.params;
		await instructorModel.findByIdAndRemove(id);
		res.json({
			message: `instructor with id ${id} removed`,
		});
	},
};
