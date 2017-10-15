const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const bcrypt = require("bcryptjs");

const {User} = require('../models/user');;

const usersRouter = express.Router();
const jsonParser = bodyParser.json();

usersRouter.post("/login", (req, res) => {
    let userName = req.body.username;
    let password = req.body.password;

    User.findOne({userName: userName}, (items, err) => {
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
                    console.log(`User ${userName} logged in at ${logTime}`);
                    return res.json(items);
                }
            })
        }
    });
});

usersRouter.post("/register", (req, res) => {
    console.log(req.body);
    let userName = req.body.username;
    userName = userName.trim();
    let password = req.body.password;
    password = password.trim();

    bcrypt.genSalt(10, (err, salt) => {
        if(err){
            return res.sendStatus(500);
        }

        bcrypt.hash(password, salt, (err, hash) => {
            if(err){
                return res.sendStatus(500);
            }
        });

        User.create({username: userName, password: hash}, (err, item) => {
            if(err){
                return res.sendStatus(500);
            }
            if(item){
                console.log(`${userName} was created.`);
                return res.json(item);
            }
        });
    });
});

module.exports = {usersRouter};