const retornarSecretKey = require("../configs/config");
const jwt = require("jsonwebtoken");
const respostaPadrao = require("../models/resposta_padrao")

let auth = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).json(respostaPadrao(false, {}, "Erro no envio do Bearer", 401));
    }

    jwt.verify(req.headers.authorization.split(" ")[1], retornarSecretKey, async (err, authData) => {
        if (err) {
            return res.json(err);
        } else {
            next();
        }
    });
}

module.exports = auth;