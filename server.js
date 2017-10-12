// REQUIRE
const express = require("express");
const morgan = require("morgan");
const config = require("./config");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");

// OBJECT DESTRUCTURING
const {Image} = require("./models/image");
const {functionalRouter} = require("./api/exports");

// INITIALIZE THE EXPRESS APP
const app = express();

// APP.USE
app.use(morgan("common"));
app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 

//app.use(passport.initialize());
//passport.use(basicStrategy);
//passport.use(jwtStrategy);

// MONGOOSE PROMISES
mongoose.Promise = global.Promise;

// ROUTES
app.get("/", (req, res) => {

});

app.use("/api/functional/", functionalRouter);
//app.use("/api/users/", usersRouter);
//app.use("/api/auth", authRouter);

// CORS
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
    if (req.method === 'OPTIONS') {
        return res.send(204);
    }
    next();
});

// Catch all other routes that do not send a response and give an error message to the client.


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
        //seedDatabase();
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