var express = require('express');
var respostaPadrao = require("../models/resposta_padrao");
var models = require("../models");

var router = express.Router();


function usersController() {

    router.route("/usuario/:id").get(getById);

    return router;


    async function getById(req, res) {
        models.Users.findOne({ where: { id: req.params.id } }).then(data => {
            if (!data) {
                res.status(401).json(respostaPadrao(false, {}, "Não há usuário com essa ID!", 400))
            } else {
                res.json(respostaPadrao(data = data));
            }
        })
    }
}

module.exports = usersController;