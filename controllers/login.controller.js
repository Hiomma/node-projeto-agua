const express = require('express');
const respostaPadrao = require("../models/resposta_padrao");
const models = require("../models");
const md5 = require("md5");
const jwt = require("jsonwebtoken");
const retornarSecretKey = require("../configs/config");
const clientLdap = require("../configs/ldap")

var router = express.Router();


function loginController() {

    router.route("/login").post(login);

    return router;

    async function login(req, res) {
        models.Users.findOne({
            where: { login: req.body.login }
        }).then(data => {
            if (!data) {
                res.status(401).json(respostaPadrao(false, {}, "Login e senha errados!", 401))
            } else {
                if (md5(req.body.senha) == data.password) {
                    jwt.sign({ user: data.username }, retornarSecretKey, { expiresIn: '24h' }, (err, token) => {
                        res.json(respostaPadrao(
                            true,
                            data = {
                                id: data.id,
                                user: data.username,
                                token: token
                            },
                            "Logado com Sucesso!"))
                    });
                } else {
                    res.status(401).json(respostaPadrao(false, {}, "Login e senha errados!", 401))
                }
            }
        })
    }
}

module.exports = loginController;