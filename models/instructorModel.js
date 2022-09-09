const mongoose = require("mongoose");

const instructorSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minLength: 1,
		maxLength: 100,
	},
	dateOfBirth: {
		type: Date,
		required: true,
	},
	location: {
		type: String,
		required: false,
	},
});

const instructorModel = mongoose.model("Instructors", instructorSchema);

module.exports = instructorModel;
