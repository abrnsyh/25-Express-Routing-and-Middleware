const express = require("express");
const bodyParser = require("body-parser");

const rootRouter = require("./routes/index");

const app = express();
const PORT = process.env.PORT || 3000;

const customMiddleware = (req, res, next) => {
	console.log("this is logger");
	next();
};

app.use(express.json());
app.use(bodyParser.json());
app.use(customMiddleware);
app.use(rootRouter);

app.listen(PORT, () => {
	console.log("Server run");
});
