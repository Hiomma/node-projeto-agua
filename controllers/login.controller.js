const express = require('express');
const models = require("../models");
const md5 = require("md5");
const jwt = require("jsonwebtoken");
const retornarSecretKey = require("../config/auth.config");

var router = express.Router();


function loginController() {

    router.route("/login").post(login);

    return router;

    async function login(req, res) {
        models.Users.findOne({
            where: { login: req.body.login }
        }).then(async data => {
            if (!data) {
                res.status(401).json("Login e senha errados!")
            } else {
                if (md5(req.body.senha) == data.password) {
                    jwt.sign({ user: data.username }, retornarSecretKey, { expiresIn: '24h' }, (err, token) => {
                        res.json({
                            id: data.id,
                            user: data.username,
                            token: token
                        })
                    });
                } else {
                    res.status(401).json(respostaPadrao(false, {}, "Login e senha errados!", 401))
                }
            }
        })
    }
}

module.exports = loginController;