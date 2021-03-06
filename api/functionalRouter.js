const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const axios = require("axios");
const loremIpsum = require("lorem-ipsum")

// L-I
let output = loremIpsum();

// OBJECT DESTRUCTURING
const {User} = require('../models/user');
const {Statistics} = require("../models/statistics");

const functionalRouter = express.Router();

functionalRouter.get("/fonts/:sort", (req, res) => {
    axios.get("https://www.googleapis.com/webfonts/v1/webfonts", {
        params: {
            key: "AIzaSyCFi8QJL_jEJdhXu-tr-1mqLpoOJzJuYGg",
            sort: req.params.sort
        }
    }).then((_res) => {
        Statistics.update({id: 1}, {$inc: {fontsGenerated: 6}}, function(err, doc) {
            console.log("Font statistics updated.");
        });
        res.send(_res.data);
    }).catch((err) => {
        if(err){
            console.log(err);
        }
    });
});

functionalRouter.get("/text/", (req, res) => {
    output = loremIpsum({
        count: req.query.p              // Number of words, sentences, or paragraphs to generate. 
      , units: 'paragraphs'            // Generate words, sentences, or paragraphs. 
      , sentenceLowerBound: 5         // Minimum words per sentence. 
      , sentenceUpperBound: 15        // Maximum words per sentence. 
      , paragraphLowerBound: 3        // Minimum sentences per paragraph. 
      , paragraphUpperBound: 7        // Maximum sentences per paragraph. 
      , format: 'html'               // Plain text or html
    });
    Statistics.update({id: 1}, {$inc: {stringsGenerated: 1}}, function(err, doc) {
        console.log("String statistics updated.");
    });
    res.send(output);
});

functionalRouter.get("/statistics", (req, res) => {
    Statistics.findOne({id: 1}).exec().then(function(result){
        res.json(result);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

module.exports = {functionalRouter};