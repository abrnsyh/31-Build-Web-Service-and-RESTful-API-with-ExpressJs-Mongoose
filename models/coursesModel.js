const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const courseSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		minLength: 1,
		maxLength: 50,
	},
	description: {
		type: String,
		required: true,
		minLength: 1,
		maxLength: 50,
	},
	instructor: {
		type: Schema.Types.ObjectId,
		ref: "Instructors",
		required: true,
	},
	scheduleDateTime: {
		type: Date,
		required: true,
	},
});

const courseModel = mongoose.model("Courses", courseSchema);

module.exports = courseModel;
