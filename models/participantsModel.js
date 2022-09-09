const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const participantSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minLength: 1,
		maxLength: 50,
	},
	dateOfBirth: {
		type: Date,
		required: true,
	},
	email: {
		type: String,
		required: false,
		maxLength: 50,
	},
	phone: {
		type: Number,
		required: false,
		max: 9999999999999,
	},
	courses: [{ type: Schema.Types.ObjectId, ref: "Courses", require: false }],
});

const participantModel = mongoose.model("Participants", participantSchema);

module.exports = participantModel;
