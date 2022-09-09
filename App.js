const express = require("express");
const cors = require("cors");
const dbConnection = require("./config/dbConnection");
const rootRouter = require("./routes/index");

const app = express();
const PORT = 3000;

dbConnection.then(() => console.log("berhasil connect")).catch((error) => console.log("error: ", error));

app.use(express.json());
app.use(cors());
app.use(rootRouter);

app.listen(PORT, () => {
	console.log("Server is running");
});
