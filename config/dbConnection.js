const mongoose = require("mongoose");

const url = "mongodb+srv://abrnsyh:Abrian123456@cluster0.5oqtgsj.mongodb.net/?retryWrites=true&w=majority";

const dbConnection = mongoose.connect(url);

module.exports = dbConnection;
