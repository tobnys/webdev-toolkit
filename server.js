// REQUIRE
const express = require("express");
const morgan = require("morgan");
const config = require("./config");
const mongoose = require("mongoose");

const {Image} = require("./models/image");

const app = express();

app.use(morgan("common"));
app.use(express.static("public"));

// ROUTES
app.get("/", (req, res) => {

});

// Catch all other routes that do not send a response and give an error message to the client.
app.all("*", (req, res) => {
    res.sendStatus(500);
});

// Seed database function
function seedDatabase(){
    console.log("Seeding database");
    Image.create({
        title: "Test Image 1",
        URL: "https://i.imgur.com/IIDpHZT.jpg",
        category: "Coding"
    });
    Image.create({
        title: "Test Image 2",
        URL: "https://i.imgur.com/qyGSUGo.jpg",
        category: "Nature"
    });
}

// Check for database collections and seed if nothing is found
Image.findOne({id: 1}).exec(function(err, res) {
    if(res === null) {
        seedDatabase();
    }
});

let server;
function runServer() {
    const port = process.env.PORT || 3000
    return new Promise((resolve, reject) => {
        mongoose.connect(config.DATABASE, err => {
            if(err){
                return reject(err);
            }
            server = app.listen(port, () => {
                console.log('Listening on localhost:' + port);
                resolve();
            }).on("error", err => {
                reject(err);
            });
        });
    });
};

function closeServer(){
    return mongoose.disconnect().then(() => {
        return new Promise((resolve, reject) => {
            server.close(err => {
                if(err) {
                    reject(err);
                    return;
                }
                else resolve();
            });
        });
    });
};

if (require.main === module) {
    runServer().catch(err => console.error(err));
};

module.exports = {app, runServer, closeServer};