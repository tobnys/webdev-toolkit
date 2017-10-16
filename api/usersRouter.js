const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const passport = require('passport');
const bcrypt = require("bcryptjs");

const {User} = require('../models/user');

const usersRouter = express.Router();
const jsonParser = bodyParser.json();

mongoose.Promise = global.Promise;

usersRouter.post("/login", (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    User.findOne({username: username}).exec().then(user => {
        if (!user) {
            return res.status(401).json({
                message: "Not found!"
            });
        } 
        else {
            user.validatePassword(req.body.password, function(err, isValid) {
                if (err) {
                    console.log('There was an error validating the password.');
                }
                if (!isValid) {
                    return res.status(401).json({
                        message: "Not found"
                    });
                } else {
                    var logInTime = new Date();
                    console.log(`User ${username} logged in at ${logInTime}`);
                    return res.json(user);
                }
            });
        };
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
}); 

usersRouter.post("/register", (req, res) => {
    console.log(req.body);
    let username = req.body.username;
    username = username.trim();
    let password = req.body.password;
    password = password.trim();

    bcrypt.genSalt(10, function(err, salt) {
        if (err) {
            return res.status(500).json({
                message: 'Internal server error'
            });
        }

        bcrypt.hash(password, salt, function(err, hash) {
            if (err) {
                return res.status(500).json({
                    message: 'Internal server error'
                });
            }
        
        User.create({
            username: username,
            password: hash,
        }, function(err, item) {
            if (err) {
                return res.status(500).json({
                    message: 'Internal Server Error'
                });
            }
            if(item) {
                console.log("User `" + username + "` created.");
                return res.json(item);
            }
        });
        });
    });
});

module.exports = {usersRouter};

/*

    User.findOne({username: username}, (items, err) => {
        if(err){
            return res.status(500).json({
                message: "Internal server error"
            });
        }
        if(!items){
            return res.status(401).json({
                message: "User does not exist"
            });
        }
        else {
            items.validatePassword(password, (isValid, err) => {
                if(!isValid){
                    return res.status(401).json({
                        message: "Not found"
                    });
                }
                else {
                    var logTime = new Date();
                    console.log(`User ${username} logged in at ${logTime}`);
                    return res.json(items);
                }
            })
        }
    });

*/