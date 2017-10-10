const chai = require("chai");
const chaiHttp = require("chai-http");

const {app, runServer, closeServer} = require("../server");

const should = chai.should();

chai.use(chaiHttp);

describe("Endpoints", function(){

    before(function(){
        return runServer();
    });

    after(function(){
        return closeServer();
    });


    it("Should return OK on root GET", function(){
        return chai.request(app).get("/").then(res => {
            res.should.have.status(200);
        });
    });
});