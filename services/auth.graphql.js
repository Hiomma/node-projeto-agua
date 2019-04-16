const retornarSecretKey = require("../config/auth.config");
const jwt = require("jsonwebtoken");

async function auth(req) {
    if (!req.headers.authorization) {
        return false;
    }

    return await jwt.verify(req.headers.authorization.split(" ")[1], retornarSecretKey(), async (err, authData) => {
        if (err) {
            return false;
        } else {
            return true;
        }
    });
}

module.exports = auth;