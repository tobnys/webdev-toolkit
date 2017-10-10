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

let server;

function runServer() {
    return new Promise((resolve, reject) => {
        const port = process.env.PORT || 3000
        server = app.listen(port, function () {
            console.log('Listening on localhost:' + port);
            resolve(server);
        }).on("error", err => {
            reject(err);
        });
    });
};

function closeServer(){
    return new Promise((resolve, reject) => {
        server.close(err => {
            if(err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
};

if (require.main === module) {
    runServer().catch(err => console.error(err));
};

module.exports = {app, runServer, closeServer};