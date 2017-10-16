const chai = require("chai");
const chaiHttp = require("chai-http");
const mongoose = require("mongoose");

const should = chai.should();

const {app, runServer, closeServer} = require("../server");

const {User} = require("../models/user");
const {Statistics} = require("../models/statistics");

chai.use(chaiHttp);

function seedDatabase(){
    User.create({
        username: "TestUser",
        password: "TestPassword"
    });
    Statistics.create({
        id: 5,
        stringsGenerated: 10,
        successfulLogins: 10,
        fontsGenerated: 10
    })
}

function dropDatabase(){
    return new Promise((resolve, reject) => {
        mongoose.connection.dropDatabase().then(result => resolve(result)).catch(err => reject(err));
    });
}

describe("Endpoints", function(){

    before(function(){
        return runServer();
    });

    after(function(){
        return closeServer();
    });

    beforeEach(function(){
        return seedDatabase();
    });

    afterEach(function(){
        return dropDatabase();
    });

    describe("Root GET endpoint", function() {
        it("should return status 200 on GET", function(){
            return chai.request(app).get("/").then(function(res){
                res.should.have.status(200);
            });
        });
    });

    describe("API STATISTICS endpoint", function() {
        it("should return status 200 on GET", function(){
            return chai.request(app)
            .get("/api/functional/statistics")
            .then(function(res){
                res.should.have.status(200);
            });
        });
    });

    describe("API USERS endpoint", function() {
        it("Should return a user on register POST", function(){
            const sampleUser = {
                username: "TestUser2",
                password: "TestPassword2"
            };

            return chai.request(app)
            .post(`/api/users/register`)
            .send(sampleUser)
            .then(res => {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a("object");
                res.body.username.should.be.a("string");
                res.body.should.have.all.keys("__v", "_id", "username", "password");
            });
        });
    });

    describe("API FUNCTIONS endpoint", function() {
        it("Should return fonts on fonts GET", function(){
            return chai.request(app)
            .get(`/api/functional/fonts/alpha`)
            .then(res => {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.not.be.null;
                res.body.should.be.a("object");
            });
        });

        it("Should return a string on text GET", function(){
            return chai.request(app)
            .get(`/api/functional/text`)
            .then(res => {
                res.should.have.status(200);
                res.body.should.be.a("object");
                res.body.should.not.be.null;
            });
        });
        
        it("Should return statistics on statistics GET", function(){
            return chai.request(app)
            .get(`/api/functional/statistics`)
            .then(res => {
                res.should.have.status(200);
                res.should.be.a("object");
            });
        });
    });
});