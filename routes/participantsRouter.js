const express = require("express");
const router = express.Router();

const {
	getAllParticipants,
	getParticipantById,
	addParticipant,
	updateParticipantById,
	deleteParticipantById,
} = require("../controller/participantsController");

router.get("/", getAllParticipants);
router.get("/:id", getParticipantById);
router.post("/", addParticipant);
router.put("/:id", updateParticipantById);
router.delete("/:id", deleteParticipantById);

module.exports = router;
