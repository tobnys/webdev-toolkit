const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const textSchema = new mongoose.Schema({
    words: [String]
});

exports.Text = mongoose.model("Text", textSchema);
