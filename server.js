const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const usersController = require("./controllers/users.controller");
const loginController = require("./controllers/login.controller");
const auth = require("./services/auth")


const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use("/api", loginController())
app.use("/api", auth, usersController());

app.listen(3001, () => {
    console.log("Servidor está na porta 3001!");
})