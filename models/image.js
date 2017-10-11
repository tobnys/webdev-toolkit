const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const imageSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
    },
    URL: {
        type: String,
        unique: true,
    },
    category: {
        type: String,
    },
});

exports.Image = mongoose.model("Image", imageSchema);
