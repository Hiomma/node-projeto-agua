const retornarSecretKey = require("../config/auth.config");
const jwt = require("jsonwebtoken");

let auth = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).json("Erro no envio do Bearer");
    }

    jwt.verify(req.headers.authorization.split(" ")[1], retornarSecretKey(), async (err, authData) => {
        if (err) {
            return res.json(err);
        } else {
            next();
        }
    });
}

module.exports = auth;