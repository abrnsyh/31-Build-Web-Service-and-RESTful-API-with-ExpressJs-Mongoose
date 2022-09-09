const participantModel = require("../models/participantsModel");

module.exports = {
	getAllParticipants: async (req, res) => {
		const participants = await participantModel.find({}).populate({
			path: "courses",
			populate: { path: "instructor" },
		});
		res.json(participants);
	},
	getParticipantById: async (req, res) => {
		const { id } = req.params;
		const participant = await participantModel.findById(id).populate({
			path: "courses",
			populate: { path: "instructor" },
		});
		res.json(participant);
	},
	addParticipant: async (req, res) => {
		const data = req.body;
		const participant = new participantModel(data);
		try {
			await participant.save();
			res.json({
				message: "New participant added!",
				participant: participant,
			});
		} catch (error) {
			res.json({
				error: error.message,
			});
		}
	},
	updateParticipantById: async (req, res) => {
		const { id } = req.params;
		participantModel.findByIdAndUpdate(id, req.body, { returnDocument: "after" }, (err, doc) => {
			if (err) return res.json({ error: err });
			return res.json({
				message: "participant data updated",
				course: doc,
			});
		});
	},
	deleteParticipantById: async (req, res) => {
		const { id } = req.params;
		await participantModel.findByIdAndRemove(id);
		res.json({
			message: `participant with id ${id} removed`,
		});
	},
};
