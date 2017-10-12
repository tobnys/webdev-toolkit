const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const axios = require("axios");

const {User} = require('../models/user');;

const functionalRouter = express.Router();

functionalRouter.get("/fonts/:sort", (req, res) => {
    axios.get("https://www.googleapis.com/webfonts/v1/webfonts", {
        params: {
            key: "AIzaSyCFi8QJL_jEJdhXu-tr-1mqLpoOJzJuYGg",
            sort: req.params.sort
        }
    }).then((_res) => {
        res.send(_res.data);
    }).catch((err) => {
        if(err){
            console.log(err);
        }
    });
});

functionalRouter.get("/text/", (req, res) => {
    console.log(req.query);
    generateString(req.query.p, req.query.s, req.query.w)
});

module.exports = {functionalRouter};