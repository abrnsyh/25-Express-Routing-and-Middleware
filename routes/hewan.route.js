const express = require("express");
const router = express.Router();

const {
	getAllHewan,
	postHewan,
	getHewanByID,
	postChecker,
	updateHewanByID,
	deleteHewanByID,
} = require("../controller/hewan.controller");

router.get("/", getAllHewan);
router.post("/", postChecker, postHewan);
router.get("/:id", getHewanByID);
router.put("/:id", postChecker, updateHewanByID);
router.delete("/:id", deleteHewanByID);

module.exports = router;
