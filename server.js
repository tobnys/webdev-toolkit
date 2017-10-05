// REQUIRE
const express = require("express");
const morgan = require("morgan");
const config = require("./config");

const app = express();

app.use(morgan("common"));
app.use(express.static("public"));

// ROUTES
app.get("/", (req, res) => {

});

var runServer = function (callback) {
    app.listen(config.PORT, function () {
        console.log('Listening on localhost:' + config.PORT);
        if (callback) {
            callback();
        }
    });
};

if (require.main === module) {
    runServer(function (err) {
        if (err) {
            console.error(err);
        }
    });
};

exports.app = app;
exports.runServer = runServer;

app.listen(8080);