const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const StatisticsSchema = mongoose.Schema({
    id: {
        type: Number,
        unique: true,
    },
    stringsGenerated: {
        type: Number
    },
    successfulLogins: {
        type: Number
    },
    fontsGenerated: {
        type: Number
    }
});

const Statistics = mongoose.model('Statistics', StatisticsSchema);

module.exports = {Statistics};