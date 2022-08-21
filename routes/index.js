const express = require("express");
const router = express.Router();

const hewanRouter = require("./hewan.route");

router.get("/", (req, res) => {
	res.json("Express App");
});

router.use("/hewan", hewanRouter);

module.exports = router;
