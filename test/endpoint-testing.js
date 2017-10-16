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

    describe("GET endpoint", function() {
        it("should return status 200 on root GET", function(){
            return chai.request(app).get("/").then(function(res){
                res.should.have.status(200);
            });
        });
    });
});